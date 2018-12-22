import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo, home
  },
  actions: {
    async nuxtServerInit({commit}, {req, app}) {

      //  请求接口app实例
      const {status, data: {province, city}} = await app.$axios.get('/geo/getPosition')
      console.log(province,city);
      //  他妈的在后台进行打印了，说明这是后台做的一次请求接口看到没
      //这个检查其实本质上是对客户端进行检查，而上面那个是服务端进行的一个检查
      commit('geo/setPosition', status === 200 ? {city, province} : {city: '', province: ''})

      const {status: status2, data: {menu}} = await app.$axios.get('geo/menu');
      commit('home/setMenu', status2 === 200 ? menu : [])


      const {status:status3,data:{result}}=await app.$axios.get('/search/hotPlace',{
        params:{
          city:app.store.state.geo.position.city.replace('市','')
       // city:'三亚'
        }
      })
      commit('home/setHotPlace',status3===200?result:[])
      console.log(result);
    }
  }
})


export default store
