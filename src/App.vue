 <template>
  <div id="app">
    <!-- <div class="main-wrapper"> -->
      <!-- HEADER -->
      <header id="pageTop" class="header">

        <!-- TOP INFO BAR -->

        <div class="nav-wrapper navbarWhite">
          <!-- NAVBAR -->
          <nav id="menuBar" class="navbar navbar-default lightHeader animated " role="navigation">
            <div class="container">

              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">
                  <img src="../public/assets/img/brewtrip_logo.png">
                </a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse navbar-ex1-collapse">
                  <ul class="nav navbar-nav navbar-right">
                    <li class=""><a href="/">home </a></li>
                    <li class=""><a href="/saved_breweries">saved breweries </a></li>
                    <li class=""><a href="/friends">friends </a></li>
                    <li class=""><a href="/groups">groups </a></li>
                    <li class=""><a href="/signup">Create Account</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/logout">Logout</a></li>
                  </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <router-view/>
      <!-- FOOTER -->
      <footer class="footerWhite">
        <!-- FOOTER INFO -->
        <div class="clearfix footerInfo">
          <div class="container">
            <div class="row">
              <div class="col-sm-7 col-xs-12">
                <div class="footerText">
                  <a href="index.html" class="footerLogo">
                    <img src="../public/assets/img/brewtrip_logo.png">
                  </a>
                  <p>Find breweries and visit them with your friends.</p>
                  <ul class="list-styled list-contact">
                    <li><i class="fa fa-phone" aria-hidden="true"></i>[88] 657 524 332</li>
                    <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="#">info@listy.com</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3 col-xs-12">
                <div class="footerInfoTitle">
                  <h4>Links</h4>
                </div>
                <div class="useLink">
                  <ul class="list-unstyled">
                    <li><a href="/signup">Create Account</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/logout">Logout</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-2 col-xs-12">
                <div class="footerInfoTitle">
                  <h4>Company</h4>
                </div>
                <div class="useLink">
                  <ul class="list-unstyled">
                    <li><a href="contact-us.html">Contact Us</a></li>
                    <li><a href="terms-of-services.html">Terms and Conditions</a></li>
                    <li><a href="how-it-works.html">How It Works</a></li>
                    <li><a href="payment-process.html">Payment</a></li>
                    <li><a href="pricing-table.html">Pricing</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- COPY RIGHT -->
        <div class="clearfix copyRight">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="copyRightWrapper">
                  <div class="row">
                    <div class="col-sm-5 col-sm-push-7 col-xs-12">
                      <ul class="list-inline socialLink">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                    <div class="col-sm-7 col-sm-pull-5 col-xs-12">
                      <div class="copyRightText">
                        <p>Copyright &copy; 2019. All Rights Reserved by <a href="http://www.iamabdus.com/" target="_blank">Abdus</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    <!-- </div> -->
  </div>
</template>

<style>

</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  methods: {
  }
};

</script>
