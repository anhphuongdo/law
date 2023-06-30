<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../dist/header.css">
    </head>
    <body>
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand"><img src="../assets/photos/Logo UEH trắng.png"></a>
            <a class="navbar-brand">School of Law</a>
            <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Career</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Reseach
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">UEH 500</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Science Research</a>
                        </div>
                    </li>
                </ul>
                <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->
            </div>
            <form action="" method="post">
                <input type="text" class="finding hide" id="input-bar">
                <button class="btn-search" onclick="show_input_bar()" id="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <button>Sign in</button>
            <button>Sign up</button>
        </nav>
    </body>
</html>