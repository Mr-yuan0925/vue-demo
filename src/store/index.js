import Vue from 'vue'
import Vuex from 'vuex'
import {USER_INFO } from "@/store/mutation-types";
import { login } from '@/api/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        userName: '张三'
    },
    getters: {
        userName: (state) => { return state.userName },
        storeObj: (state) => { return state },
    },
    mutations: {
        increment (state) {
            state.count++;
        },
        [USER_INFO.USER_NAME]: (state, userName) => {
                state.userName = userName;
                Vue.ls.set(USER_INFO.USER_NAME,userName);
        },
    },
    actions: {
        // 登录
        Login({commit}, params){
            return new Promise((resolve, reject) => {
                // 进行调用接口
                login(params).then(() =>{
                    resolve()
                }).catch(err => {
                    reject(err);
                })
            })
        }
    }
})

export default store
