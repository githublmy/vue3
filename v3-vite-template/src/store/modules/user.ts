/*
 * @Description: 用户数据
 */

import { defineStore } from "pinia";
// import { getUserInfo } from "@/api/userInfo/index";
import { toTree, handleRouter } from "@/utils/commonFun";
import type { RouteRecordRaw } from "vue-router";
import { user } from "@/assets/json/user";
interface IUserInfo {
  userName: string;
  password: string;
  rememberPwd: boolean;
}
interface IUser {
  token: string;
  userInfo: IUserInfo;
  permission: any[];
  userId: number | null;
  userName: string;
  role: any;
}
export const useUserStore = defineStore("user", {
  state: (): IUser => {
    return {
      token: "",
      userInfo: {
        userName: "",
        password: "",
        rememberPwd: false,
      },
      permission: [], //原始数据
      userId: null,
      userName: "",
      role: null,
    };
  },
  getters: {
    // 转树形
    menuList(state) {
      return toTree({
        arrList: JSON.parse(JSON.stringify(state.permission)),
      });
    },
    //转路由
    routes(): RouteRecordRaw[] {
      return handleRouter(this.menuList);
    },
  },
  actions: {
    async getInfo() {
      // const res = await getUserInfo();
      console.log(user, "数据");
      this.token = "token";
      this.permission = user;
    },
  },
  persist: true, //整个数据持久化，
  // persist: {
  //   // key: 'my-custom-key',默认当前设置的pinia的key ===> user
  //   // storage: localStorage, // 默认localStorage，可选sessionStorage
  //   // paths: ["permission"], //需要持久化的数据 []表示都不持久化
  // },
});
