<template>
  <div class="home">
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

  <!-- MAP SECTION -->
  <section class="clearfix p0">
    <!-- <div id="map-canvas"></div> -->
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </section>

  <!-- CATEGORY SECTION -->
  <section class="clearfix bg-light">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 ">
          <div class="bg-search-white">
            <form class="form-inline" action="listings-half-screen-map-list.html">
              <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter your keywords">
              </div>
              <div class="form-group">
                <div class="searchSelectbox">
                  <select name="guiest_id3" id="guiest_id3" class="select-drop">
                    <option value="0">All Location</option>
                    <option value="1">U.S.A</option>
                    <option value="2">U.K</option>
                    <option value="3">ASIA</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div class="searchSelectbox">
                  <select name="guiest_id4" id="guiest_id4" class="select-drop">
                    <option value="0">All Categories</option>
                    <option value="1">All Categories 1</option>
                    <option value="2">All Categories 2</option>
                    <option value="3">All Categories 3</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Search </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="page-header text-center">
        <h2>Browse by Categories <small>Explore and connect with great local businesses </small></h2>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="categoryItem">
            <i class="icon-listy icon-car-1"></i>
            <h2>Cars & Vehicles</h2>
            <ul class="list-unstyled">
              <li><a href="listings-half-screen-map-list.html">Bikes & Scooters</a></li>
              <li><a href="listings-half-screen-map-list.html">Commercial Vehicles</a></li>
              <li><a href="listings-half-screen-map-list.html">Bicycles Spare Parts</a></li>
              <li><a href="listings-half-screen-map-list.html">Accessories</a></li>
              <li><a href="listings-half-screen-map-list.html">Other Vehicles</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="categoryItem">
            <i class="icon-listy icon-mobile-phone"></i>
            <h2>Electronics & Gedgets</h2>
            <ul class="list-unstyled">
              <li><a href="listings-half-screen-map-list.html">Mobile Phones</a></li>
              <li><a href="listings-half-screen-map-list.html">Computers & Tablets</a></li>
              <li><a href="listings-half-screen-map-list.html">Computer Accessories</a></li>
              <li><a href="listings-half-screen-map-list.html">Cameras & Camcorders</a></li>
              <li><a href="listings-half-screen-map-list.html">Mobile Phone Accessories</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="categoryItem">
            <i class="icon-listy icon-neighborhood"></i>
            <h2>Real Estate</h2>
            <ul class="list-unstyled">
              <li><a href="listings-half-screen-map-list.html">Apartments & Flats</a></li>
              <li><a href="listings-half-screen-map-list.html">Plots & Land</a></li>
              <li><a href="listings-half-screen-map-list.html">Rooms</a></li>
              <li><a href="listings-half-screen-map-list.html">Accessories</a></li>
              <li><a href="listings-half-screen-map-list.html">Houses</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="categoryItem">
            <i class="icon-listy icon-coat-1"></i>
            <h2>Fshion & Beauty</h2>
            <ul class="list-unstyled">
              <li><a href="listings-half-screen-map-list.html">Clothing</a></li>
              <li><a href="listings-half-screen-map-list.html">Watches</a></li>
              <li><a href="listings-half-screen-map-list.html">Health & Beauty Products</a></li>
              <li><a href="listings-half-screen-map-list.html">Jewellery</a></li>
              <li><a href="listings-half-screen-map-list.html">Bags</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="categoryItem">
            <i class="icon-listy icon-medicine-book"></i>
            <h2>Books & Magazines</h2>
            <ul class="list-unstyled">
              <li><a href="listings-half-screen-map-list.html">Equipment</a></li>
              <li><a href="listings-half-screen-map-list.html">Instruments</a></li>
              <li><a href="listings-half-screen-map-list.html">Children's</a></li>
              <li><a href="listings-half-screen-map-list.html">Games & Consoles</a></li>
              <li><a href="listings-half-screen-map-list.html">Travel, Events</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="categoryItem">
            <i class="icon-listy icon-suitcase"></i>
            <h2>Job Openings</h2>
            <ul class="list-unstyled">
              <li><a href="listings-half-screen-map-list.html">Delivery/ Collections</a></li>
              <li><a href="listings-half-screen-map-list.html">BPO/ Telecaller</a></li>
              <li><a href="listings-half-screen-map-list.html">Data Entry / Back Office</a></li>
              <li><a href="listings-half-screen-map-list.html">Marketing</a></li>
              <li><a href="listings-half-screen-map-list.html">Sales</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="categoryItem">
            <i class="icon-listy icon-music"></i>
            <h2>Music & Arts</h2>
            <ul class="list-unstyled">
              <li><a href="listings-half-screen-map-list.html">Drums</a></li>
              <li><a href="listings-half-screen-map-list.html">Keyboard</a></li>
              <li><a href="listings-half-screen-map-list.html">Flute</a></li>
              <li><a href="listings-half-screen-map-list.html">Guitar</a></li>
              <li><a href="listings-half-screen-map-list.html">Bass Guitar</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="categoryItem">
            <i class="icon-listy icon-house"></i>
            <h2>Home Appliances</h2>
            <ul class="list-unstyled">
              <li><a href="listings-half-screen-map-list.html">Furniture</a></li>
              <li><a href="listings-half-screen-map-list.html">Electricity, AC,</a></li>
              <li><a href="listings-half-screen-map-list.html">Bathroom & Garden</a></li>
              <li><a href="listings-half-screen-map-list.html">Home Appliances</a></li>
              <li><a href="listings-half-screen-map-list.html">Other Home Items</a></li>
            </ul>
          </div>
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
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="thingsBox thinsSpace">
            <div class="thingsImage">
              <img src="assets/img/listing/listing-4.jpg" alt="Image things">
              <div class="thingsMask">
                <ul class="list-inline rating">
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
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

        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="thingsBox thinsSpace">
            <div class="thingsImage">
              <img src="assets/img/listing/listing-5.jpg" alt="Image things">
              <div class="thingsMask">
                <ul class="list-inline rating">
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
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

        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="thingsBox thinsSpace">
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
                <a href="listing-details-right.html"><h2>Tom's Restaurant<i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                <p>964 School Street, New York</p>
              </div>
            </div>
            <div class="thingsCaption ">
              <ul class="list-inline captionItem">
                <li><i class="fa fa-heart-o" aria-hidden="true"></i> 9.5 k</li>
                <li><a href="listings-half-screen-map-list.html">Eat & Drink</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="thingsBox thinsSpace">
            <div class="thingsImage">
              <img src="assets/img/listing/listing-1.jpg" alt="Image things">
              <div class="thingsMask">
                <ul class="list-inline rating">
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                </ul>
                <a href="listing-details-right.html"><h2>The City Theater</h2></a>
                <p>155 1st Avenue, New York</p>
              </div>
            </div>
            <div class="thingsCaption ">
              <ul class="list-inline captionItem">
                <li><i class="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                <li><a href="listings-half-screen-map-list.html">Others</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="thingsBox thinsSpace">
            <div class="thingsImage">
              <img src="assets/img/listing/listing-7.jpg" alt="Image things">
              <div class="thingsMask">
                <ul class="list-inline rating">
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <a href="listing-details-right.html"><h2>Sticky Band <i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                <p>Bishop Avenue, New York</p>
              </div>
            </div>
            <div class="thingsCaption ">
              <ul class="list-inline captionItem">
                <li><i class="fa fa-heart-o" aria-hidden="true"></i> 596</li>
                <li><a href="listings-half-screen-map-list.html">Events</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="thingsBox thinsSpace">
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
                <a href="listing-details-right.html"><h2>Hotel Govendor</h2></a>
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

        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="thingsBox thinsSpace">
            <div class="thingsImage">
              <img src="assets/img/listing/listing-9.jpg" alt="Image things">
              <div class="thingsMask">
                <ul class="list-inline rating">
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <a href="listing-details-right.html"><h2>The Mayfair Hotel <i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                <p>242 W 49th St, New York</p>
              </div>
            </div>
            <div class="thingsCaption ">
              <ul class="list-inline captionItem">
                <li><i class="fa fa-heart-o" aria-hidden="true"></i> 3k</li>
                <li><a href="listings-half-screen-map-list.html">Hotel</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="thingsBox thinsSpace">
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

        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="thingsBox thinsSpace">
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
                <a href="listing-details-right.html"><h2>John F. Kennedy Airport</h2></a>
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

        <div class="col-xs-12">
          <div class="btnArea btnAreaBorder text-center">
            <a href="listings-half-screen-map-list.html" class="btn btn-primary">Explore More</a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- SERVICES SECTION -->
  <section class="clearfix servicesSection">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="servicesItem">
            <ul class="list-inline listServices">
              <li>
                <div class="servicesIcon">
                  <i class="icon-listy icon-key"></i>
                </div>
                <div class="servicesInfo">
                  <h2>Secure Trading</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod</p>
                </div>
              </li>
              <li>
                <div class="servicesIcon">
                  <i class="icon-listy icon-wreath"></i>
                </div>
                <div class="servicesInfo">
                  <h2>24/7 Hours Support</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod</p>
                </div>
              </li>
              <li>
                <div class="servicesIcon">
                  <i class="icon-listy icon-tag3"></i>
                </div>
                <div class="servicesInfo">
                  <h2>Easy Trading</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- APP DOWNLOAD SECTION -->
  <section class="clearfix appDownload">
    <div class="container">
      <div class="page-header text-center">
        <h2>Download on App Store</h2>
      </div>
      <div class="row">
        <div class="col-sm-4 col-xs-12">
          <a href="#" class="btn btn-primary btn-transparent">
            <i class="icon-listy icon-playstore"></i><span>available on <br><strong>Google Play</strong></span>
          </a>
        </div>
        <div class="col-sm-4 col-xs-12">
          <a href="#" class="btn btn-primary btn-transparent">
            <i class="icon-listy icon-apple"></i><span>available on <br><strong>App Store</strong></span>
          </a>
        </div>
        <div class="col-sm-4 col-xs-12">
          <a href="#" class="btn btn-primary btn-transparent">
            <i class="icon-listy icon-microsoft"></i><span>available on <br><strong>Microsoft Store</strong></span>
          </a>
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
  </div>
</template>

<style>
</style>

<script>

// import * as Gmaps from '../public/assets/js/map.js';

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {}
};
</script>