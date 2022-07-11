import request from '@/utils/request'
/**
 * 登录
 * @param {手机号,密码} param0
 * @returns
 */
export const login = ({ mobile, password }) => {
  return request({
    method: 'POST',
    url: '/sys/login',
    data: { mobile, password }
  })
}
