import Vue from 'vue';
// import Vuetify from 'vuetify';
import App from './App.vue';
import "vue-material-design-icons/styles.css";
// import 'vuetify/dist/vuetify.min.css';
// Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
  