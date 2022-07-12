import { reqGoodsinfo,reqaddtocart } from "@/api"
import {UUIDTOKEN} from '@/utils/uuid-token'
const state = {
  getgoodinfo:{},
  uuid_token:UUIDTOKEN()
}
const mutations = {
  GETGOODINFO(state,getgoodinfo){
     state.getgoodinfo = getgoodinfo
      }
}
const actions = {
  async getgoodsinfo({commit},skuId){
    let result = await reqGoodsinfo(skuId)
    if(result.code === 200){
        commit('GETGOODINFO',result.data)
    }
},
  async getaddcart({commit},{skuId,skunum}){
    let result = await reqaddtocart(skuId,skunum)
    if (result.code === 200) {
      return 'ok'
    }else{
     return Promise.reject(new Error('faile'))
    }
    }

}
const getters = {
  categoryView(){
    return state.getgoodinfo.categoryView || {}
  },
  skuInfo(){
    return state.getgoodinfo.skuInfo || {}
  },
  spuSaleAttrList(){
    return state.getgoodinfo.spuSaleAttrList || []
  }
}
export default {
	state,
	mutations,
	actions,
	getters
}