<!doctype html>
<!--[if IE 7 ]>    <html lang="en-gb" class="isie ie7 oldie no-js"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en-gb" class="isie ie8 oldie no-js"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en-gb" class="isie ie9 no-js"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html lang="en-gb" class="no-js">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<!--[if lt IE 9]> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
<title>WebThemez - Single page website</title>
<meta name="description" content="">
<meta name="author" content="WebThemez">
<!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
<!--[if lte IE 8]>
		<script type="text/javascript" src="http://explorercanvas.googlecode.com/svn/trunk/excanvas.js"></script>
	<![endif]-->
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/isotope.css" media="screen" />
<link rel="stylesheet" href="js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
<link href="css/animate.css" rel="stylesheet" media="screen">
<!-- Owl Carousel Assets -->
<link href="js/owl-carousel/owl.carousel.css" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css" />
<!-- Font Awesome -->
<link href="font/css/font-awesome.min.css" rel="stylesheet">
 <style>
    #map {
        height: 600px;
        width: 100%;
    }
    </style>
</head>

<body>
<header class="header">
  <div class="container">
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="navbar-header">
        <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        <a href="#" class="navbar-brand scroll-top logo  animated bounceInLeft"><b><i><img src="images/logo.png" /></i></b></a> </div>
      <!--/.navbar-header-->
      <div id="main-nav" class="collapse navbar-collapse">
        <ul class="nav navbar-nav" id="mainNav">
          <li class="active" id="firstLink"><a href="#home" class="scroll-link">Home</a></li>
          <li><a href="#services" class="scroll-link">Services</a></li>
          <li><a href="#aboutUs" class="scroll-link">About Us</a></li>
          <li><a href="#work" class="scroll-link">Projects</a></li>
          <li><a href="#plans" class="scroll-link">Price</a></li>
          <li><a href="#team" class="scroll-link">Team</a></li>
          <li><a href="#contactUs" class="scroll-link">Contact Us</a></li>
        </ul>
      </div>
      <!--/.navbar-collapse--> 
    </nav>
    <!--/.navbar--> 
  </div>
  <!--/.container--> 
</header>
<!--/.header-->
<div id="#top"></div>
<section id="home">
  <div class="banner-container"> 
  	<div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel" data-slide-to="0" class="active"></li>
    <li data-target="#carousel" data-slide-to="1"></li>
    <li data-target="#carousel" data-slide-to="2"></li>
  </ol>
  <!-- Carousel items -->
  <div class="carousel-inner">
    <div class="active item"><img src="images/banner-bg.jpg" alt="banner" /></div>
    <div class="item"><img src="images/banner-bg2.jpg" alt="banner" /></div>
    <div class="item"><img src="images/banner-bg3.jpg" alt="banner" /></div>
  </div>
  <!-- Carousel nav -->
  <a class="carousel-control left" href="#carousel" data-slide="prev">&lsaquo;</a>
  <a class="carousel-control right" href="#carousel" data-slide="next">&rsaquo;</a>
</div>
	
  </div>  
  
  <div class="container hero-text2">
  <h3>Lorem ipsum dolor sit amet, ea eum labitur scsstie percipitoleat<br/> fabulas complectitur deterruisset at pro</h3>
  </div>
</section>
<section id="services" class="page-section colord">
  <div class="container">
    <div class="row"> 
      <!-- item -->
      <div class="col-md-3 text-center"> <i class="circle"><img src="images/5.png" alt="" /></i>
        <h3>New Projects</h3>
        <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue.</p>
      </div>
      <!-- end: --> 
      
      <!-- item -->
      <div class="col-md-3 text-center"><i class="circle"> <img src="images/1.png" alt="" /></i>
        <h3>Plots for Sale</h3>
        <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue.</p>
      </div>
      <!-- end: --> 
      
      <!-- item -->
      <div class="col-md-3 text-center"><i class="circle"> <img src="images/2.png" alt="" /></i>
        <h3>Luxury Villas</h3>
        <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit impe.</p>
      </div>
      <!-- end: --> 
      
      <!-- item -->
      <div class="col-md-3 text-center"><i class="circle"> <img src="images/3.png" alt="" /></i>
        <h3>Rent a House</h3>
        <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet conempus.</p>
      </div>
      <!-- end:--> 
    </div>
  </div>
  <!--/.container--> 
