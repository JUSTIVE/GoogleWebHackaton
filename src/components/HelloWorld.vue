/* eslint-disable */
<template>
  <div class="hello">
     <v-autocomplete :items="items" v-model="item" :get-label="getLabel" :component-item='template' @update-items="updateItems"/>
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
import Autocomplete from 'v-autocomplete'
import ItemTemplate from './ItemTemplate.vue';
import 'v-autocomplete/dist/v-autocomplete.css';
import Vue from 'vue';

Vue.use(Autocomplete);

export default {
  
  name: "HelloWorld",
  props: {
    msg: String
  },
  data () {
    return {
      item: {id: 9, name: 'Lion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
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
    getLabel (item) {
      return item.name
    },
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
    updateItems (text) {
      this.fetchImageItems(text).then( (response) => {
        this.items = response
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
