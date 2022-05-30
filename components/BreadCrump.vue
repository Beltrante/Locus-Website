<template>
<h6>
    <span v-for="(item,index) in items" :key="index">
    <NuxtLink v-if="item.url" :to="item.url">{{item.label}}</NuxtLink>   
    <span v-else class="text">{{item.label}}</span>
     <span v-if="index < (items.length-1)" class="mx-2">&gt;</span>
    </span>
</h6>
</template>

<script>
export default {
    props: {
        items:{
            type:Array,
            required: false,
        }
    },
    data(){
        return{};
    }
}
</script>
