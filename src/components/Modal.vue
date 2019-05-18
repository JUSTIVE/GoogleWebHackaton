<template>
  <div>
    <div class="curtain" @click="close"/>
    <div class="modal-contents">
      <div class="top">
        <div style="flex:1;"/>
        <div class="close" @click="close">
          X
        </div>

      </div>
      <div class="modalBody">
        <img class="modalImage" :src="data.images.original.url">
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "./eventBus";
export default {
  name: "MoreModal",
  data: () => {
    return {
      data: ""
    };
  },
  created() {
    EventBus.$on("ShowModal", (data) => {
      this.data = data;
    });
  },
  methods:{
    close(){
      EventBus.$emit("closeModal");
    }
  }
};
</script>

<style>
.curtain {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modal-contents {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  margin-top: 25vh;
  margin-bottom: 25vh;
  margin-right: 25vw;
  margin-left: 25vw;
  height: 50vh;
  width: 50vw;
  background: white;
  border-radius: 24px;
}
.top{
  display:flex;

}
.close{
  color:black;
  padding-right:32px;
  padding-top:32px;
}
.modalImage{
  width:100%;
  height:100%;
  object-fit: cover;  
}
.modalBody{
  width:100%;
  height:100%;
  object-fit: cover;  
}
</style>
