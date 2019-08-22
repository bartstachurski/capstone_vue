<template>
  <div class="saved_breweries">
    <h1>{{ message }}</h1>
    <div v-for="brewery in saved_breweries">
      <p> Location Name: {{ brewery.venue_name }} </p>
      <p> Brewery: {{ brewery.brewery_name }} </p>
      <p> Visted: {{ brewery.visited }} </p>
      <p> Rating: {{ brewery.rating }} </p>
      <p> Comment: {{ brewery.comment }} </p>
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
      message: "Your Saved Breweries",
      saved_breweries: []
    };
  },
  created: function() {
    axios.get("/api/saved_breweries").then(response => {
      console.log(response.data);
      this.saved_breweries = response.data;
    });
  },
  methods: {}
};
</script>