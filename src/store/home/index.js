import { reqCategoryList, reqbannerlist,reqfloorlist} from "@/api"
const state = {
    categorylist:[],
    bannerlist:[],
    floorlist:[],
}
const mutations = {
    CATEGORYLIST(state,categorylist){
        state.categorylist = categorylist
    },
    BANNERLIST(state,bannerlist){
         state.bannerlist = bannerlist
    },
    FLOORLIST(state,floorlist){
         state.floorlist = floorlist
    }
}
const actions = {
   async categorylist({commit}){
       let result = await reqCategoryList()
       if(result.code === 200){
        commit('CATEGORYLIST',result.data)
       }
    },
    async getbannerlist({commit}){
      let result = await reqbannerlist()
      if(result.code === 200){
          commit('BANNERLIST',result.data)
      }
    },
    async getfloorlist({commit}){
      let result = await reqfloorlist()
      if(result.code === 200){
          commit('FLOORLIST',result.data)
      }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}