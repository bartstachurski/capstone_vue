<template>
  <div class="groups">
    <div class="main-wrapper">
      <!-- MAP SECTION -->
      <!-- <section class="clearfix p0">
        <div id="map-canvas"></div>
      </section> -->

      <!-- CATEGORY LIST SECTION -->
      <section class="clerfix">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-xs-12">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal">Create New Group</button>
              <!-- LOGIN  MODAL -->
              <div id="loginModal" tabindex="-1" class="modal fade" role="dialog">
                <div class="modal-dialog">

                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">Create a New Group</h4>
                    </div>
                    <div class="modal-body">
                      <!-- do you want to do .prevent after the submit here to be more "proper?" -->
                      <form @submit="createNewGroup()" class="loginForm">
                        <div class="form-group">
                          <i class="fa fa-beer" aria-hidden="true"></i>
                          <input type="text" class="form-control" id="groupName" placeholder="Name of Group" v-model="newGroup">
                        </div>
                        <div class="form-group">
                          <button type="submit" class="btn btn-primary btn-block">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
              <div class="resultBar barSpaceAdjust">
                <h2>We found <span>7</span> Results for you </h2>
                <ul class="list-inline">
                  <li><a href="listing-grid-right-sidebar.html"><i class="fa fa-th" aria-hidden="true"></i></a></li>
                  <li class="active"><a href="listing-list-right-sidebar.html"><i class="fa fa-th-list" aria-hidden="true"></i></a></li>
                </ul>
              </div>
              <div v-for="group in groups" class="listContent">
                <div class="row">
                  <div class="col-sm-5 col-xs-12">
                    <div class="categoryImage">
                      <router-link v-bind:to="`/groups/${group.id}`"><img v-bind:src="group.photo_url" alt="Image category" class="img-responsive img-rounded"></router-link>
                      <span class="label label-primary">Verified</span>
                    </div>
                  </div>
                  <div class="col-sm-7 col-xs-12">
                    <div class="categoryDetails">
                      <h2><router-link v-bind:to="`/groups/${group.id}`" style="color: #222222">{{group.name}}</router-link></h2>
                      <p>Breweries in Group</p>
                      <ul>
                        <li v-for="saved_brewery in group.saved_breweries">
                          <router-link v-bind:to="`/breweries/${saved_brewery.untappd_venue_id}`" >{{ saved_brewery.venue_name }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="paginationCommon blogPagination categoryPagination">
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
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import VueNumeric from 'vue-numeric';

export default {
  data: function() {
    return {
      message: "Welcome to Groups.js!",
      groups: [],
      sharedGroups: [],
      newGroup: ""
    };
  },
  created: function() {
    axios.get("/api/groups").then(response => {
      this.groups = response.data;
      console.log("this is the groups data");
      console.log(this.groups);
    });
    axios.get("/api/shared_groups").then(response => {
      this.shared_groups = response.data;
      console.log("this is the groups data");
      console.log(this.groups);
    });
  },
  methods: {
    removeFromGroup: function(savedBreweryId, groupId) {
      console.log(savedBreweryId);
      console.log(groupId);
    },
    createNewGroup: function() {
      console.log("in the createNewGroup method");
      console.log(this.newGroup);
      var params = {name: this.newGroup};
      axios.post("/api/groups", params).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>