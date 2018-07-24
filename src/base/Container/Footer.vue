<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <img src="../../../static/images/1119774901.png" alt="logo">
      </div>
      <div class="footer-info">
        <p class="footer-link">联系我们CONTANT</p>
        <p class="footer-email">XXXXXX@XX.com</p>
        <p class="footer-qq">QQ:XXXXXXXXXX</p>
      </div>
      <div class="footer-wx-link">
        <p class="footer-wx-title">微信公众号</p>
        <img src="../../../static/images/1192470880.png" alt="微信公众号">
        <p class="footer-wx-tip">扫一扫,我们一起来养猫</p>
      </div>
    </div>
    <div class="footer-copyright">Copyright @ 2018-2018 公益猫 版权所有.</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
.footer {
  width: 950px;
  height: 200px;
  margin: 0 auto;
  background-color: #fc8d59;
  color: #ffffff;

  .footer-container {
    display: flex;
    justify-content: space-between;
    height: 180px;
    padding-top: 20px;
    box-sizing: border-box;

    .footer-logo {
      width: 150px;
      height: 150px;

      img {
        width: 100%;
      }
    }

    .footer-info {
      width: 398px;
      padding-left: 55px;
      border-right: 2px solid #cccccc;
      border-left: 2px solid #cccccc;
      color: #ffffff;
      font-family: pingFang-SC-Regula;
      font-size: 14px;
      line-height: 24px;

      .footer-link {
        margin-bottom: 7px;
      }
    }

    .footer-wx-link {
      text-align: center;
      line-height: 16px;

      img {
        margin-top: 5px;
        width: 130px;
      }

      .footer-wx-tip {
        font-size: 12px;
      }
    }
  }

  .footer-copyright {
    text-align: center;
    font-size: 12px;
  }
}
</style>
