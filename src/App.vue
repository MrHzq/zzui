<template>
    <div id="app">
        <!-- <div v-for="i in r" :key="i">
            <router-link :to="i">{{i}}</router-link>
        </div> -->
        <router-view />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                r: ['about', 'home']
            }
        }
    }
</script>

<style lang="scss">
</style>
