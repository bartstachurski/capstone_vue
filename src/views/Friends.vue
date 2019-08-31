<template>
  <div class="friends">
    <div class="main-wrapper">
      <!-- Dashboard header -->
      <section class="navbar-dashboard-area">
        <nav class="navbar navbar-default lightHeader navbar-dashboard" role="navigation">
          <div class="container">

            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-dash">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-dash">
              <ul class="nav navbar-nav mr0">
                <li class="" v-on:click="setGroup('friends')">
                  <a><i class="fa fa-tachometer icon-dash" aria-hidden="true" ></i> Friends </a>
                </li>
                <li class="" v-on:click="setGroup('friend_requests')">
                  <a><i class="fa fa-cogs icon-dash" aria-hidden="true" ></i>Pending Friend Requests</a>
                </li>
<!--                 <li>
                  <a href="dashboard.html#message" class="scrolling">
                    <i class="fa fa-envelope icon-dash" aria-hidden="true"> </i>
                    Messages</a>
                </li> -->
              </ul>
              <div class="row adjustRow">
                <div class="pull-right col-xs-12 col-sm-4">
                  <form class="navbar-form" role="search">
                    <div class="input-group">
                      <input v-model="searchTerm" type="text" class="form-control" placeholder="Search for New Friends" name="q" list="users">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button"><i class="icon-listy icon-search-2"></i></button>
                      </span>
                      <datalist id="users">
                        <option v-for="user in users">{{ user.first_name }} {{ user.last_name }}</option>
                    </datalist>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <!-- Booking Section -->
      <section class="booking-section bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div v-if="group == 'friends'" class="dashboard-list-box">
                <div class="list-sort">
                  <div class="sort-left">Friends</div>
                  <div class="sort-right sort-select">
                  </div>
                </div>
               
                <div class="single-list" v-for="friend in friends">
                  <div class="media booking-list-media">
                    <div class="media-left">
                      <a href="#">
                        <img src="assets/img/dashboard/comments-01.jpg" alt="User Image">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">{{ friend.first_name }} {{ friend.last_name }}<span class="label label-warning">pending</span></h4>
                      <div class="booking-list ">Friend Since: <span class="highlight bg-warning">{{ friend.created_at_date }} {{ friend.created_at_time }}</span></div>
                      <div class="booking-list">Email: <span>{{friend.email}}</span></div>
                      <a :href="`mailto:${friend.email}`" class="btn btn-primary">send email</a>
                    </div>
                    <div class="right-btn">
                      <a href="#" class="btn btn-primary cancel">cancel</a>
                      <a href="#" class="btn btn-primary approved">approve</a>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="dashboard-list-box">
                <div class="list-sort">
                  <div class="sort-left">Incoming Requests</div>
                  <div class="sort-right sort-select">
                  </div>
                </div>
               
                <div class="single-list" v-for="friendRequest in friendRequests.incoming">
                  <div class="media booking-list-media">
                    <div class="media-left">
                      <a href="#">
                        <img src="assets/img/dashboard/comments-01.jpg" alt="User Image">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">{{ friendRequest.user_details.first_name }} {{ friendRequest.user_details.last_name }}<span class="label label-warning">pending</span></h4>
                      <div class="booking-list ">Request Received: <span class="highlight bg-warning">{{ friendRequest.created_at_date }} {{ friendRequest.created_at_time }}</span></div>
                      <div class="booking-list">Email: <span>{{friendRequest.user_details.email}}</span></div>
                      <a :href="`mailto:${friendRequest.user_details.email}`" class="btn btn-primary">send email</a>
                    </div>
                    <div class="right-btn">
                      <a v-on:click="declineRequest(friendRequest.id)" class="btn btn-primary cancel">decline</a>
                      <a href="#" class="btn btn-primary approved">approve</a>
                    </div>
                  </div>
                </div>
                <div class="list-sort">
                  <div class="sort-left">Outgoing Requests</div>
                  <div class="sort-right sort-select">
                  </div>
                </div>
               
                <div class="single-list" v-for="friendRequest in friendRequests.outgoing">
                  <div class="media booking-list-media">
                    <div class="media-left">
                      <a href="#">
                        <img src="assets/img/dashboard/comments-01.jpg" alt="User Image">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">{{ friendRequest.friend_details.first_name }} {{ friendRequest.friend_details.last_name }}<span class="label label-warning">pending</span></h4>
                      <div class="booking-list ">Friend Since: <span class="highlight bg-warning">{{ friendRequest.friend_details.created_at }} {{ friendRequest.friend_details.created_at }}</span></div>
                      <div class="booking-list">Email: <span>{{friendRequest.friend_details.email}}</span></div>
                      <a :href="`mailto:${friendRequest.friend_details.email}`" class="btn btn-primary">send email</a>
                    </div>
                    <div class="right-btn">
                      <a href="#" class="btn btn-primary cancel">cancel</a>
                      <a href="#" class="btn btn-primary approved">approve</a>
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
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to the friends page!",
      friends: [],
      friendRequests: [],
      searchTerm: "",
      group: "friends",
      users: [],
      selected: null,
      options: [
        { value: 1, text: 'Current Friends' },
        { value: 2, text: 'Incoming Friend Requests' },
        { value: 3, text: 'Outgoing Friend Requests' },
      ]
    };
  },
  created: function() {
    console.log("in the created function");
    axios.get("/api/friendships").then(response => {
      this.friends = response.data;
      console.log("this is this.friends");
      console.log(this.friends);
    });
    axios.get("/api/friend_requests").then(response => {
      this.friendRequests = response.data;
      console.log("this is this.friend requests");
      console.log(this.friendRequests);
    });
    axios.get("/api/users").then(response => {
      this.users = response.data;
      console.log("this is this.users");
      console.log(this.users);
    });
  },
  methods: {
    setGroup: function(group) {
      this.group = group;
      console.log("this is the friend_requests");
      console.log(this.friendRequests);
    },
    declineRequest: function(friendRequestId) {
      console.log("this is friend_request_id from the declineRequest method");
      console.log(friendRequestId);
      axios.delete(`/api/friend_requests/${friendRequestId}`).then(response => {
        console.log("data received from the friend request destroy action");
        console.log(response.data);
      });
    }
  }
};
</script>