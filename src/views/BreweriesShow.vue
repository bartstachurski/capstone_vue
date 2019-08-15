<template>
  <div class="show">
    <h1>{{ brewery.brewery_name }}</h1>
    <h2>{{ brewery.location_name }}</h2>
    <p>Hours of Operation: {{ brewery.hours_of_operation }}</p>
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
      brewery: {}
    };
  },
  created: function() {
    axios.get(`/api/brewery_db_searches/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.brewery = response.data;
      console.log("showing this.brewery");
      console.log(this.brewery);
    });
  },
  methods: {
    saveBrewery: function() {
      console.log("in the saveBrewery function");
      var savedBrewery = {
        brewery_id: this.brewery.id,
        visited: "",
        rating: "",
        comment: ""
      };
      console.log("this is the savedBrewery");
      console.log(savedBrewery);
      axios.post("/api/saved_breweries", savedBrewery).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>