<!DOCTYPE html>
<html>
    <head>
        <title>TỔNG HỢP NGHIÊN CỨU KHOA HỌC SINH VIÊN</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"></script>
        <script src="../node_modules/@glidejs/glide/dist/glide.min.js"></script>

        <link rel="stylesheet" href="../dist/main.css">
        <link rel="stylesheet" href="../node_modules/@glidejs/glide/dist/css/glide.core.min.css">
        <link rel="stylesheet" href="../node_modules/@glidejs/glide/dist/css/glide.theme.min.css">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Itim|Lobster|Montserrat:500|Noto+Serif|Nunito|Patrick+Hand|Roboto+Mono:100,100i,300,300i,400,400i,500,500i,700,700i|Roboto+Slab|Saira" rel="stylesheet">
    </head>
    <header>
        <?php
            include dirname(__FILE__).'\header.php';
        ?>
    </header>
    <body>
        <div class="container-fluid">
            <p>Hello World</p>
            <div class="container">
                <ul class="navigation">
                    <div class="navigation-item">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                </ul>
                <div class="content"></div>
                <div class="slider">
                    <button class="next-btn"></button>
                    <button class="prev-btn"></button>
                    <ul class="slider-wrapper" style="--index: 0"></ul>
                </div>
            </div>
            <!-- <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">1</li>
                        <li class="glide__slide">2</li>
                        <li class="glide__slide">3</li>
                        <li class="glide__slide">4</li>
                        <li class="glide__slide">5</li>
                        <li class="glide__slide">6</li>
                        <li class="glide__slide">7</li>
                        <li class="glide__slide">8</li>
                        <li class="glide__slide">9</li>
                        <li class="glide__slide">10</li>
                    </ul>
                </div>
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    <button class="glide__bullet" data-glide-dir="=0"></button>
                    <button class="glide__bullet" data-glide-dir="=1"></button>
                    <button class="glide__bullet" data-glide-dir="=2"></button>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
            </div> -->
        </div>
    </body>
    <footer>
        <?php
            include dirname(__FILE__).'\footer.php';
        ?>
    </footer>
    <script src="./js/index.js"></script>
    <script>
        var glide1 = new Glide('.glide', {
            type: 'carousel',
            perView: 3,
            focusAt: 'center',
            gap: 20,
            autoplay: 2500,
            hoverpause: true,
            animationDuration: 1000,
            peek: {
                before: 200,
                after: 200
            },
        });
        glide1.mount();
    </script>
</html>