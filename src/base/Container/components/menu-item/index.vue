<template>
  <el-menu-item :index="menu.path">
    <span slot="title">{{menu.title}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'menu-item',
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang='stylus' scoped>
.el-menu--horizontal>.el-menu-item
  height: 50px
  line-height 50px
  font-size 16px
  width 80px
  color #000000
  border-bottom none
  &:hover
    background-color #fc8d59
    color #ffffff
  &.is-active
    background-color #fc8d59
    color #ffffff
    border-bottom none
</style>
