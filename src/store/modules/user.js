import { login } from '@/api/user'
const state = {}
const mutations = {}
const actions = {
  // 登录
  async login (context, data) {
    try {
      const res = await login(data)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
