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
    <div v-for="brewery in breweries">
      <h2>{{ brewery.location_name }}</h2>
      <p>{{ brewery.brewery_name }}</p>
      <router-link v-bind:to="`/breweries/${brewery.id}`">See More Info</router-link>
    </div>
  </div>
</template>

<style>

</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Search for a Brewery",
      lat: "",
      lon: "",
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
      let lat = place.geometry.location.lat();
      let lon = place.geometry.location.lng();
      let city = ac[0]["short_name"];
      this.lat = lat;
      this.lon = lon;
      console.log(this.lat);
      console.log(this.lon);
      axios.get("/api/brewery_db_searches", {
        params: {
          lat: this.lat,
          lng: this.lon
        }
      }).then(response => {
        console.log(response.data);
        this.breweries = response.data;
        console.log("this is the brewries variable");
        console.log(this.breweries);
      });
    });
  }
};
</script>