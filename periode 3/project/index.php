<?php

// tijdelijk repair
parse_str($HTTP_RAW_POST_DATA, $_POST);
echo $_POST['password'];

$correctPassword = 'test123';



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <script src="js/jquery-3.2.0.min.js"></script>
    <script src="js/Script.js"></script>
</head>
<body>

<?php
if (isset($_POST['password'])) {
    $passwordEntry = $_POST['password'];
    if ($passwordEntry == $correctPassword) {
        ?>
        <!-- Login correct -->
        <h1>
            Correct password
        </h1>
        <?php
    } else {
        ?>
        <!-- Wrong password -->
        <form action="index.php" method="post">
            <table>
                <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input type="password" id="password" name="password">
                    </td>
                </tr>
            </table>
        </form>
    <?php }
} else {
    ?>
    <!-- Start login -->
    <form action="index.php" method="post">
        <table>
            <tr>
                <td>
                    Password:
                </td>
                <td>
                    <input type="password" id="password" name="password">
                </td>
            </tr>
        </table>
    </form>
<?php } ?>
</body>
</html>
