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
                <li class="">
                  <a href="dashboard.html"><i class="fa fa-tachometer icon-dash" aria-hidden="true"></i> Dashboard</a>
                </li>
                <li class="dropdown singleDro ">
                  <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-list-ul icon-dash" aria-hidden="true"></i> Listings <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                  <ul class="dropdown-menu">
                    <li><a href="listings.html">My Listings</a></li>
                    <li><a href="add-listings.html">Add Listings</a></li>
                    <li><a href="edit-listings.html">My Listings</a></li>
                  </ul>
                </li>
                <li class="">
                  <a href="dashboard-reviews.html" class="scrolling"><i class="fa fa-star-o icon-dash" aria-hidden="true"></i> Reviews</a>
                </li>
                <li class="">
                  <a href="oders.html"><i class="fa fa-cogs icon-dash" aria-hidden="true"></i> Orders</a>
                </li>
                <li>
                  <a href="dashboard.html#message" class="scrolling">
                    <i class="fa fa-envelope icon-dash" aria-hidden="true"> </i>
                    Messages</a>
                </li>
                <li class="">
                  <a href="profile.html"><i class="fa fa-user icon-dash" aria-hidden="true"></i> Personal Details</a>
                </li>
              </ul>
              <div class="row adjustRow">
                <div class="pull-right col-xs-12 col-sm-2">
                  <form class="navbar-form" role="search">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search" name="q">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button"><i class="icon-listy icon-search-2"></i></button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <!-- Dashboard breadcrumb section -->
      <div class="section dashboard-breadcrumb-section bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2>Bookings</h2>
              <ol class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="dashboard.html">Dashboard</a></li>
                <li class="active">Bookings</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Booking Section -->
      <section class="booking-section bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="dashboard-list-box">
                <div class="list-sort">
                  <div class="sort-left">Visitor Reviews</div>
                  <div class="sort-right sort-select">
                    <select name="guiest_id2" id="guiest_id2" class="select-drop">
                      <option value="0">All Listings</option>
                      <option value="1">Tom's Restaurant</option>
                      <option value="2">Sticky Band</option>
                      <option value="3">Hotel Govendor</option>
                      <option value="4">Burger House</option>
                      <option value="5">Airport</option>
                      <option value="6">Think Coffee</option>
                    </select>
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
                      <h4 class="media-heading">{{ friend.name }} <span class="label label-warning">pending</span></h4>
                      <div class="booking-list ">Friend Since: <span class="highlight bg-warning">{{ friend.created_at_date }} {{ friend.created_at_time }}</span></div>
                      <div class="booking-list">Email: <span>{{friend.email}}</span></div>
                      <a href="#" class="btn btn-primary">send message</a>
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
      friends: []
    };
  },
  created: function() {
    console.log("in the created function");
    axios.get("/api/friendships").then(response => {
      this.friends = response.data;
      console.log("this is this.friends");
      console.log(this.friends);
    });
  },
  methods: {}
};
</script>