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
                    <li><a href="#"><img v-bind:src="`${brewery.brewery_label}`" alt="Image Listings"></a></li>
                    <li>
                      <h3>{{ brewery.venue_name }}</h3>
                      <h5>By {{ brewery.brewery_name }}</h5>
                    </li>
                  </ul>
                </td>
                <td v-if="brewery.visited"><span class="label label-success">Yes!</span></td>
                <td v-else><span class="label label-warning">No</span></td>
                <!-- <td><i class="fa fa-check primaryColor" aria-hidden="true" v-if="brewery.visited"></i></td> -->
                <td>
                  <star-rating v-bind:rating="brewery.rating" :round-start-rating="false"></star-rating>
                </td>
                <td>{{brewery.comment}}</td>
                <td>28/02/2018 <br>9.15am</td>
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
    <h1>{{ message }}</h1>
    <div v-for="brewery in saved_breweries">
      <p> Brewery: {{ brewery.brewery_name }} </p>
      <p> Visted: {{ brewery.visited }} </p>
      <p> Rating: {{ brewery.rating }} </p>
      <p> Comment: {{ brewery.comment }} </p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import StarRating from 'vue-star-rating';

export default {
  data: function() {
    return {
      message: "Your Saved Breweries",
      saved_breweries: []
    };
  },
  components: {
    StarRating
  },
  created: function() {
    axios.get("/api/saved_breweries").then(response => {
      console.log(response.data);
      this.saved_breweries = response.data;
    });
  },
  methods: {},
};
</script>