
import requests from "./request";
import mockrequest from "./mockajax";
export const reqCategoryList = () =>
  requests({
    url: 'product/getBaseCategoryList',
    method: 'get',

  })
export const reqbannerlist = () =>
  mockrequest({
    url: '/banner',
    method: 'get',

  })
export const reqfloorlist = () =>
  mockrequest({
    url: '/floor',
    method: 'get',

  })
export const reqsearchlist = (params) =>
  requests({
    url: '/list',
    method: 'post',
    data: params

  })
export const reqGoodsinfo = (skuId) =>
  requests({
    url: `/item/${ skuId }`,
    method: 'get',
 
  })
export const reqaddtocart = (skuId,skunum) =>
  requests({
    url: `cart/addToCart/${ skuId }/${ skunum }`,
    method: 'post',
 
  })
export const reqcartlist = ()=>
  requests({
    url: 'cart/cartList',
    method: 'get',
 
  })
export const reqdeletecart= (skuId)=>
  requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete',
 
  })
export const reqtogglechecked= (skuId,isChecked)=>
  requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get',
 
  })
export const reqsendcode= (phone)=>
  requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get',
 
  })
  export const requsers = (data)=>
  requests({
    url:'/user/passport/register',
    method:'post',
    data
  })
  export const requserlogin = (data)=>
  requests({
    url:'/user/passport/login',
    method:'post',
    data
  })
  export const requserinfo = ()=>
  requests({
    url:'user/passport/auth/getUserInfo',
    method:'get',
  })
  export const reqlogout = ()=>
  requests({
    url:'/user/passport/logout',
    method:'get',
  })
  export const reqtrade = ()=>
  requests({
    url:'/order/auth/trade',
    method:'get',
  })
  export const requseradd = ()=>
  requests({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get',
  })
  export const reqdingdantrade = (tradeNo,data)=>
  requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data
  })
  export const reqcreateNative = (orderId)=>
  requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get',
  })
  export const reqPayStatus = (orderId)=>
  requests({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get',
  })
  export const reqsuthorder = (page,limit)=>
  requests({
    url:`/order/auth/${page}/${limit}`,
    method:'get',
  })