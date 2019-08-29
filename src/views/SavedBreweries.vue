<template>
  <div class="saved_breweries">
    <section class="clearfix bg-dark listyPage">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="dashboardPageTitle">
          <h2>My Saved Breweries</h2>
        </div>
        <div class="table-responsive"  data-pattern="priority-columns">
          <table class="table listingsTable">
            <thead>
              <tr class="rowItem">
                <th data-priority="">Breweries</th>
                <th data-priority="1">Visited</th>
                <th data-priority="6">Rating</th>
                <th data-priority="2">Comment</th>
                <th data-priority="3">Saved on</th>
              </tr>
            </thead>
            <tbody>
              <tr class="rowItem" v-for="brewery in saved_breweries">
                <td>
                  <ul class="list-inline listingsInfo">
                    <!-- need to fix the sizing on this -->
                    <li><a><router-link v-bind:to="`/breweries/${brewery.untappd_venue_id}`"><img v-bind:src="`${brewery.brewery_label}`" alt="Image Listings" v-bind:to="`/breweries/${brewery.untappd_venue_id}`"></router-link></a></li>
                    <li>
                      <router-link v-bind:to="`/breweries/${brewery.untappd_venue_id}`"><h3>{{ brewery.venue_name }}</h3></router-link>
                      <h5>By {{ brewery.brewery_name }}</h5>
                    </li>
                  </ul>
                </td>
                <td v-if="brewery.visited"><span class="label label-success" v-on:click="toggleVisited(brewery.saved_brewery_id, brewery.visited)">Yes!</span></td>
                <td v-else v-on:click="toggleVisited(brewery.saved_brewery_id, brewery.visited)"><span class="label label-warning">No</span></td>
                <!-- <td><i class="fa fa-check primaryColor" aria-hidden="true" v-if="brewery.visited"></i></td> -->
                <td>
                  <star-rating v-on:rating-selected="starsSet($event, brewery.saved_brewery_id)" v-bind:rating="brewery.rating" :round-start-rating="false"></star-rating>
                </td>
                <td>{{brewery.comment}}</td>
                <td>{{brewery.created_at_date}} <br>{{brewery.created_at_time}}</td>
                <!-- <td><span class="label label-warning">Pending</span></td> -->
              </tr>
            </tbody>
          </table>
        </div>
        <div class="paginationCommon blogPagination text-center">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                </a>
              </li>
              <li class="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  </section>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import StarRating from 'vue-star-rating';
import VueNumeric from 'vue-numeric';

export default {
  data: function() {
    return {
      message: "Your Saved Breweries",
      saved_breweries: []
    };
  },
  components: {
    StarRating,
    VueNumeric
  },
  created: function() {
    axios.get("/api/saved_breweries").then(response => {
      console.log(response.data);
      this.saved_breweries = response.data;
    });
  },
  methods: {
    toggleVisited: function(savedBreweryId, breweryVisited) {
      console.log("this is the saved brewery id");
      console.log(savedBreweryId);
      console.log("brewery visited?");
      console.log(breweryVisited);
      var params = {visited: !breweryVisited};
      axios.patch(`/api/saved_breweries/${savedBreweryId};`, params).then(response => {
        console.log(response.data);
      });
    },
    starsSet: function(rating, savedBreweryId) {
      console.log("hello from the setRating method this is the rating:");
      console.log(rating);
      console.log("this is the saved_brewery_id");
      console.log(savedBreweryId);
      var params = {saved_rating: rating};
      axios.patch(`/api/saved_breweries/${savedBreweryId};`, params).then(response => {
        console.log(response.data);
      });
    }
  },
};
</script>