import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import Vue2Filters from 'vue2-filters';
import * as VueGoogleMaps from 'vue2-google-maps';
import StarRating from 'vue-star-rating';
import VueNumeric from 'vue-numeric';

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_PLACES_API_KEY,
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  installComponents: true,
});

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

// axios.defaults.baseURL =
//   process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

// axios.defaults.baseURL =
//   process.env.NODE_ENV === "production" ? "https://stark-ridge-36072.herokuapp.com" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
