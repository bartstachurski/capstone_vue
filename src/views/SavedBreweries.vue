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
                    <li><router-link v-bind:to="`/breweries/${brewery.untappd_venue_id}`"><img style="max-width: 125px; height: auto; " v-bind:src="`${brewery.brewery_label}`" alt="Image Listings" v-bind:to="`/breweries/${brewery.untappd_venue_id}`"></router-link></a></li>
                    <li>
                      <router-link v-bind:to="`/breweries/${brewery.untappd_venue_id}`"><h3>{{ brewery.venue_name }}</h3></router-link>
                      <h5>By {{ brewery.brewery_name }}</h5>
                      <button class="btn btn-primary" v-on:click="deleteSavedBrewery(brewery.saved_brewery_id)">Delete</button> 
                      <!-- Example single danger button -->

                      <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Add to Trip</button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" v-for="group in groups" v-on:click="addToGroup(brewery.saved_brewery_id, group.id)">{{group.name}}</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </td>
                <td v-if="brewery.visited"><span class="label label-success" v-on:click="toggleVisited(brewery.saved_brewery_id, brewery.visited)">Yes!</span></td>
                <td v-else v-on:click="toggleVisited(brewery.saved_brewery_id, brewery.visited, brewery.saved_brewery_id)"><span class="label label-warning">No</span></td>
                <!-- <td><i class="fa fa-check primaryColor" aria-hidden="true" v-if="brewery.visited"></i></td> -->
                <td>
                  <star-rating v-on:rating-selected="starsSet($event, brewery.saved_brewery_id, brewery.visited)" v-bind:rating="brewery.rating" :round-start-rating="false"></star-rating>
                </td>
                <td v-if="brewery.visited">{{brewery.comment}}<br>
                  <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Edit Comment
                    </button>
                      <div class="dropdown-menu">
                        <form @submit="saveComment(brewery.saved_brewery_id)" class="col-xs-12">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">With textarea</span>
                            </div>
                            <textarea v-model="editComment" class="form-control" aria-label="With textarea" v-bind:placeholder="brewery.comment"></textarea>
                          </div>
                          <button type="submit" class="btn btn-primary">Save</button>
                        </form>
                      </div>
                  </div>
                </td>
                <td v-else>Not Yet Visited</td>
                <td>{{brewery.created_at_date}} <br>{{brewery.created_at_time}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </section>

  </div>
</template>

<style>
.btn-primary {
  margin-right: 10px;
}
</style>

<script>
import axios from "axios";
import StarRating from 'vue-star-rating';
import VueNumeric from 'vue-numeric';

export default {
  data: function() {
    return {
      message: "Your Saved Breweries",
      saved_breweries: [],
      groups: [],
      searchTerm: "",
      friends: [],
      editComment: ""
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
    axios.get("/api/groups").then(response => {
      this.groups = response.data;
      console.log("this is the groups data");
      console.log(this.groups);
    });
    axios.get("/api/friendships").then(response => {
      this.friends = response.data;
      console.log("this is this.friends");
      console.log(this.friends);
    });
  },
  methods: {
    deleteSavedBrewery: function(savedBreweryId) {
      console.log("this is the savedBreweryId from the deleteSavedBrewery method!");
      console.log(savedBreweryId);
      axios.delete(`/api/saved_breweries/${savedBreweryId}`).then(response => {
        console.log(response.data);
      });
    },
    saveComment: function(savedBreweryId) {
      console.log("this is the savedBreweryId from the saveComment method");
      console.log(savedBreweryId);
      console.log(this.editComment);
      var params = {
        comment: this.editComment
      };
      axios.patch(`/api/saved_breweries/${savedBreweryId};`, params).then(response => {
        console.log(response.data);
      });
    },
    addToGroup: function(savedBreweryId, groupId) {
      console.log(groupId);
      console.log(savedBreweryId);
      var params = {
        saved_brewery_id: savedBreweryId,
        group_id: groupId
      };
      axios.post("/api/saved_brewery_groups", params).then(response => {
        console.log(response.data);
      });
    },
    toggleVisited: function(savedBreweryId, breweryVisited, breweryRating) {
      console.log("this is the saved brewery id");
      console.log(savedBreweryId);
      console.log("brewery visited?");
      console.log(breweryVisited);
      var params = {
        visited: !breweryVisited,
        saved_rating: breweryRating
      };
      axios.patch(`/api/saved_breweries/${savedBreweryId};`, params).then(response => {
        console.log(response.data);
      });
      window.location.reload();
    },
    starsSet: function(rating, savedBreweryId, breweryVisited) {
      console.log("hello from the setRating method this is the rating:");
      console.log(rating);
      console.log("this is the saved_brewery_id");
      console.log(savedBreweryId);
      var params = {
        saved_rating: rating,
        visited: breweryVisited
      };
      axios.patch(`/api/saved_breweries/${savedBreweryId};`, params).then(response => {
        console.log(response.data);
      });
    }
  },
};
</script>