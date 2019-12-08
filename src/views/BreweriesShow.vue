<template>
  <div class="container">
    <!-- LISTINGS DETAILS TITLE SECTION -->
    <section class="clearfix paddingAdjustBottom" id="listing-details">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="listingTitleArea">
              <h2>{{ this.venue.venue_name }}</h2>
              <h3>By {{ this.brewery.brewery_name }}</h3>
              <p v-if="foursquare_venue_loaded">{{ this.venue.venue_address }}  <br>{{ this.venue.venue_city }}, {{ this.venue.venue_state}} {{this.foursquare_venue.location.postalCode}}, {{ this.venue.venue_country }}</p>
              <div class="listingReview">
                <span>
                  Foursquare Venue Rating: {{ this.foursquare_venue.rating }} / 10 ( {{ this.foursquare_venue.rating_signals }} Reviews)</span>
                  <span> Untappd Brewery Rating: {{ this.brewery.rating_score }} / 5 ({{ this.brewery.rating_count }} Reviews)
                  </span>
                 
<!--                   <vue-numeric read-only separator="," v-model="brewery.rating_count"></vue-numeric>  -->
                <button v-on:click="saveBrewery()" class="btn btn-primary">Save Brewery</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LISTINGS DETAILS IMAGE SECTION -->
    <section class="clearfix paddingAdjustTopBottom">
      <ul v-if="foursquare_venue_loaded" class="list-inline listingImage">
        <li v-for="image in foursquare_venue.photos.groups[0].items"><img v-bind:src="`${image.prefix}200x150${image.suffix}`" alt="Image Listing" class="img-responsive"></li>
        <!-- figure out a way to make the images all the same size if you feel like it... -->
        <!-- <li v-for="image in brewery.brewery.media.items"><img v-bind:src="`${image.photo.photo_img_lg}`" width="200" height="150" alt="Image Listing" class="img-responsive"></li> -->
      </ul>
    </section>

    <!-- LISTINGS DETAILS INFO SECTION -->
    <section class="clearfix paddingAdjustTop">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-xs-12">
            <div class="listDetailsInfo">
              <div class="detailsInfoBox">
                <h3>About This Brewery</h3>
                <p>{{ this.brewery.brewery_description }}</p>
              </div>
              <div class="detailsInfoBox">
                <h3>Features</h3>
                <ul v-if="foursquare_venue_loaded" class="list-inline featuresItems">
                  <li v-for="attribute in foursquare_venue.attributes.groups"><i class="fa fa-check-circle-o" aria-hidden="true"></i> {{ attribute.name }}: 
                    <div style="display:inline" v-for="item in attribute.items"> {{ item.displayValue }} 
                    </div>
                  </li>
                </ul>
              </div>
              <div class="detailsInfoBox">
                <h3 v-if="foursquare_venue_loaded">Tips ({{ this.foursquare_venue.tips.length }})</h3>
                <!-- need to edit this to show the tips data from foursquare if you want -->
                <div class="media media-comment" v-for="tip in this.foursquare_venue.tips">
                  <div class="media-left">
                  <img v-bind:src="`${tip.user.photo.prefix}100x100${tip.user.photo.suffix}`" class="media-object img-circle" alt="Image User">
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">{{ tip.user.firstName}} {{ tip.user.lastName }}</h4>
                    <p>{{ tip.text }}</p>
                  </div>
                </div>
              </div>
              <div class="detailsInfoBox">
                <h3>Most Popular Beers </h3>
                <!-- need to edit this to show the tips data from foursquare if you want -->
                <div class="media media-comment" v-for="beer in this.brewery.beer_list">
                  <div class="media-body">
                    <h4 class="media-heading">{{ beer.beer.beer_name}} </h4>
                    <p>Untappd Rating: {{ beer.beer.rating_score }} ({{ beer.beer.rating_count }} Ratings)</p>
                    <p>Style: {{ beer.beer.beer_style }}</p>
                    <p>ABV: {{ beer.beer.beer_abv }} %</p>
                    <p>Description: {{ beer.beer.beer_description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="foursquare_venue_loaded" class="col-sm-4 col-xs-12">
            <div class="clearfix map-sidebar map-right">
              <div id="map" style="position:relative; margin: 0;padding: 0;height: 538px; max-width: none;"></div>
            </div>
            <div class="listSidebar">
              <h3>Location</h3>
              <div class="contactInfo">
                <ul class="list-unstyled list-address">
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    {{ this.foursquare_venue.location.address }} {{ this.foursquare_venue.location.crossStreet }} <br> {{ this.foursquare_venue.location.city }}, {{ this.foursquare_venue.location.state }} <br> {{ this.foursquare_venue.location.country }}
                  </li>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    {{ this.foursquare_venue.contact.formattedPhone }}
                  </li>
                  <li>
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    <a v-bind:href="`${this.foursquare_venue.url}`">{{ this.foursquare_venue.url }}</a>
                    <a v-bind:href="`https://twitter.com/${this.foursquare_venue.contact.twitter}`">https://twitter.com/{{ this.foursquare_venue.contact.twitter}}</a>
                    <a v-bind:href="`https://www.instagram.com/${this.foursquare_venue.contact.instagram}`">https://www.instagram.com/{{ this.foursquare_venue.contact.instagram}}</a>
                    <a v-bind:href="`${this.brewery.facebook}`"> {{ this.brewery.facebook }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="listSidebar">
              <h3>Opening Hours</h3>
              <ul class="list-unstyled sidebarList" v-for="timeframe in foursquare_venue.hours.timeframes">
                <li>
                  <span class="pull-left">{{ timeframe.days }}</span>
                  <span class="pull-right">{{ timeframe.open[0].renderedTime}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  <!-- <div class="container"> -->
    <div class="row">
      <div class="col-xs-12 col-lg-6">
        <div class="dashboard-list-box">
          <div class="list-sort">
            <div class="sort-left">Recent Checkins</div>

          </div>
          <div v-if="foursquare_venue_loaded" class="single-list" v-for="checkin in brewery.checkins">
            <div class="media comments-media">
              <div class="media-left">
                <a href="#">
                  <img v-bind:src="`${checkin.user.user_avatar}`" alt="User Image">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">{{ checkin.user.first_name }} {{ checkin.user.last_name }}<a href=""> had a {{ checkin.beer.beer_name }} </a> <div class="visitor star"></div></h4>
                <p>Style: {{ checkin.beer.beer_style }} ABV: {{ checkin.beer.beer_abv }}</p>
                <p> {{ checkin.created_at }}</p>
                <p>Rating: {{ checkin.rating_score }} / 5</p>
                <p v-if="checkin.checkin_comment">Comment: {{ checkin.checkin_comment }}</p>
                <p>Beer Description: {{ checkin.beer.beer_description }}</p>
                <div class="content-img" v-if="checkin.media.count > 0">
                  <img v-for="image in checkin.media.items" v-bind:src="`${image.photo.photo_img_lg}`" alt="Image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->

    <!-- FOOTER -->


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
/*.main-wrapper {
  position: relative;
  z-index: 6;
}*/
/*.row {
  position: relative;
  z-index: 5;
}*/
</style>

<script>
import axios from "axios";
import VueNumeric from 'vue-numeric';
import StarRating from 'vue-star-rating';

export default {
  data: function() {
    return {
      message: "Helloooooo from the show file!",
      venue: {},
      brewery: {},
      foursquare_venue: {},
      foursquare_venue_loaded: false
    };
  },
  components: {
    StarRating,
    VueNumeric
  },
  watch: {
    venue: function(val) {
      console.log("hello from untappd breweries get");
      axios.get(`/api/untappd_breweries/${this.venue.brewery_id}`).then(response => {
        this.brewery = response.data;
        console.log("this is this.brewery");
        console.log(this.brewery);
      });
      console.log("This is the foursquare id");
      console.log(this.venue.foursquare_id);
      axios.get(`/api/foursquare_venues/${this.venue.foursquare_id}`).then(response => {
        console.log("This is the foursquare venue data");
        console.log(response.data);
        this.foursquare_venue = response.data;
        this.foursquare_venue_loaded = true;
      });
    },
  },
  created: function() {
    axios.get(`/api/untappd_venues/${this.$route.params.id}`).then(response => {
      console.log("This is the venue data from untappd");
      console.log(response.data);
      this.venue = response.data;
    });
  },
  methods: {
    saveBrewery: function() {
      console.log("in the saveBrewery function");
      var savedBrewery = {
        untappd_brewery_id: this.brewery.brewery_id,
        brewery_name: this.brewery.brewery_name,
        venue_name: this.venue.venue_name,
        foursquare_venue_id: this.venue.foursquare_id,
        untappd_venue_id: this.venue.venue_id,
        brewery_label: this.brewery.brewery_label,
        visited: false,
        rating: "",
        comment: ""
      };
      console.log("this is the savedBrewery");
      console.log(savedBrewery);
      axios.post("/api/saved_breweries", savedBrewery).then(response => {
        console.log(response.data);
      });
    },
  }
};
</script>