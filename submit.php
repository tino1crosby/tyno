<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        if (empty($_POST['authorName']) || empty($_POST['email']) || empty($_FILES['manuscript']['name'])) {
            throw new Exception('All fields are required.');
        }

        $authorName = htmlspecialchars($_POST['authorName']);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $manuscript = $_FILES['manuscript'];

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Invalid email format.');
        }

        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($manuscript['name']);

        if (!move_uploaded_file($manuscript['tmp_name'], $uploadFile)) {
            throw new Exception('File upload failed.');
        }

        echo "Submission successful! Thank you, $authorName.";
    } catch (Exception $e) {
        echo 'Error: ' . $e->getMessage();
    }
} else {
    echo 'Invalid request method.';
}
?>
