<template>
  <div class="show">
    <h1>{{ venue.venue_name }}</h1>
    <h2>Brewery Name: {{ venue.brewery_name }}</h2>
    <p>{{ venue.venue_address }}, {{ venue.venue_city }}, {{ venue.venue_state }}</p>
    <p></p>
    <p>Brewery Untappd Rating: {{ brewery.rating_score }} Rating Count: {{ brewery.rating_count }}</p>
<!--     <p>{{ venue.venue_info }}</p> -->
<!--     <p>{{ brewery.venue_info.beer }}</p> -->
<!--     <h2>{{ brewery.location_name }}</h2>
    <p>Hours of Operation: {{ brewery.hours_of_operation }}</p>
    <p>Untappd Description: {{ brewery.untappd_brewery_info.brewery_description }}</p> -->
    <button v-on:click="saveBrewery()">Save Brewery</button>
<!--     <div><img v-bind:src="product.image_url" v-bind:alt="product.name"/></div> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Helloooooo from the show file!",
      venue: {},
      brewery: {}
    };
  },
  created: function() {
    axios.get(`/api/untappd_venues/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.venue = response.data;
    });
  },
  updated: function() {     
    this.$nextTick(function() {
      axios.get(`/api/untappd_breweries/${this.venue.brewery_id}`).then(response => {
        this.brewery = response.data;
      });
    });
  },
  methods: {
    saveBrewery: function() {
      console.log("in the saveBrewery function");
      var savedBrewery = {
        brewery_id: this.venue.venue_id,
        brewery_name: this.venue.brewery_name,
        venue_name: this.venue.venue_name,
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