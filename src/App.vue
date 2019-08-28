 <template>
  <div id="app">
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
                  <li class=" dropdown megaDropMenu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Listing <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                    <ul class="row dropdown-menu">
                      <li class="col-sm-4 col-xs-12">
                        <ul class="list-unstyled">
                          <li class="list-item-heading">Grid Layout</li>
                          <li><a href="listing-grid-right-sidebar.html">Right Sidebar</a></li>
                          <li><a href="listing-grid-left-sidebar.html">Left Sidebar</a></li>
                          <li><a href="listing-grid-fullwidth.html">Fullwidth</a></li>
                        </ul>
                        <ul class="list-unstyled">
                          <li class="list-item-heading">List Layout</li>
                          <li><a href="listing-list-right-sidebar.html">Right Sidebar</a></li>
                          <li><a href="listing-list-left-sidebar.html">left Sidebar</a></li>
                          <li><a href="listing-list-fullwidth.html">Fullwidth</a></li>
                        </ul>
                      </li>
                      <li class="col-sm-4 col-xs-12">
                        <ul class="list-unstyled">
                          <li class="list-item-heading">Half Screen Map</li>
                          <li><a href="listings-half-screen-map-list.html">List Layout</a></li>
                          <li><a href="listings-half-screen-map-grid.html">Grid Layout</a></li>
                        </ul>
                        <ul class="list-unstyled">
                          <li class="list-item-heading">Single listing</li>
                          <li><a href="listing-details-right.html">Right Sidebar</a></li>
                          <li><a href="listing-details-left.html">left Sidebar</a></li>
                          <li><a href="listing-details-full.html">Fullwidth</a></li>
                        </ul>
                      </li>
                      <li class="col-sm-4 col-xs-12">
                        <ul class="list-unstyled">
                          <li class="mega-img">
                            <a href=""><img src="assets/img/works/works-big-3.png" alt="Image"></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class=" dropdown singleDrop">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">pages <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                    <ul class="dropdown-menu">
                      <li><a href="contact-us.html">Contact Us</a></li>
                      <li><a href="terms-of-services.html">Terms and Conditions</a></li>
                      <li><a href="/signup">Create Account</a></li>
                      <li><a href="/login">Login</a></li>
                      <li><a href="pricing-table.html">Pricing</a></li>
                      <li><a href="payment-process.html">Payment</a></li>
                      <li><a href="how-it-works.html">How It Works</a></li>
                      <li><a href="user-profile.html">User Profile</a></li>
                      <li><a href="comming-soon.html">Coming Soon</a></li>
                      <li><a href="404-page.html">404 Page</a></li>
                    </ul>
                  </li>
                  <li class=" dropdown singleDrop">
                    <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">admin <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                    <ul class="dropdown-menu">
                      <li><a href="dashboard.html">Dashboard</a></li>
                      <li><a href="add-listings.html">Add Listing</a></li>
                      <li><a href="edit-listings.html">Edit Listing</a></li>
                      <li><a href="booking-list.html">Booking List</a></li>
                      <li><a href="dashboard-reviews.html">Reviews</a></li>
                      <li><a href="profile.html">My Profile</a></li>
                      <li><a href="oders.html">My Orders</a></li>
                      <li><a href="/signup">Create Account</a></li>
                      <li><a href="/login">Login</a></li>
                      <li><a href="/logout">Log Out</a></li>
                    </ul>
                  </li>
                </ul>
            </div>
            <a class="btn btn-default navbar-btn" href="add-listings.html"> + <span>Add Listing</span></a>
          </div>
        </nav>
      </div>
    </header>

<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/saved_breweries">Saved Breweries</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div> -->
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
                  <li><a href="dashboard.html">Dashboard</a></li>
                  <li><a href="/signup">Create Account</a></li>
                  <li><a href="/login">Login</a></li>
                  <li><a href="add-listings.html">Add Listing</a></li>
                  <li><a href="edit-listings.html">Edit Listing</a></li>
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
