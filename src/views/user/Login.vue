<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import { USER_INFO} from "@/store/mutation-types";

export default {
  name: 'Login',
  data() {
    return {
      title: 'Login'
    }
  },
  computed: {
    ...mapGetters(['userName']),
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations([
      'increment',
      USER_INFO.USER_NAME
    ]),
    changeCount() {
      this['increment']();
    },
    changeCount2() {
      this.$store.commit('increment');
    },
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
    <router-link to="/about">点击前往about</router-link>
    <div>
      {{ count }}
    </div>
    <div>
      {{ userName }}
    </div>
    <a-button tyen="default" @click="changeCount">更改count 方法1</a-button>
    <a-button tyen="default" @click="changeCount2">更改count 方法2</a-button>
    <a-button tyen="default" @click="changeUserName">更改UserName 方法1</a-button>
    <a-button tyen="default" @click="changeUserName2">更改UserName 方法2</a-button>
  </div>
</template>

<style scoped>

</style>
