import {reqsearchlist} from '@/api'
const state = {
    searchlist :{}
}
const mutations = {
    SEARCHLIST(state,searchlist){
       state.searchlist = searchlist
    }
}
const actions = {
    async getsearchlist({commit},params = {}){
        let result = await reqsearchlist(params)
        if(result.code === 200){
            commit('SEARCHLIST',result.data)
        }
    }
}
const getters = {
    attrsList(){
        return state.searchlist.attrsList || []
    },
    goodsList(){
        return state.searchlist.goodsList || []
    },
    trademarkList(){
        return state.searchlist.trademarkList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}