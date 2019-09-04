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
                  <a><i class="fa fa-users icon-dash" aria-hidden="true" ></i> Friends </a>
                </li>
                <li class="" v-on:click="setGroup('friend_requests')">
                  <a v-if="friendRequests.incoming.length > 0"><i class="fa fa-hand-peace-o icon-dash" aria-hidden="true" ></i> Pending Friend Requests ({{friendRequests.incoming.length}})</a>
                  <a v-else><i class="fa fa-hand-peace-o icon-dash" aria-hidden="true" ></i> Pending Friend Requests (None)</a>
                </li>
              </ul>
              
              <div class="row adjustRow">
                <div class="pull-right col-xs-12 col-sm-4">
                <div class="input-group">
                  <input v-model="searchTerm" class="form-control" type="search" placeholder="Search for new friends" aria-label="Search" list="users">
                  <span class="input-group-btn">
                    <button class="btn btn-default" v-on:click="searchClick()"><i class="icon-listy icon-search-2"></i></button>
                  </span>
                  <datalist id="users">
                    <option v-bind:data-value="user.id" v-for="user in users">{{ user.first_name }} {{ user.last_name }} </option>
                  </datalist>
                </div>
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
              <div v-if="searchTerm != ''" class="dashboard-list-box">  
                  <div v-if="searchTerm != ''" class="single-list" v-bind:key="user.id" v-for="user in filterBy(users, this.searchTerm, 'full_name')">
                    <div class="media booking-list-media">
                      <div class="media-left">
                        <router-link v-bind:to="`/users/${user.id}`">
                          <img v-bind:src="user.profile_photo" alt="User Image">
                        </router-link>
                      </div>
                      <div class="media-body">
                        <router-link v-bind:to="`/users/${user.id}`">  
                          <h4 class="media-heading">{{ user.first_name }} {{ user.last_name }}</h4>
                        </router-link>
                        <div class="booking-list">User Since: <span class="highlight bg-warning">{{ user.created_at_date }} {{ user.created_at_time }}</span></div>
                        <div class="booking-list">Email: <span>{{user.email}}</span></div>
                        <a :href="`mailto:${user.email}`" class="btn btn-primary">send email</a>
                        <button v-on:click="createFriendRequest(user.id)" class="btn btn-primary approved">Send Friend Request</button>
                      </div>
                        <div class="right-btn">
                        </div>
                    </div>
                  </div>
              </div>
              <div v-if="group == 'friends'" class="dashboard-list-box">
                <div class="list-sort">
                  <div class="sort-left">Friends</div>
                  <div class="sort-right sort-select">
                  </div>
                </div>
               
                <div class="single-list" v-for="(friend, index) in friends" v-bind:key="index">
                  <div class="media booking-list-media">
                    <div class="media-left">
                      <router-link v-bind:to="`/users/${friend.id}`">
                        <img v-bind:src="friend.profile_photo" alt="User Image">
                      </router-link>
                    </div>
                    <div class="media-body">
                      <router-link v-bind:to="`/users/${friend.id}`">  
                        <h4 class="media-heading">{{ friend.first_name }} {{ friend.last_name }}<span class="label label-warning">pending</span></h4>
                      </router-link>
                      <div class="booking-list ">Friend Since: <span class="highlight bg-warning">{{ friend.created_at_date }} {{ friend.created_at_time }}</span></div>
                      <div class="booking-list">Email: <span>{{friend.email}}</span></div>
                      <a :href="`mailto:${friend.email}`" class="btn btn-primary">send email</a>
                    </div>
                    <div class="right-btn">
                      <button v-on:click="deleteFriend(friend.id, index)" class="btn btn-primary cancel">delete friend</button>
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
               
                <div class="single-list" v-for="(friendRequest, index) in friendRequests.incoming" v-bind:key="index">
                  <div class="media booking-list-media">
                    <div class="media-left">
                      <router-link v-bind:to="`/users/${friendRequest.user_id}`">
                        <img v-bind:src="friendRequest.user_details.profile_photo" alt="User Image">
                      </router-link>
                    </div>
                    <div class="media-body">
                      <router-link v-bind:to="`/users/${friendRequest.user_id}`">
                        <h4 class="media-heading">{{ friendRequest.user_details.first_name }} {{ friendRequest.user_details.last_name }}<span class="label label-warning">pending</span></h4>
                      </router-link>
                      <div class="booking-list ">Request Received: <span class="highlight bg-warning">{{ friendRequest.created_at_date }} {{ friendRequest.created_at_time }}</span></div>
                      <div class="booking-list">Email: <span>{{friendRequest.user_details.email}}</span></div>
                      <a :href="`mailto:${friendRequest.user_details.email}`" class="btn btn-primary">send email</a>
                    </div>
                    <div class="right-btn">
                      <a v-on:click="declineRequest(friendRequest.id, index)" class="btn btn-primary cancel">decline</a>
                      <button v-on:click="acceptFriendRequest(friendRequest.id, index)" class="btn btn-primary approved">accept</button>
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
                      <router-link v-bind:to="`/users/${friendRequest.friend_details.id}`">
                        <img v-bind:src="friendRequest.friend_details.profile_photo" alt="User Image">
                      </router-link>
                    </div>
                    <div class="media-body">
                      <router-link v-bind:to="`/users/${friendRequest.friend_details.id}`">
                        <h4 class="media-heading">{{ friendRequest.friend_details.first_name }} {{ friendRequest.friend_details.last_name }}<span class="label label-warning">pending</span></h4>
                      </router-link>
                      <div class="booking-list ">Sent Request: <span class="highlight bg-warning">{{ friendRequest.created_at_date }} {{ friendRequest.created_at_time }}</span></div>
                      <a :href="`mailto:${friendRequest.friend_details.email}`" class="btn btn-primary">send email</a>
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
  .autocomplete {
    position: relative;
    width: 130px;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
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
      search: '',
      searchTerm: "",
      searchUser: {},
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
    declineRequest: function(friendRequestId, index) {
      console.log("this is friend_request_id from the declineRequest method");
      console.log(friendRequestId);
      console.log(index);
      console.log("this is the index of friend request being declined");
      axios.delete(`/api/friend_requests/${friendRequestId}`).then(response => {
        console.log("data received from the friend request destroy action");
        console.log(response.data);
        this.friendRequests.incoming.splice(index, 1);
      });
    },
    createFriendRequest: function(friendId) {
      console.log("this is the friendId");
      console.log(friendId);
      var params = {
        friend_id: friendId
      };
      axios.post(`/api/friend_requests`, params).then(response => {
        console.log("data received from the friend request create action");
        console.log(response.data);
      });
    },
    acceptFriendRequest: function(friendId, index) {
      console.log(friendId);
      var params = {
        accepted: true
      };
      axios.patch(`/api/friend_requests/${friendId}`, params).then(response => {
        console.log("dat received from the friend request update aka accept action");
        console.log(response.data);
        this.friendRequests.incoming.splice(index, 1);
      });
    },
    searchClick: function(value) {
      console.log(value);
    },
    deleteFriend: function(friendId, index) {
      console.log("this is the friendId from the deslete friend method");
      console.log(friendId);
      axios.delete(`/api/friendships/${friendId}`).then(response => {
        console.log("data received from the friend request destroy action");
        console.log(response.data);
        this.friends.splice(index, 1);
      });
    }
  }
};
</script>