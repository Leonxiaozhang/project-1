import { requserlogin ,requserinfo,reqlogout} from "@/api"
const state = {
  token:localStorage.getItem('token'),
  userinfo:{}
}
const mutations = {
  GETLOGIN(state,token){
    state.token = token
  },
  GETUSERINFO(state,userinfo){
 state.userinfo = userinfo
  },
  CLEAR(){
    state.token = '',
    state.userinfo = {},
    localStorage.removeItem('token')
  }
}
const actions = {
 async getuserlogin({commit},data){
      let result = await requserlogin(data)
     if(result.code==200){
      localStorage.setItem('token',result.data.token)
          commit('GETLOGIN',result.data.token)
          return 'ok'
     }else{
      return Promise.reject(new Error('faile'))
     }
  },
   async getuserinfo({commit}){
    let result = await requserinfo()
    if(result.code==200){
      
      commit('GETUSERINFO',result.data)
    }
   },
   async getlogout({commit}){
            let result = await reqlogout()
            if(result.code == 200){
              commit('CLEAR')
              return 'ok'
            }else{
              return Promise.reject(new Error('faile'))
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