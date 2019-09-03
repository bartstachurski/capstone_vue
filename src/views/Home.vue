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
        <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
<!--           <img v-bind:src="`${infoContentFoursquareVenue.best_photo.prefix}200x150${infoContentFoursquareVenue.best_photo.suffix}`"> -->
          <!-- <p>{{infoContentFoursquareVenue.best_photo.prefix}} 200x150 {{infoContentFoursquareVenue.best_photo.suffix}} </p> -->
          <img v-bind:src="`${infoContentFoursquareVenue.best_photo.prefix}200x150${infoContentFoursquareVenue.best_photo.suffix}`">
          <p>{{infoContent.venue_name}}</p>
          <p>{{infoContent.venue_city}}, {{infoContent.venue_state}}</p>
          <p>Rating: {{infoContentFoursquareVenue.rating}} / 10 ({{infoContentFoursquareVenue.rating_signals}} Ratings) </p>
        </gmap-info-window>
        <GmapMarker
          :key="m.position.untappd_venue_id"
          v-for="m in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="toggleInfoWindow(m)"
        />

    </GmapMap>

    </div>
  </section>




  <!-- BREWERY RESULTS SECTION -->
  <section class="clearfix thingsArea">
    <div class="container">
        <div class="col-xs-12">
          <div class="bg-search-white">
              <div class="form-group">
                <GmapAutocomplete @place_changed="setPlace">
                </GmapAutocomplete>
                <button v-on:click="usePlace" type="submit" class="btn btn-primary">Search </button>
              </div>
          </div>
        </div>
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
      breweries: [],
      infoContent: {},
      infoContentUntappdVenue: {},
      infoContentUntappdBrewery: {},
      infoContentFoursquareVenue: {
        best_photo: {
          prefix: "test",
          suffic: "test"
        }
      },
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
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
    toggleInfoWindow: function(marker) {
      axios.get(`/api/foursquare_venues/${marker.infoText.untappd_venue_id}`).then(response => {
        console.log("this is the resposne from foursuare venue show from toggleinfoWindow");
        this.infoContentFoursquareVenue = response.data;
        console.log(response.data);
      });
      console.log(marker);
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;
      console.log("this is this.infoContent");
      console.log(this.infoContent);
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx === marker.position.untappd_venue_id) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = marker.position.untappd_venue_id;
      }
    },
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
        this.place = null;
      }
    }
  },
};
</script>