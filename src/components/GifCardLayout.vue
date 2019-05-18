<template>
    <div class="Layout">
        <GifCard v-for="item in data"
        :key="item.id" :imgres="item"/>
    </div>
</template>

<script>
import GifCard from './GifCard.vue';
export default {
    name:"GifCardLayout",
    props:{
        data:Object
    },
    components:{
        GifCard,
    }

}
</script>

<style lang="scss">
.Layout{
    width:100%;
}

</style>

