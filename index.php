<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css">
    <title>Home</title>
</head>

<body>
<nav class="navbar">
    <div class="logo">
        <img src="src/images/kiir0n.png" alt="Logo">
        <span class="logo-text">Kiir0n</span>
    </div>
    <div class="links">
        <?php
        $linkArray = array(
            array(
                'url' => 'index.php',
                'name' => 'Home'
            ),
            array(
                'url' => '../src/routes/aboutme.php',
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
    <h1>KIIR0N</h1>
    <h2 id="typewriter"></h2>
    <div class="social-links">
        <?php
        $socialLinks = array(
            array(
                'url' => 'https://github.com/Kiir0n',
                'image' => 'src/images/github.png'
            ),
            array(
                'url' => 'https://twitter.com/Kiir0n',
                'image' => 'src/images/twitter-sign.png'
            ),
            array(
                'url' => 'https://instagram.com/@Kiir0n',
                'image' => 'src/images/instagram.png'
            )
        );

        foreach ($socialLinks as $link) {
            echo '<a href="' . $link['url'] . '" target="_blank"><img src="' . $link['image'] . '"></a>';
        }
        ?>
    </div>
</div>

<script src='src/js/typewriter-home.js'></script>
</body>
</html>
