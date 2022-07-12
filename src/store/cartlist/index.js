import { reqcartlist, reqdeletecart ,reqtogglechecked} from "@/api"
const state = {
  cartlist: []
}
const mutations = {
  CARTLIST(state, cartlist) {
    state.cartlist = cartlist
  }
}
const actions = {
  async getcartlist({ commit }) {
    let result = await reqcartlist()
    if (result.code === 200) {
      commit('CARTLIST', result.data)
    }
  },
 async getdeletecart({commit},skuId){
  let result = await reqdeletecart(skuId)
  if (result.code === 200) {
    return 'ok'
  }else{
   return Promise.reject(new Error('faile'))
  }
  } ,
 async gettogglechecked({commit},{skuId,isChecked}){
  let result = await reqtogglechecked(skuId,isChecked)
  if (result.code === 200) {
    return 'ok'
  }else{
   return Promise.reject(new Error('faile'))
  }
  } ,
  getremoveallchecked({getters,dispatch}){
     let Promiseall = []
     getters.cartlist.cartInfoList.forEach(item => {
      let Promise = item.isChecked==1?dispatch('getdeletecart',item.skuId):''
      Promiseall.push(Promise)
     });
     return Promise.all(Promiseall)

  },
  getallcartchecked({getters,dispatch},isChecked){
     let Promiseall = []
     getters.cartlist.cartInfoList.forEach(item => {
           let Promise =  dispatch('gettogglechecked',{skuId:item.skuId,isChecked})
           Promiseall.push(Promise)
     });
     return Promise.all(Promiseall)
  }
}
const getters = {
  cartlist(state) {
    return state.cartlist[0] || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}