<template>
    <div class="home">
        Home
        <br />
        <img :src="photo1" />
        <img :src="photo2" />
    </div>
</template>

<script>
import img01 from '_statics/imgs/01.png';
import img02 from '_statics/imgs/02.jpg';
export default {
    data() {
        return {
            photo1: img01,
            photo2: img02,
        };
    },
};
</script>