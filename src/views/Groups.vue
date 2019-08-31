<template>
  <div class="groups">
    <h1>{{ message }}</h1>
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
      message: "Welcome to Groups.js!"
    };
  },
  created: function() {},
  methods: {}
};
</script>