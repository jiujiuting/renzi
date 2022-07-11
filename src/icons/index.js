// 注册全局组件
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
Vue.component('SvgIcon', SvgIcon)
// 批量导入所有svg图标
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
