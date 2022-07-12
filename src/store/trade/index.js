import { reqtrade ,requseradd} from "@/api"
const state = {
	tradeinfo:{},
  usersddlist:[]
}
const mutations = {
  GETTRADE(state,tradeinfo){
   state.tradeinfo = tradeinfo
  },
  GETADDLIST(state,usersddlist){
   state.usersddlist = usersddlist
  }
}
const actions = {
	async gettrade({commit}){
      let result = await reqtrade()
      if(result.code == 200){
        commit('GETTRADE',result.data)
      }
   },
	async getuseradd({commit}){
      let result = await requseradd()
      if(result.code == 200){
        commit('GETADDLIST',result.data)
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