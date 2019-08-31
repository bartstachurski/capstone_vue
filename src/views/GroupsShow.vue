<template>
  <div class="groupsShow">
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
      message: "Welcome to groupsShow.js!",
      group: {}
    };
  },
  created: function() {
    axios.get(`/api/groups/${this.$route.params.id}`).then(response => {
      console.log("This is the group data from rails backend");
      this.group = response.data;
      console.log(this.group);
    });
  },
  methods: {}
};
</script>