import Vue from "vue";

const Bus = new Vue();

Vue.mixin({
    data(){
        return {
            events: Bus
        };
    }
});