</section>
<section id="aboutUs">
  <div class="container">
    <?php require('marker-data.php'); ?>

    <h3>Austrailian bars Google Map

    </h3>
    <div id="map"></div>
   
   <script type="text/javascript">

<?php require ('initMap.js'); ?>
  </script>

    </div>
    <div class="row dataTxt">	
					
					
					
						
					</div>
  </div>
</section> 
<section id="work" class="page-section page">
 
</section>
<section id="plans" class="page-section">
  <div class="container">
    <div class="heading text-center"> 
      <!-- Heading -->
      <h2>Price</h2>
      <p>At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
    </div>
    <div class="row flat">
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <ul class="plan plan1">
          <li class="plan-name">Basic </li>
          <li class="plan-price"> <strong>$29</strong> / month </li>
          <li> <strong>5GB</strong> Storage </li>
          <li> <strong>1GB</strong> RAM </li>
          <li> <strong>400GB</strong> Bandwidth </li>
          <li> <strong>10</strong> Email Address </li>
          <li> <strong>Forum</strong> Support </li>
          <li class="plan-action"> <a href="#" class="btn btn-danger btn-lg">Signup</a> </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <ul class="plan plan2 featured">
          <li class="plan-name">Standard </li>
          <li class="plan-price"> <strong>$39</strong> / month </li>
          <li> <strong>5GB</strong> Storage </li>
          <li> <strong>1GB</strong> RAM </li>
          <li> <strong>400GB</strong> Bandwidth </li>
          <li> <strong>10</strong> Email Address </li>
          <li> <strong>Forum</strong> Support </li>
          <li class="plan-action"> <a href="#" class="btn btn-danger btn-lg">Signup</a> </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <ul class="plan plan3">
          <li class="plan-name">Advanced </li>
          <li class="plan-price"> <strong>$199</strong> / month </li>
          <li> <strong>50GB</strong> Storage </li>
          <li> <strong>8GB</strong> RAM </li>
          <li> <strong>1024GB</strong> Bandwidth </li>
          <li> <strong>Unlimited</strong> Email Address </li>
          <li> <strong>Forum</strong> Support </li>
          <li class="plan-action"> <a href="#" class="btn btn-danger btn-lg">Signup</a> </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <ul class="plan plan4">
          <li class="plan-name">Mighty </li>
          <li class="plan-price"> <strong>$999</strong> / month </li>
          <li> <strong>50GB</strong> Storage </li>
          <li> <strong>8GB</strong> RAM </li>
          <li> <strong>1024GB</strong> Bandwidth </li>
          <li> <strong>Unlimited</strong> Email Address </li>
          <li> <strong>Forum</strong> Support </li>
          <li class="plan-action"> <a href="#" class="btn btn-danger btn-lg">Signup</a> </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section id="team" class="page-section">
  <div class="container">
    <div class="heading text-center"> 
      <!-- Heading -->
      <h2>Team</h2>
      <p>At variations of passages of Lorem Ipsum available, but the majority have suffered alteration..</p>
    </div>
    <!-- Team Member's Details -->
    <div class="team-content">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12"> 
          <!-- Team Member -->
          <div class="team-member pDark"> 
            <!-- Image Hover Block -->
            <div class="member-img"> 
              <!-- Image  --> 
              <img class="img-responsive" src="images/photo-1.jpg" alt=""> </div>
            <!-- Member Details -->
            <div class="team-title">
			<h4>John Doe</h4>
            <!-- Designation --> 
            <span class="pos">CEO</span>
			</div>
            <div class="team-socials"> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-dribbble"></i></a> <a href="#"><i class="fa fa-github"></i></a> </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12"> 
          <!-- Team Member -->
          <div class="team-member pDark"> 
            <!-- Image Hover Block -->
            <div class="member-img"> 
              <!-- Image  --> 
              <img class="img-responsive" src="images/photo-2.jpg" alt=""> </div>
            <!-- Member Details -->
            <h4>Larry Doe</h4>
            <!-- Designation --> 
            <span class="pos">Art Director</span>
            <div class="team-socials"> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-dribbble"></i></a> <a href="#"><i class="fa fa-github"></i></a> </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12"> 
          <!-- Team Member -->
          <div class="team-member pDark"> 
            <!-- Image Hover Block -->
            <div class="member-img"> 
              <!-- Image  --> 
              <img class="img-responsive" src="images/photo-3.jpg" alt=""> </div>
            <!-- Member Details -->
            <h4>Ranith Kays</h4>
            <!-- Designation --> 
            <span class="pos">Manager</span>
            <div class="team-socials"> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-dribbble"></i></a> <a href="#"><i class="fa fa-github"></i></a> </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12"> 
          <!-- Team Member -->
          <div class="team-member pDark"> 
            <!-- Image Hover Block -->
            <div class="member-img"> 
              <!-- Image  --> 
              <img class="img-responsive" src="images/photo-4.jpg" alt=""> </div>
            <!-- Member Details -->
            <h4>Joan Ray</h4>
            <!-- Designation --> 
            <span class="pos">Creative</span>
            <div class="team-socials"> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-dribbble"></i></a> <a href="#"><i class="fa fa-github"></i></a> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/.container--> 
