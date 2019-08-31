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
    <div id="map-canvas">
      <GmapMap
        :center="this.center"
        :zoom="13"
        map-type-id="terrain"
        style="width: 100%; height: 500px"
      >
        <GmapMarker
          :key="m.untappd_venue_id"
          v-for="m in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap>
    </div>
  </section>

  <!-- SEARCH SECTION -->
  <section class="clearfix bg-light">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 ">
          <div class="bg-search-white">
              <div class="form-group">
                <GmapAutocomplete @place_changed="setPlace">
                </GmapAutocomplete>
                <button v-on:click="usePlace" type="submit" class="btn btn-primary">Search </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- BREWERY RESULTS SECTION -->
  <section class="clearfix thingsArea">
    <div class="container">
      <div class="page-header text-center">
        <h2>Breweries Near {{ this.city }}</h2>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12" v-for="brewery in breweries">
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
                <router-link v-bind:to="`/breweries/${brewery.untappd_venue_id}`"><h2>{{ brewery.venue_name }}<i class="fa fa-check-circle" aria-hidden="true"></i></h2></router-link>
                <p>{{ brewery.venue_address }}, {{ brewery.venue_state }}</p>
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

import axios from "axios";
import Vue2Filters from 'vue2-filters';
import * as VueGoogleMaps from 'vue2-google-maps';

// import * as Gmaps from '../public/assets/js/map.js';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Search for a Brewery", 
      components: {
        VueGoogleMaps
      },
      center: {
        lat: 39.983455,
        lng: -75.163378,
      },
      city: "",
      markers: [],
      place: "",
      // category_filter: "brewery",
      breweries: []
    };
  },
  watch: {
    breweries: {
      deep: true,
      handler() {
        console.log('hello from the breweries watch');
        var markerPositions = [];
        this.breweries.forEach(function(brewery) {
          console.log("this is brewery.position");
          console.log(brewery.position);
          markerPositions.push(brewery.position);
        });
        this.markers = this.markers.concat(markerPositions);
        console.log("this is this.markers");
        console.log(this.markers);
      }
    }
  },
  created: function() {},
  methods: {
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place;
      console.log(this.place);
      console.log("this is the city");
      this.city = this.place.name;
      this.center.lat = this.place.geometry.location.lat(),
      this.center.lng = this.place.geometry.location.lng(),
      console.log(this.center.lat);
      console.log(this.center.lng);
      console.log(this.place.name);
      axios.get("/api/foursquare_venues", {
        params: {
          ll: this.center.lat + "," + this.center.lng
        }
      }).then(response => {
        console.log(response.data);
        this.breweries = response.data;
        // var breweryPositions = [];
        // this.breweries.forEach(function(brewery) {
        //   console.log("brewery position from the marker setting loop");
        //   console.log(brewery.position);
        //   this.markers.push(brewery.position);
        //   // breweryPositions.push(brewery.position);
        // });
        // console.log(breweryPositions);
        // this.markers = this.markers.concat(breweryPositions);
        // this.$forceUpdate();
        console.log("this is the breweries variable");
        console.log(this.breweries);
      });
    },
    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        });
        // var mappedPositions = this.markers;
        // this.breweries.forEach(function(brewery) {
        //   // this.mappedPositions.push(brewery.position);
        //   console.log(brewery.position);
        // });
        // this.markers = this.markers.concat(mappedPositions);
        // console.log("this is this.markers from the usePLace method");
        // console.log(this.markers);
        this.place = null;
        // this.$forceUpdate();
      }
    }
  },
  // mounted() {
  //   this.autocomplete = new google.maps.places.Autocomplete((this.$refs.autocomplete),{types: ['geocode']}
  //   );
  //   this.autocomplete.addListener('place_changed', () => {
  //     let place = this.autocomplete.getPlace();
  //     let ac = place.address_components;
  //     console.log("these are the places address components:");
  //     console.log(ac);
  //     let lat = place.geometry.location.lat();
  //     let lon = place.geometry.location.lng();
  //     let city = ac[0]["short_name"];
  //     this.lat = lat;
  //     this.lon = lon;
  //     this.city = city;
  //     console.log(this.lat);
  //     console.log(this.lon);
  //     console.log(this.city);
  //     // axios.get("/api/brewery_db_searches", {
  //     //   params: {
  //     //     lat: this.lat,
  //     //     lng: this.lon,
  //     //   }
  //     // }).then(response => {
  //     //   console.log(response.data);
  //     //   this.breweries = response.data;
  //     //   console.log("this is the brewries variable");
  //     //   console.log(this.breweries);
  //     axios.get("/api/untappd_venues", {
  //       params: {
  //         city: this.city
  //       }
  //     }).then(response => {
  //       console.log(response.data);
  //       this.breweries = response.data;
  //       console.log("this is the breweries variable");
  //       console.log(this.breweries);
  //     });
  //   });
  // }
};
</script>