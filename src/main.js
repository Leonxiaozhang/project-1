import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import router from '@/router'
import store from './store'
import 'swiper/css/swiper.css'
import fenyeqi from '@/components/fenyeqi'
import * as API from '@/api'
import { Button,MessageBox } from 'element-ui'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'   // 引入中文 message
VeeValidate.Validator.localize('zh_CN', {
  messages: {
  ...zh_CN.messages,
  is: (field) => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
  },
  attributes: { // 给校验的 field 属性名映射中文名称
  phone: '手机号',
  code: '验证码',
  password:'密码',
  password1:'确认密码',
  xieyi:'协议'
  }
  })
  VeeValidate.Validator.extend('tongyi', {
    validate: value => {
    return value
    },
    getMessage: field => field + '必须同意'
    })
Vue.use(VeeValidate)
Vue.component(Button.name, Button);
Vue.component(MessageBox.name, MessageBox);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.component('Type-nav', TypeNav)
Vue.component('Pagination',fenyeqi)
import '@/mock/mockServe'

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store,
 
}).$mount('#app') 
