<template>
  <div>
    <el-header>
        <nav-header></nav-header>
      </el-header>
      <el-container>
        <nav-footer></nav-footer>
      </el-container>
  </div>
</template>

<script>
import NavHeader from './../components/Header'
import NavFooter from './../components/Footer'

export default {
  name: 'hdn-home',
  props: {},
  components:{
    NavHeader,
    NavFooter
  }
}
</script>

