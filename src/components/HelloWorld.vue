/* eslint-disable */
<template>
  <div class="hello">
     <v-autocomplete :items="items" v-model="item" :get-label="getLabel" :component-item='template' @update-items="updateItems"/>
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
    // const api ="Gi3N0PItb1km0JpCIphGjlzLTfgoVBvb";
    // const limit =20;
    // const query = 'cat';
    // axios({
    //   method:'get',
    //   url:'http://api.giphy.com/v1/gifs/search',
    //   params:{
    //     api_key: api,
    //     q:query,
    //     limit,
    //   },
    //   headers:{
    //     'Content-Type':'application/json',
    //   },
    // })
    // .then((response)=>{
    //   console.log(response);
    // });
  },
  methods:{
    getLabel (item) {
      return item.name
    },
    updateItems (text) {
      yourGetItemsMethod(text).then( (response) => {
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
