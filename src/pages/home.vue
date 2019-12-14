<template>
  <el-container>
    <nav-header></nav-header>
    
    <nav-footer></nav-footer>
  </el-container>
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

