<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <topBar></topBar>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <searchBar></searchBar>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import topBar from './topBar'
  import searchBar from './searchBar'

  export default {
    name: "index",
    components: {
      topBar,
      searchBar
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/public/header/index.scss";
</style>
