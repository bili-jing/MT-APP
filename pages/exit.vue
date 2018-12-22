<template>
  <div class="shabi">
    vuessr exit

  </div>
</template>

<script>
  export default {
    name: "exit",
    layout: 'blank',
    //用中间件，到达这个页面，用中间奸自动去执行，，来触发获取页面的接口
    middleware: async (ctx) => {


      let {status, data} = await ctx.$axios.get('/users/exit')

      if (status === 200 && data && data.code === 0) {
        window.location.href = '/'
      }
    }

  }
</script>

<style scoped>

</style>
