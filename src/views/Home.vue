<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div id="app">
      <input ref="autocomplete" 
      placeholder="Seach for a location" 
      class="search-location"
      onfocus="value = ''" 
      type="text">
    </div>
    <div v-for="brewery in filterBy(breweries, this.category_filter, 'categories')">
    <!-- <div v-for="brewery in filterBy(breweries, 'Tired Hands')"> -->
      <h2>{{ brewery.venue_name }}</h2>
      <router-link v-bind:to="`/breweries/${brewery.venue_id}`">See More Info</router-link>
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
      message: "Search for a Brewery",
      lat: "",
      lon: "",
      city: "",
      category_filter: "brewery",
      breweries: []
    };
  },
  created: function() {},
  methods: {},
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete((this.$refs.autocomplete),{types: ['geocode']}
    );
    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace();
      let ac = place.address_components;
      console.log("these are the places address components:");
      console.log(ac);
      let lat = place.geometry.location.lat();
      let lon = place.geometry.location.lng();
      let city = ac[0]["short_name"];
      this.lat = lat;
      this.lon = lon;
      this.city = city;
      console.log(this.lat);
      console.log(this.lon);
      console.log(this.city);
      // axios.get("/api/brewery_db_searches", {
      //   params: {
      //     lat: this.lat,
      //     lng: this.lon,
      //   }
      // }).then(response => {
      //   console.log(response.data);
      //   this.breweries = response.data;
      //   console.log("this is the brewries variable");
      //   console.log(this.breweries);
      axios.get("/api/untappd_venues", {
        params: {
          city: this.city
        }
      }).then(response => {
        console.log(response.data);
        this.breweries = response.data;
        console.log("this is the breweries variable");
        console.log(this.breweries);
      });
    });
  }
};
</script>