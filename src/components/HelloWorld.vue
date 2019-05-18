/* eslint-disable */
<template>
  <div class="hello">
     <v-autocomplete
      :items="items"
      @change="updateItems"
      :component-item='template'
     />
     <ul class="cards"
        v-for="card in items"
        :key="card.id"
      >
        <li>
          <div class="user">
            <!-- {{card.user.display_name}} -->
          </div>
        </li>
     </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Autocomplete from 'v-autocomplete';
import ItemTemplate from './ItemTemplate.vue';
import 'v-autocomplete/dist/v-autocomplete.css';
import Vue from 'vue';
// import { getImageByKeyWord } from '../../api/index.js';

Vue.use(Autocomplete);

export default {

  name: "HelloWorld",
  props: {
    msg: String
  },
  data () {
    return {
      timer: null,
      searchText: '',
      items: [],
      template: ItemTemplate
    }
  },
  created() {
     this.fetchImageItems().then( ({data: {data}}) => {
        console.log(JSON.stringify(data,null,4))

        this.items = data
      })
  },
  methods:{
    fetchImageItems(){
      const api ="Gi3N0PItb1km0JpCIphGjlzLTfgoVBvb";
      const limit =20;
    return axios({
      method:'get',
      url:'http://api.giphy.com/v1/gifs/trending',
      params:{
        api_key: api,
        limit,
      },
      headers:{
        'Content-Type':'application/json',
      },
    })
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
