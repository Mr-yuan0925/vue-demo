<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import { USER_INFO} from "@/store/mutation-types";
import Vue from 'vue'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['userName','storeObj'])
  },
  created(){
    // 监听浏览器刷新事件，浏览器执行刷新时，刷新之前将vuex中的数据做暂存处理；
    this.listenersBeforeUnload()

    if(Vue.ls.get(USER_INFO.USER_NAME)){
      this[USER_INFO.USER_NAME](Vue.ls.get(USER_INFO.USER_NAME))
    }
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload',this.listenersBeforeUnload,true)
  },
  methods: {
    ...mapMutations([USER_INFO.USER_NAME, USER_INFO.SAVE_OBJECT]),
    listenersBeforeUnload() {
      window.addEventListener('beforeunload',()=>{
        Vue.ls.set(USER_INFO.USER_NAME,this.userName)
      })
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
