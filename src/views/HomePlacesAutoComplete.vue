<template>
  <div class="home">
  <!-- <div class="page-loader" style="background: url(img/preloader.gif) center no-repeat #fff;"></div> -->
  <!-- Preloader -->
  <div id="preloader" class="smooth-loader-wrapper">
    <div class="smooth-loader">
      <div class="loader1">
      <div class="loader-target">
        <div class="loader-target-main"></div>
        <div class="loader-target-inner"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="main-wrapper">




<!-- BANNER SECTION -->
<section class="clearfix homeBanner" style="background-image: url(assets/img/banner/banner1.jpg);">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="banerInfo">
          <h1>Explore. Discover. Share</h1>
          <p>Listty helps to find out great things arround you</p>
          <form class="form-inline">
            <div class="form-group">
              <div class="input-group">
                <input ref="autocomplete" placeholder="Seach for a location" class="form-control" onfocus="value = ''" type="text">
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Search <i class="fa fa-search" aria-hidden="true"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- INTEREST SECTION -->
<section class="clearfix interestArea">
  <div class="container">
    <div class="page-header text-center">
      <h2>What are You Interested in? <small>Explore and connect with great local businesses</small></h2>
    </div>
    <div class="row">
      <div class="col-sm-3 col-xs-12">
        <a href="listings-half-screen-map-list.html" class="interestContent">
          <span>
            <i class="icon-listy icon-tea-cup-1"></i>
            Restaurant
          </span>
        </a>
      </div>
      <div class="col-sm-3 col-xs-12">
        <a href="listings-half-screen-map-list.html" class="interestContent">
          <span>
            <i class="icon-listy icon-building"></i>
            Hotels
          </span>
        </a>
      </div>
      <div class="col-sm-3 col-xs-12">
        <a href="listings-half-screen-map-list.html" class="interestContent">
          <span>
            <i class="icon-listy icon-martini"></i>
            Nightclubs
          </span>
        </a>
      </div>
      <div class="col-sm-3 col-xs-12">
        <a href="listings-half-screen-map-list.html" class="interestContent">
          <span>
            <i class="icon-listy icon-car-1"></i>
            Auto Motive
          </span>
        </a>
      </div>
      <div class="col-sm-3 col-xs-12">
        <a href="listings-half-screen-map-list.html" class="interestContent">
          <span>
            <i class="icon-listy icon-castle"></i>
            Museums
          </span>
        </a>
      </div>
      <div class="col-sm-3 col-xs-12">
        <a href="listings-half-screen-map-list.html" class="interestContent">
          <span>
            <i class="icon-listy icon-television"></i>
            Movie Theaters
          </span>
        </a>
      </div>
      <div class="col-sm-3 col-xs-12">
        <a href="listings-half-screen-map-list.html" class="interestContent">
          <span>
            <i class="icon-listy icon-mall-1"></i>
            Shopping
          </span>
        </a>
      </div>
      <div class="col-sm-3 col-xs-12">
        <a href="all-business.html" class="interestContent">
          <span>
            <i class="icon-listy icon-more"></i>
            View All
          </span>
        </a>
      </div>
    </div>
  </div>
</section>


