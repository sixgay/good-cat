<template>
  <el-menu mode="horizontal" @select="handleMenuSelect">
    <template v-for="(menu, menuIndex) in menus">
      <menu-item  :index="menuIndex" :menu="menu" :key="menuIndex"/>
      <!-- <d2-layout-main-menu-sub v-else :menu="menu" :key="menuIndex"/> -->
    </template>
  </el-menu>
</template>

<script>
import menus from '../../../../menu/index.js'
import MenuItem from '../menu-item'
export default {
  name: 'menu-header',
  data () {
    return {
      menus
    }
  },
  components: {
    MenuItem
  },
  methods: {
    handleMenuSelect (index, indexPath) {
      if (/^menu-empty-\d+$/.test(index)) {
        this.$message('功能正在开发')
      } else {
        this.$router.push(index)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-menu--horizontal
  border-bottom: none
  float left
</style>
