
import Vue from 'vue';
import VueStorage from 'vue-ls'
import Antd from 'ant-design-vue'
import { storageOptions } from  '@/config/projectConfig'

import 'ant-design-vue/dist/antd.less'


Vue.use(Antd)
Vue.use(VueStorage, storageOptions)