<!-- THINGS SECTION -->
<section class="clearfix thingsArea">
  <div class="container">
    <div class="page-header text-center">
      <h2>Popular Things Near You <small>This are some of most popular listing</small></h2>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div id="thubmnailSlider" class="carousel slide thumbnailCarousel">

          <ol class="carousel-indicators">
            <li data-target="#thubmnailSlider" data-slide-to="0" class="active"></li>
            <li data-target="#thubmnailSlider" data-slide-to="1"></li>
            <li data-target="#thubmnailSlider" data-slide-to="2"></li>
            <li data-target="#thubmnailSlider" data-slide-to="3"></li>
            <li data-target="#thubmnailSlider" data-slide-to="4"></li>
            <li data-target="#thubmnailSlider" data-slide-to="5"></li>
            <li data-target="#thubmnailSlider" data-slide-to="6"></li>
            <li data-target="#thubmnailSlider" data-slide-to="7"></li>
          </ol>

          <!-- Carousel items -->
          <div class="carousel-inner">
            <div class="item row active">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox">
                  <div class="thingsImage">
                    <img src="assets/img/listing/listing-4.jpg" alt="Image things">
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-right.html"><h2>Think Coffee <i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                      <p>215 Terry Lane, New York</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 8 k</li>
                      <li><a href="listings-half-screen-map-list.html">Eat & Drink</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox">
                  <div class="thingsImage">
                    <img src="assets/img/listing/listing-5.jpg" alt="Image things">
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-right.html"><h2>Burger House</h2></a>
                      <p>2726 Shinn Street, New York</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 9.2 k</li>
                      <li><a href="listings-half-screen-map-list.html">Eat & Drink</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox">
                  <div class="thingsImage">
                    <img src="assets/img/listing/listing-8.jpg" alt="Image things">
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-right.html"><h2>Hotel Govendor <i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                      <p>778 Country Street, New York</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 5k</li>
                      <li><a href="listings-half-screen-map-list.html">Hotels</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox">
                  <div class="thingsImage">
                    <img src="assets/img/listing/listing-10.jpg" alt="Image things">
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-right.html"><h2>Water Grill</h2></a>
                      <p>31 Union Square, New York</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                      <li><a href="listings-half-screen-map-list.html"> Eat & Drink</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox ">
                  <div class="thingsImage">
                    <img src="assets/img/listing/listing-11.jpg" alt="Image things">
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-right.html"><h2>John F. Kennedy Airport <i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                      <p>Queens, NY 11430, new York</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 15 k</li>
                      <li><a href="listings-half-screen-map-list.html">Others</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="left carousel-control" href="#thubmnailSlider" data-slide="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
          <a class="right carousel-control" href="#thubmnailSlider" data-slide="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- COUNT UP SECTION -->
<section class="clearfix countUpSection">
  <div class="container">
    <div class="page-header text-center">
      <h2>Why Listty?</h2>
    </div>
    <div class="row">
      <div class="col-sm-3 col-xs-12">
        <div class="text-center countItem">
          <div class="counter">140</div>
          <div class="counterInfo bg-color-1">Cities</div>
        </div>
      </div>
      <div class="col-sm-3 col-xs-12">
        <div class="text-center countItem">
          <div class="counter">120</div>
          <div class="counterInfo bg-color-2">Restaurants</div>
        </div>
      </div>
      <div class="col-sm-3 col-xs-12">
        <div class="text-center countItem">
          <div class="counter">180</div>
          <div class="counterInfo bg-color-3">Hotels</div>
        </div>
      </div>
      <div class="col-sm-3 col-xs-12">
        <div class="text-center countItem">
          <div class="counter">220</div>
          <div class="counterInfo bg-color-4">Retail Services</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="btnArea text-center">
          <a href="#" class="btn btn-primary">Get it now</a>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- WORKS SECTION -->
<section class="clearfix worksArea">
  <div class="container">
    <div class="page-header text-center">
      <h2>How it Works? <small>This are some of most popular listing</small></h2>
    </div>
    <div class="row">
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail text-center worksContent">
          <img src="assets/img/works/works-1.png" alt="Image works">
          <div class="caption">
            <a href="how-it-works.html"><h3>Find what you want</h3></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail text-center worksContent">
          <img src="assets/img/works/works-2.png" alt="Image works">
          <div class="caption">
            <a href="how-it-works.html"><h3>Review & Plan your day</h3></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail text-center worksContent">
          <img src="assets/img/works/works-3.png" alt="Image works">
          <div class="caption">
            <a href="how-it-works.html"><h3>Explore Location</h3></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="btnArea text-center"><a href="#" class="btn btn-primary">Watch it now <i class="fa fa-play-circle" aria-hidden="true"></i></a></div>
      </div>
    </div>
  </div>
</section>

