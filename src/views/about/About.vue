<script>
import {mapGetters, mapMutations} from 'vuex'
import {USER_INFO} from "@/store/mutation-types";
  export default {
    name: 'About',
    data() {
      return {
        title: 'About'
      }
    },
    computed:{
      ...mapGetters(['userName']),
    },
    methods: {
      ...mapMutations([USER_INFO.USER_NAME]),
      changeUserName() {
        this[USER_INFO.USER_NAME]('李四');
      },
      changeUserName2() {
        this.$store.commit(USER_INFO.USER_NAME, '王五');
      }
    }
  }
</script>

<template>
  <div class="about-container">
    这是我的 {{ title }} 页面
    <router-link to="/login">点击前往home</router-link>
    <div>{{ userName }}</div>
    <a-button tyen="default" @click="changeUserName">更改UserName 方法1</a-button>
    <a-button tyen="default" @click="changeUserName2">更改UserName 方法2</a-button>
  </div>
</template>

<style scoped>

</style>
