import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        // 系统菜单栏数据
        systemMenuList: [
            { page: "vuePage",          pageName: "vue 技术栈" },
            { page: "nodePage",         pageName: "node 技术栈" },
            { page: "javascriptPage",   pageName: "js 技术栈" },
            { page: "cssPage",          pageName: "css 技术栈" },
        ],
    },

});

export default store;