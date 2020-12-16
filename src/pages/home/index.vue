<template>
    <div class="home">
        <h4>Home111111</h4>
        <br />
        <img :src="photo1" />
        <img :src="photo2" />
        <Child />
    </div>
</template>

<script>
import img01 from '_statics/imgs/01.png';
import img02 from '_statics/imgs/02.jpg';
import Conn from '_components/conn/index';
import Child from './components/child';
export default {
    data() {
        return {
            photo1: img01,
            photo2: img02,
        };
    },
    mounted() {},
    components: {
        Child,
        Conn,
    },
};
</script>

<style lang="less" scoped>
@import '_less/home/index.less';
</style>