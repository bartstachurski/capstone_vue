<template>
  <div class="saved_breweries">
    <section class="clearfix bg-dark listyPage">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="dashboardPageTitle">
          <h2>{{group.group.name}}</h2>
          <p>Users in Trip:
            <ul class="list-inline featuresItems">
              <li v-for="user in group.users"><i class="fa fa-check-circle-o" aria-hidden="true"></i> {{ user.first_name }} {{user.last_name}} 
<!--                 <div style="display:inline" v-for="item in attribute.items"> {{ item.displayValue }} 
                </div> -->
              </li>
            </ul>
          </p>
          <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Add Friends to Trip</button>
            <div class="dropdown-menu">
              <li><a class="dropdown-item" v-for="friend in friends" v-on:click="addFriendToGroup(friend.id)">{{friend.first_name}} {{friend.last_name}}</a></li>
            </div>
            <button type="button" class="btn btn-primary" v-on:click="deleteGroup()">Delete Trip</button>
          </div>
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
              <tr class="rowItem" v-for="brewery in group.breweries">
                <td>
                  <ul class="list-inline listingsInfo">
                    <!-- need to fix the sizing on this -->
                    <li><a><router-link v-bind:to="`/breweries/${brewery.untappd_venue_id}`"><img v-bind:src="`${brewery.brewery_label}`" alt="Image Listings" v-bind:to="`/breweries/${brewery.untappd_venue_id}`"></router-link></a></li>
                    <li>
                      <router-link v-bind:to="`/breweries/${brewery.untappd_venue_id}`"><h3>{{ brewery.venue_name }}</h3></router-link>
                      <h5>By {{ brewery.brewery_name }}</h5>
                      <!-- Example single danger button -->
                      <div class="btn-group">
                        <button v-on:click="removeFromGroup(brewery.id)" type="button" class="btn-danger" aria-haspopup="true" aria-expanded="false" >Remove from Trip</button>
                      </div>
                    </li>
                  </ul>
                </td>
                <td v-if="brewery.visited"><span class="label label-success">Yes!</span></td>
                <td v-else><span class="label label-warning">No</span></td>
                <td>
                  <star-rating v-bind:rating="brewery.rating" :round-start-rating="false"></star-rating>
                </td>
                <td>{{brewery.comment}}</td>
                <td>{{brewery.created_at_date}} <br>{{brewery.created_at_time}}</td>
                <!-- <td><span class="label label-warning">Pending</span></td> -->
              </tr>
            </tbody>
          </table>
        </div>

<!--         <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" :awss3="awss3" v-on:vdropzone-s3-upload-error="s3UploadError" v-on:vdropzone-s3-upload-success="s3UploadSuccess"></vue-dropzone> -->
      </div>
    </div>
  </div>
  </section>

  </div>
</template>

<style>
.img {
    max-height:125px;
    max-width:500px;
    height:auto;
    width:auto;
}
</style>

<script>
import axios from "axios";
import VueNumeric from 'vue-numeric';

// import vue2Dropzone from 'vue2-dropzone';
// import 'vue2-dropzone/dist/vue2Dropzone.min.css';


export default {
  data: function() {
    return {
      message: "Welcome to groupsShow.js!",
      group: {},
      friends: [],
      // dropzoneOptions: {
      //   url: 'http://localhost:3000/api/aws_s3_group_photos_uploads',
      //   thumbnailWidth: 150,
      //   maxFilesize: 10,
      //   headers: { "My-Awesome-Header": "header value" },
      //   method: "PUT"
      // },
      // awss3: {
      //   signingURL: 'https://brewtrip-group-photos.s3.us-east-2.amazonaws.com/image?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYDO2DFJAEP47FFNE%2F20190903%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20190903T153242Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=6d3d6fa0cd9adcf95c1b7f7cb5a95ae6041dd1870ac48f6955b234e5f7defde9',
      //   headers: {},
      //   params : {},
      //   sendFileToServer : true,
      //   withCredentials: false
      // },
    };
  },
  created: function() {
    axios.get(`/api/groups/${this.$route.params.id}`).then(response => {
      console.log("This is the group data from rails backend");
      this.group = response.data;
      console.log(this.group);
    });
    axios.get("/api/friendships").then(response => {
      this.friends = response.data;
      console.log("this is this.friends");
      console.log(this.friends);
    });
  },
  // components: {
  //   vueDropzone: vue2Dropzone
  // },
  methods: {
    removeFromGroup: function(savedBreweryId) {
      console.log(savedBreweryId);
      console.log(this.group.group.id);
      var params = {
        group_id: this.group.group.id,
        saved_brewery_id: savedBreweryId
      };
      axios.delete('/api/saved_brewery_groups', { data: params }).then(response => {
        console.log(response.data);
      });
    },
    deleteGroup: function() {
      console.log("this is this.group.group.id from the delete group method");
      console.log(this.group.group.id);
      axios.delete(`/api/groups/${this.group.group.id}`).then(response => {
        console.log(response.data);
        this.$router.push("/groups");
      });
    },
    addFriendToGroup: function(friendId) {
      console.log("hello from the addFriendToGroup method");
      console.log(friendId);
      var params = {
        user_id: friendId,
        group_id: this.group.group.id
      };
      console.log(params);
      axios.post(`/api/shared_groups`, params).then(response => {
        console.log("this is the response.data from addFriendToGroup method");
        console.log(response.data);
        window.location.reload();
      });
    }
  }
};
</script>