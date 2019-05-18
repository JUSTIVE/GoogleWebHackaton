<template>
  <div>
    <div class="curtain"/>
    <div class="modal-contents">

    </div>
  </div>
</template>

<script>
import EventBus from "./EventBus.vue";
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
</style>
