<template>
    <div class="curtain">

    </div>
</template>

<script>
import EventBus from "./EventBus.vue";
export default {
    name:"MoreModal",
    data:()=>{
        return{
            data,
        }
    },
    created(){
        EventBus.$on("showModal",(data)=>{
            this.data = data;      
        })
    }
}
</script>

<style>
.curtain{
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.26);
}
</style>
