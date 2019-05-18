/* eslint-disable */
<template>
  <div class="hello">
    <MoreModal v-show="showModal"/>
    <v-autocomplete
      :items="items"
      v-model="item"
      :get-label="getLabel"
      :component-item="template"
      @update-items="updateItems"
    />

    <GifCardLayout :data="items"/>
  </div>
</template>

<script>
import axios from "axios";
import Autocomplete from "v-autocomplete";
import ItemTemplate from "./ItemTemplate.vue";
import "v-autocomplete/dist/v-autocomplete.css";

import GifCardLayout from "./GifCardLayout.vue";
import Vue from "vue";
import GifCardLayoutVue from "./GifCardLayout.vue";
import MoreModal from "./Modal.vue";
import EventBus from "./eventBus";

Vue.use(Autocomplete);

export default {
  name: "HelloWorld",
  components: {
    GifCardLayout,
    MoreModal
  },
  props: {
    msg: String
  },
  data() {
    return {
      item: {
        id: 9,
        name: "Lion",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      items: [],
      template: ItemTemplate,
      showModal:false,
    };
  },
  created() {
    this.fetchImageItems().then(({ data: { data } }) => {
      console.log(data);
      this.items = data;
    });
    EventBus.$on("ShowModal",(data)=>{
      this.showModal=true;
    });
    EventBus.$on("closeModal",()=>{
      this.showModal=false;
    });
  },
  methods: {
    getLabel(item) {
      return item.name;
    },
    fetchImageItems() {
      const api = "zvD1BZJTKwV3ZJOnj3sXvJ3r4NYrwznU";
      const limit = 20;
      return axios({
        method: "get",
        url: "http://api.giphy.com/v1/gifs/trending",
        params: {
          api_key: api,
          limit
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
    },
    updateItems(text) {
      this.fetchImageItems(text).then(response => {
        this.items = response;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