<!-- ARTICLES SECTION-->
<section class="clearfix articlesArea">
  <div class="container">
    <div class="page-header text-center">
      <h2>Articles <small>Brouse latest tips from our blog </small></h2>
    </div>
    <div class="row">
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail articleContent">
          <a href="blog-details.html"><img src="assets/img/articles/article-1.jpg" alt="Image articles" class="img-responsive"></a>
          <div class="caption">
            <h4>Jan 22, 2018 by <a href="#">Jno Deo</a></h4>
            <h3><a href="blog-details.html">Lorem ipsum dolor sit amet</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail articleContent">
          <a href="blog-details.html"><img src="assets/img/articles/article-2.jpg" alt="Image articles" class="img-responsive"></a>
          <div class="caption">
            <h4>jan 20, 2018 by <a href="#">Adam Smith</a></h4>
            <h3><a href="blog-details.html">Ut enim ad minim veniam.</a></h3>
            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail articleContent">
          <a href="blog-details.html"><img src="assets/img/articles/article-3.jpg" alt="Image articles" class="img-responsive"></a>
          <div class="caption">
            <h4>Jan 10, 2018 by <a href="#">Kathy Brown</a></h4>
            <h3><a href="blog-details.html">velit esse cillum dolore eu fugiat</a></h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- CALL TO ACTION SECTION -->
<section class="clearfix callAction">
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-sm-9 col-xs-12">
        <div class="callInfo">
          <h4><span>Listty</span> is the <span>best way</span> <br>to find great local business</h4>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-12">
        <div class="btnArea">
          <a href="sign-up.html" class="btn btn-primary btn-block">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</section>


  </div>

  <!-- LOGIN  MODAL -->
  <div id="loginModal" tabindex="-1" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Log In to your Account</h4>
        </div>
        <div class="modal-body">
          <form class="loginForm">
            <div class="form-group">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input type="password" class="form-control" id="pwd" placeholder="Password">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">Log In</button>
            </div>
            <div class="checkbox">
              <label><input type="checkbox"> Remember me</label>
              <a href="#" class="pull-right link">Fogot Password?</a>
            </div>

          </form>
        </div>
        <div class="modal-footer">
          <p>Don’t have an Account? <a href="#" class="link">Sign up</a></p>
        </div>
      </div>
    </div>
  </div>
<!--     <div id="app">
      <input ref="autocomplete" 
      placeholder="Seach for a location" 
      class="search-location"
      onfocus="value = ''" 
      type="text">
    </div>
    <div v-for="brewery in filterBy(breweries, this.category_filter, 'categories')">
      <h2>{{ brewery.venue_name }}</h2>
      <router-link v-bind:to="`/breweries/${brewery.venue_id}`">See More Info</router-link>
    </div> -->
  </div>
</template>

<style>

</style>

<script>
import axios from "axios";
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Search for a Brewery",
      lat: "",
      lon: "",
      city: "",
      category_filter: "brewery",
      breweries: []
    };
  },
  created: function() {},
  methods: {},
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete((this.$refs.autocomplete),{types: ['geocode']}
    );
    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace();
      let ac = place.address_components;
      console.log("these are the places address components:");
      console.log(ac);
      let lat = place.geometry.location.lat();
      let lon = place.geometry.location.lng();
      let city = ac[0]["short_name"];
      this.lat = lat;
      this.lon = lon;
      this.city = city;
      console.log(this.lat);
      console.log(this.lon);
      console.log(this.city);
      // axios.get("/api/brewery_db_searches", {
      //   params: {
      //     lat: this.lat,
      //     lng: this.lon,
      //   }
      // }).then(response => {
      //   console.log(response.data);
      //   this.breweries = response.data;
      //   console.log("this is the brewries variable");
      //   console.log(this.breweries);
      axios.get("/api/untappd_venues", {
        params: {
          city: this.city
        }
      }).then(response => {
        console.log(response.data);
        this.breweries = response.data;
        console.log("this is the breweries variable");
        console.log(this.breweries);
      });
    });
  }
};
</script>