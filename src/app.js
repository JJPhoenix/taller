import vue from 'vue';
import app from "./app.vue";

new vue({
    el:'#app',
    render:h=>h(app),
});