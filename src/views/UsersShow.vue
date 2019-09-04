<template>
  <div class="userShow">
    <div class="main-wrapper">
      <!-- USER PROFILE SECTION -->
      <section class="user-profile-section bg-light">
        <div class="container">
          <div class="user-profile">
            <div class="row">
              <div class="col-xs-12 col-sm-4">
                <div class="user-img">
                  <img v-bind:src="user.profile_photo" alt="User Image">
                </div>
              </div>
              <div class="col-xs-12 col-sm-8">
                <div class="user-profile-content">
                  <h3 class="user-name">{{user.first_name}} {{user.last_name}}</h3>
                  <p>{{user.bio}}</p>
                  <ul class="user-contact-details">
                    <li><i class="fa fa-envelope" aria-hidden="true"></i><a :href="`mailto:${user.email}`">{{user.email}}</a></li>
                    <li v-if="user.friend_status === false"><button v-on:click="sendFriendRequest()">Send Friend Request</button></li>
                    <li v-else> Already a Friend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <aside>
                <div class="user-contact">
                  <h3>Contact</h3>
                  <form>
                    <div class="form-group">
                      <input type="text" class="form-control" id="exampleInputName" placeholder="Please Enter Your Name">
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" id="exampleInputEmail" placeholder="Please Enter Your Email">
                    </div>
                    <div class="form-group">
                      <textarea class="form-control"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">send message</button>
                  </form>
                </div>
              </aside>
            </div>
            <div class="col-sm-8">
              <div class="listContentHeading">
                <h2>Saved Breweries</h2>
              </div>
              <div v-for="brewery in user.saved_breweries" class="listContent">
                <div class="row">
                  <div class="col-sm-5 col-xs-12">
                    <div class="categoryImage">
                      <img v-bind:src="brewery.brewery_label" alt="Image category" class="img-responsive img-rounded">
                    </div>
                  </div>
                  <div class="col-sm-7 col-xs-12">
                    <div class="categoryDetails">
                      <ul class="list-inline rating">
                        <li v-if="brewery.visited === true"><star-rating v-bind:rating="brewery.rating" :round-start-rating="false"></star-rating></li>
                        <li v-else>Not Yet Visited</li>
                      </ul>
                      <h2><a href="listing-details-right.html" style="color: #222222">{{brewery.venue_name}}</a></h2>
                      <p>By {{brewery.brewery_name}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="listContentHeading">
                <h2>Trips</h2>
              </div>
              <div v-for="group in user.groups" class="listContent">
                <div class="row">
                  <div class="col-sm-5 col-xs-12">
                    <div class="categoryImage">
                      <img v-bind:src="group.photo_url" alt="Image category" class="img-responsive img-rounded">
                    </div>
                  </div>
                  <div class="col-sm-7 col-xs-12">
                    <div class="categoryDetails">
                      <h2><a href="listing-details-right.html" style="color: #222222">{{group.name}}</a></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      message: "Welcome to User show page",
      user: {},
    };
  },
  components: {
    StarRating
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    sendFriendRequest: function(userId) {
      console.log();
    }
  }
};
</script>