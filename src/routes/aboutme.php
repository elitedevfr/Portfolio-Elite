<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../style/aboutme.css">
    <title>About me</title>
</head>

<body>
<nav class="navbar">
    <div class="logo">
        <img src="../images/kiir0n.png" alt="Logo">
        <span class="logo-text">Kiir0n</span>
    </div>
    <div class="links">
        <?php
        $linkArray = array(
            array(
                'url' => '../../index.php',
                'name' => 'Home'
            ),
            array(
                'url' => '../routes/aboutme.php',
                'name' => 'About me'
            )
        );

        foreach ($linkArray as $larray) {
            echo '<a href="' . $larray['url'] . '">' . $larray['name'] . '</a>';
        }
        ?>
    </div>
</nav>

<div class="container">
    <h1>ABOUT ME</h1>
    <h2 id="typewriter"></h2>
  
    </div>
</div>


<script src="../js/typewriter.js"></script>
</body>
</html>
