import { reqsendcode,requsers } from "@/api"
const state = {
	code:''
}
const mutations = {
	GETCODE(state,code){
   state.code = code
	}
}
const actions = {
	async getcode({commit},phone){
       let result = await reqsendcode(phone)
			if(result.code ===200){
				commit('GETCODE',result.data)
				return 'ok'
			}else{
				Promise.reject(new Error('faile'))
			}
	},
    async getuser({commit},data){
           let result = await  requsers(data)
					if(result.code===200){
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