<template>
    <div id="app">
        {{ $route.name }} {{ $route.params }}
        <router-view />
    </div>
</template>
<script>
    export default {}
</script>

<style lang="scss"></style>
