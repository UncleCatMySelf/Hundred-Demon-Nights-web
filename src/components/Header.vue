<template>
  <el-row :gutter="10">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple">

      </div></el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"><div class="grid-content bg-purple-light">
          <el-row>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">logo</el-col>
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">列表</el-col>
          </el-row>
        </div></el-col>
      <el-col :xs="4" :sm="4" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
        
        </div></el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple-light">
        
        </div></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'v-header',
  props: {}
}
</script>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>