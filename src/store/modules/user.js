import { login } from '@/api/user'
import { Message } from 'element-ui'
// token持久化使用cookie
import { setToken, getToken } from '@/utils/auth'
const state = {
  token: getToken() || ''
}
const mutations = {
  setToken (state, token) {
    state.token = token
  }
}
const actions = {
  // 登录
  async login (context, data) {
    try {
      const res = await login(data)
      console.log(res)
      if (res.data.success) {
        context.commit('setToken', res.data.data)
        setToken(res.data.data)
      } else {
        Message.error(res.data.message)
      }
    } catch (err) {
      Message.error('登录失败，请重试')
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
