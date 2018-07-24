<template>
    <div class="header">
        <div class="logo-group">
            <div class="logo-icon">
                <img src="../../../static/images/1638780962.png" alt="公益猫">
                <h4 id="logo">公益猫</h4>
            </div>
            <div class="logo-title">
                <p>公益猫</p>
                <p>每一只猫猫都值得被爱 为ta寻找港湾</p>
            </div>
        </div>
        <menu-header></menu-header>
        <div v-if="hasCookie" class="no-login">
            <div class="login-btn">登录</div>
            <div class="register-btn">注册</div>
        </div>
        <div v-else class="is-login">
            <img src="../../../static/images/1119774901.png" alt="用户头像" class="user-icon">
            <span class="user-name">Susie</span>
            <img src="../../../static/images/message.png" alt="">
        </div>
    </div>
</template>

<script>
import MenuHeader from './components/menu-header'
export default {
  data () {
    return {
      hasCookie: false
    }
  },
  components: {
    MenuHeader
  }
}
</script>
<style lang="stylus" scoped>
.header
    width 1280px
    margin 0 auto
    .logo-group
        color #fc8d59
        float left
        display flex
        justify-content flex-start
        width 287px
        .logo-icon
            img
                width 50px
                height 50px
                border-radius 50%
                background-color #fc8d59
            h4
                z-index 999
                position absolute
                left -9999px
                overflow hidden
        .logo-title
            height 50px
            display flex
            padding-left 10px
            flex-flow column nowrap
            justify-content space-around
            align-items flex-start
            font-size 12px
            p:nth-child(1)
                font-size 20px
    .no-login
        float right
        >div
            width 50px
            height 30px
            background-color #fc8d59
            border-radius 10px
            float left
            line-height 30px
            margin-top 10px
            margin-left 20px
            font-size 14px
    .is-login
        color #000000
        line-height 50px
        img
            margin-top 10px
            width 30px
            height 30px
            border-radius 50%
        span
            vertical-align top
</style>
