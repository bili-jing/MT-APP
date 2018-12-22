<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <iselect></iselect>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">

        <hot></hot>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <categroy></categroy>
      </el-col>
    </el-row>
  </div>


</template>

<script>
  import iselect from '@/components/changeCity/iselect'
  import hot from '@/components/changeCity/hot'
  import categroy from '@/components/changeCity/categroy'

  export default {
    name: "changeCity"
    , components: {
      iselect, hot, categroy
    }
  }
</script>

<style lang="css">

</style>
