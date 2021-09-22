<template>
    <div class="contanier-fluid">
        <NavBar />
        <div class="container">
            Loading...
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/views/NavBar.vue';

export default defineComponent({
    components:{
        NavBar
    }
})
</script>
