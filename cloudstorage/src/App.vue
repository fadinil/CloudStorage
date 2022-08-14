<template>
    <my-navbar />
    <div class="app">
        <router-view />
    </div>
</template>


<script>
import MyNavbar from './components/MyNavbar.vue';

export default {
    components: {
        MyNavbar
    }
}
</script>


<style scoped>
</style>