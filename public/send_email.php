<?php
// Simple PHP script to handle contact form submissions using PHPMailer
// You need to install PHPMailer: composer require phpmailer/phpmailer

ini_set('display_errors', 0);
error_reporting(E_ALL);

// FIX 1: CORS headers must come before anything else (including Content-Type)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// FIX 2: Handle OPTIONS preflight request (important for fetch/axios from React)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// FIX 3: autoload.php must be required BEFORE using PHPMailer classes
if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
    require __DIR__ . '/../vendor/autoload.php';
} else {
    error_log("Composer autoload not found.");
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    // FIX 4: Only accept POST requests
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
        exit;
    }

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        echo json_encode(['success' => false, 'message' => 'No data received or invalid JSON.']);
        exit;
    }

    $name    = isset($data['name'])    ? htmlspecialchars(strip_tags(trim($data['name'])))    : '';
    $email   = isset($data['email'])   ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
    $message = isset($data['message']) ? htmlspecialchars(strip_tags(trim($data['message']))) : '';

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'Please fill all fields.']);
        exit;
    }

    // FIX 5: Also validate that the email is actually valid format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
        exit;
    }

    if (!str_ends_with(strtolower($email), '@gmail.com')) {
        echo json_encode(['success' => false, 'message' => 'Only Gmail addresses are accepted.']);
        exit;
    }

    if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'jm.custodio092001@gmail.com';
            $mail->Password   = 'ycwhabgagcxiitor';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            $mail->setFrom('jm.custodio092001@gmail.com', 'Portfolio Contact Form');
            $mail->addAddress('j.mcustodio2001@gmail.com');
            $mail->addReplyTo($email, $name);

            $mail->isHTML(true);
            $mail->Subject = "New Contact Form Message from $name";

            // FIX 6: Use htmlspecialchars on $name and $email inside HTML body too
            $safeName    = htmlspecialchars($name);
            $safeEmail   = htmlspecialchars($email);
            $safeMessage = nl2br(htmlspecialchars(strip_tags($message)));

            $mail->Body = "
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> $safeName</p>
                <p><strong>Email:</strong> $safeEmail</p>
                <p><strong>Message:</strong><br>$safeMessage</p>
            ";

            // FIX 7: Plain text fallback for email clients that don't support HTML
            $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message";

            $mail->send();
            echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
            exit;
        } catch (Exception $e) {
            error_log("PHPMailer Error: " . $mail->ErrorInfo);
            // FIX 8: Return the actual mailer error (not generic exception message)
            echo json_encode(['success' => false, 'message' => 'Mailer error: ' . $mail->ErrorInfo]);
            exit;
        }
    }

    // Fallback using mail()
    $to      = "j.mcustodio2001@gmail.com";
    $subject = "Contact Form: " . htmlspecialchars($name);
    $headers = "From: jm.custodio092001@gmail.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "<h2>New Message from " . htmlspecialchars($name) . "</h2><p>" . nl2br(htmlspecialchars($message)) . "</p>";

    if (@mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Message sent via fallback mail()!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send. Please ensure PHPMailer is installed.']);
    }

} catch (Throwable $e) {
    error_log("Contact form fatal error: " . $e->getMessage());
    // FIX 9: Don't expose raw error details to the client in production
    echo json_encode(['success' => false, 'message' => 'A server error occurred. Please try again later.']);
}
?>