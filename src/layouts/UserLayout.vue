<template>
  <div id="userLayout">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <span class="title">{{ projectTitle }}</span>
          </a>
        </div>
        <div class="desc">
          {{ projectDesc }}
        </div>
      </div>

      <router-view />

      <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">
          底部
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import projectConfig from '@/config/projectConfig'
export default {
  name: 'UserLayout',
  data () {
    return {
      // 项目标题
      projectTitle: projectConfig.projectTitle,
      // 项目描述
      projectDesc: projectConfig.projectDesc
    }
  },
  mounted () {
    console.log(111)
  },
  beforeDestroy () {
  }
}
</script>

<style lang="less" scoped>
#userLayout{
  color: red !important;
}
#userLayout .header a{
  color: pink !important;
}

#userLayout.user-layout-wrapper {
  height: 100%;

  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background-size: 100%;
    padding: 110px 0 144px;
    position: relative;

    a {
      text-decoration: none;
    }

    .top {
      text-align: center;

      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }

    .main {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>

