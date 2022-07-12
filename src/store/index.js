import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home'
import login from './login'
import register from './register'
import search from './search'
import detail from './detail'
import cartlist from './cartlist'
import trade from './trade'

export default new Vuex.Store({
   modules:{
    home,
    login,
    register,
    search,
    detail,
    cartlist,
    trade

   }
})