<template>
    <div>
        <header-proyecto></header-proyecto>
        <main></main>
    </div>
</template>

<script>
    import headerProyecto from '../src/component/principal/header-proyecto.vue';
    export default {
        name: "app",
        components:{
            "header-proyecto": headerProyecto
        }
    }
</script>

<style scoped lang="scss">
    @import "assets/style/main";
</style>