</section>
<section id="contactUs" class="contact-parlex">
  <div class="parlex-back">
    <div class="container">
      <div class="row">
        <div class="heading text-center"> 
          <!-- Heading -->
          <h2>Contact Us</h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>
      </div>
      <div class="row mrgn30">
        <form method="post" action="" id="contactfrm" role="form">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" name="name" id="name" placeholder="Enter name" title="Please enter your name (at least 2 characters)">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="email" id="email" placeholder="Enter email" title="Please enter a valid email address">
            </div>
            <div class="form-group">
              <label for="comments">Comments</label>
              <textarea name="comment" class="form-control" id="comments" cols="3" rows="5" placeholder="Enter your message…" title="Please enter your message (at least 10 characters)"></textarea>
              <button name="submit" type="submit" class="btn btn-lg btn-primary" id="submit">Submit</button>
            </div>
            <div class="result"></div>
          </div>
        </form>
      </div>
    </div>
    <!--/.container--> 
  </div>
</section>
<footer>
<div class="container">
        <div class="row">
            <div class="col-md-3">
            	<div class="col">
                   <h4>Contact us</h4>
                   <ul>
                        <li>1th Avenue, New York - United States</li>
                        <li>Phone: +22 342 2345 345 | Fax: +22 724 2342 343 </li>
                        <li>Email: <a href="mailto:info@example.com" title="Email Us">info@example.com</a></li>
                        <li>Skype: <a href="skype:my.test?call" title="Skype us">my-company</a></li>
                    </ul>
                 </div>
            </div>
            
            <div class="col-md-3">
            	<div class="col">
                    <h4>Mailing list</h4>
                    <p>Lorem ipsum dolor sit amet, ea eum labitur scsstie percipitoleat.</p>
                    <form class="form-inline">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Your email address...">
                            <span class="input-group-btn">
                                <button class="btn" type="button">Go!</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            
            <div class="col-md-3">
            	<div class="col col-social-icons">
                    <h4>Follow us</h4>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-youtube-play"></i></a>
                    <a href="#"><i class="fa fa-flickr"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-skype"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                </div>
            </div>

             <div class="col-md-3">
             	<div class="col">
                    <h4>Latest News</h4>
                    <p>
                    Lorem ipsum dolor labitur scsstie per sit amet, ea eum labitur scsstie percipitoleat.
                    <br><br>
                    <a href="#" class="btn">Get Mores!</a>
                    </p>
                </div>
            </div>
        </div>
         
    </div>
    
</footer>
<!--/.page-section-->
<section class="copyright">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center"> Copyright 2014 | All Rights Reserved -- Template by -  <a href="http://webThemez.com"> WebThemez.com</a> </div>
    </div>
    <!-- / .row --> 
  </div>
</section>
<a href="#top" class="topHome"><i class="fa fa-chevron-up fa-2x"></i></a> 

<!--[if lte IE 8]><script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script><![endif]--> 
<script src="js/modernizr-latest.js"></script> 
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script> 
<script src="js/bootstrap.min.js" type="text/javascript"></script> 
<script src="js/jquery.isotope.min.js" type="text/javascript"></script> 
<script src="js/fancybox/jquery.fancybox.pack.js" type="text/javascript"></script> 
<script src="js/jquery.nav.js" type="text/javascript"></script> 
<script src="js/jquery.fittext.js"></script> 
<script src="js/waypoints.js"></script> 
<script src="js/custom.js" type="text/javascript"></script> 
<script src="js/owl-carousel/owl.carousel.js"></script>
 <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD34NDc2PvrDfDA2TbZAUizRJGR1g9jWOs&callback=initMap">
    </script>
</body>
</html>