<?php
require_once('PHPMailer/PHPMailerAutoload.php');
class Mail {
        public static function sendMail($subject, $body, $address) {
                $mail = new PHPMailer();
                $mail->isSMTP();
                $mail->SMTPAuth = true;
                $mail->SMTPSecure = 'ssl';
                $mail->Host = 'smtp.gmail.com';
                $mail->Port = '465';
                $mail->isHTML();
                $mail->Username = 'khitkasthana@gmail.com';
                $mail->Password = 'password@123';
                $mail->SetFrom('khitkasthana@gmail.com');
                $mail->Subject = $subject;
                $mail->Body = $body;
                $mail->AddAddress($address);
                $mail->Send();
        }
}
?>