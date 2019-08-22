 <template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/saved_breweries">Saved Breweries</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  methods: {
    // initMap() {
    //   console.log("in the initMap function");
    //   new google.maps.Map(document.getElementById('map'), {
    //   });
    // }
  }
};

</script>
