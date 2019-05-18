<template>
  <div id="GifCard" @click="showModal">
    <img :src="imgres.images.original.url" alt>
    <div class="meta">
      <img class="Hero" :src="imgres.user.avatar_url" alt>
      <div class="name">
        <span class="display_name">{{imgres.user.display_name}}</span>
        <span class="username">{{"@"+imgres.user.username}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "./EventBus.vue";
export default {
  name: "GifCard",
  props: {
    imgres: Object
  },
  methods: {
    showModal() {
      console.log("@@@@@", this.imgres);
      EventBus.$emit("ShowModal", this.imgres);
    }
  }
};
</script>

<style lang="scss">
#GifCard {
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  margin: 16px;
  border-radius: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
#GifCard:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
img {
  border-radius: 24px;
  object-fit: cover;
  height: 200px;
}
.Hero {
  width: 32px;
  height: 32px;
}
.meta {
  display: flex;
  margin-top: -48px;
  padding: 12px;
  text-align: start;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}
.name {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  font-size: 12px;
  font-weight: bold;
  color: white;
}
.username {
  font-weight: 500;
}
@media (max-width: 764px) {
  #GifCard {
    width: calc(50%-128px);
    margin: 16px;
  }
}
</style>
