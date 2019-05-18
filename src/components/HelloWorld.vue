/* eslint-disable */
<template>
  <div class="hello">
    <MoreModal v-show="showModal"/>
    <v-autocomplete
      :items="items"
      v-model="item"
      :component-item="template"
      @update-items="updateItems"
      @change="updateItems"
    />
    <GifCardLayout :data="items"/>
  </div>
</template>

<script>
import axios from "axios";
import Autocomplete from "v-autocomplete";
import ItemTemplate from "./ItemTemplate.vue";
import "v-autocomplete/dist/v-autocomplete.css";

import Vue from "vue";
import GifCardLayout from "./GifCardLayout.vue";
import MoreModal from "./Modal.vue";
import EventBus from "./EventBus.vue";

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
      timer: null,
      searchText: '',
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
    EventBus.$on("showModal",(data)=>{
      this.showModal=true;
    })
  },
  methods: {
    fetchImageItems() {
      const api = "Gi3N0PItb1km0JpCIphGjlzLTfgoVBvb";
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
    updateItems(searchText) {
      console.log('item', searchText);
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.fetchImageByKeyword(searchText).then(response=>{
          const searchedData = response.data.data;
          this.items = searchedData;
        })},200);
    },
    fetchImageByKeyword(q){
      const api ="Gi3N0PItb1km0JpCIphGjlzLTfgoVBvb";
      const limit =20;
      return axios({
        method:'get',
        url:'http://api.giphy.com/v1/gifs/search',
        params:{
          api_key: api,
          limit,
          q,
        },
        headers:{
          'Content-Type':'application/json',
        },
      })
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
