<template>

  <el-row :gutter="0" class="m-header">
    <el-col :span="5">
      <Geo></Geo>
    </el-col>
    <el-col :span="5">
      <User></User>
    </el-col>
    <el-col :span="14">
      <navbar></navbar>
    </el-col>

  </el-row>

</template>1

<script>
  import  Geo from './geo'
  import User from './user'
  import navbar from './NavBar'
  export default {
    name: "index",
    components:{
      Geo,User,navbar
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/public/layout.scss";

  @import "@/assets/css/public/header/index.scss";


</style>
