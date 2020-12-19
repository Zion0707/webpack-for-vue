<template>
    <div id="app">
        <router-link to="/">
            <button>首页</button>
        </router-link>
        <router-link to="/list/list">
            <button>列表</button>
        </router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>