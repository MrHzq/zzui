<template>
    <div id="app">
        <h1>当前页面的$route</h1>
        <h2>$route.path：</h2>
        <p>{{$route.path}}</p>
        <h2>$route.name：</h2>
        <p>{{$route.name}}</p>
        <h2>$route.params：</h2>
        <p>{{$route.params}}</p>
        <h2>$route.query：</h2>
        <p>{{$route.query}}</p>
        <h1>当前页面的内容，即【router-view】标签渲染出来的页面</h1>
        <div>==================================================================</div>
        <router-view />
        <div>==================================================================</div>

        <h2>具体渲染出来的路由数据，可以在 f12-console 控制台里面查看</h2>
    </div>
</template>
<script>
    export default {}
</script>

<style lang="scss"></style>
