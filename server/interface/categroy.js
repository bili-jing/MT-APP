import Router from 'koa-router';
import axios from './utils/axios'

let router = new Router({prefix: '/categroy'})



router.get('/crumbs',async (ctx)=>{

  // let result = await Categroy.findOne({city: ctx.query.city.replace('市', '') || '北京'})
  // if (result) {
  //   ctx.body = {
  //     areas: result.areas,
  //     types: result.types
  //   }
  // } else {
  //   ctx.body = {
  //     areas: [],
  //     types: []
  //   }
  // }

  //

  // http://cp-tools.cn/categroy/crumbs?sign=d8402a2d5ad7e02e80108270d71831cc

  let {status,data:{areas,types}} = await axios.get(`http://cp-tools.cn/categroy/crumbs?sign=d8402a2d5ad7e02e80108270d71831cc`,{
    params:{
      city:ctx.query.city.replace('市','') || "北京"
    }
  })
  ctx.body={
    areas: status===200?areas:[],
    types: status===200?types:[]
  }
})


export default router;
