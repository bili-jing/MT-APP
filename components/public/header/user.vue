<template>
  <div class="m-user">
    <!--数据结构设计内容-->
    <template v-if="user">
      欢迎您 , <span class="username">{{user}}</span>
      <nuxt-link to="/exit">退出</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">立即登录</nuxt-link>
      <nuxt-link to="/register" class="register">注册</nuxt-link>

    </template>
  </div>

</template>
<!--先把静态页面搭建起来-->
<script>
  export default {
    name: "user",
    data() {
      return {
        user: ''
      }
    }
  //  用户名如何获取？发送请求呗日尼玛什么时候去请求接口，一个是vuex页面渲染完成后拿
  //  首屏渲染的时候，异步获取信息
  // 当然用vuex也可以获取
  //  mounted这个异步数据
    ,
    //一步操作解雇复制
    async mounted(){
      const {status,data:{user}} =await  this.$axios.get('/users/getUser')
        if (status===200){
        this.user=user;
        }

    }
  }
</script>

<style >

</style>
