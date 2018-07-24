<template>
<el-container>
  <el-header>
      <v-header></v-header>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
  <el-footer>
      <v-footer></v-footer>
  </el-footer>
</el-container>
</template>

<script>
import VHeader from '../base/Container/Header'
import VFooter from '../base/Container/Footer'
export default {
  data () {
    return {}
  },
  components: {
    VHeader,
    VFooter
  }
}
</script>
<style>
  .el-header {
    color: #ffffff;
    text-align: center;
    height: 50px !important;
  }
  .el-footer {
    background-color: #fc8d59;
    height: 200px !important;
    width: 100%;
  }
</style>
