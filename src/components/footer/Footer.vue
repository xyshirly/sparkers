<template>
  <footer class="flex-row">
    <p class="qr-code">
      <img src="@/assets/img/qr-code.png" width="169.5px" height="169.5px">
    </p>
    <p class="qr-code">
      <img src="@/assets/img/qr-code.png" width="169.5px" height="169.5px">
    </p>
    <div class="info-container">
      <p class="label label-1">地址</p>
      <p class="label label-1">广州市天河区中山大道中439号<br/>天银大厦26楼</p>
      <p class="label label-1">+86 13923881710</p>
      <p class="label label-1">Bella.hu@sparkers.net</p>
      <p class="facebook">
        <img src="@/assets/img/icon-facebook.png" widht="38px" height="38px">
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss" type="text/scss">
  footer {
    margin-top: 32px;
    padding-left: 121.5px;

    .qr-code:first-child {
      margin-right: 13.5px;
    }

    .info-container {
      margin-left: 15px;
    }

    .label-1 {
      font-family: Adobe Heiti Std;
      font-size: 10px;
      margin-bottom: 12px;
    }

    .label-2 {
      font-size:12px;
      font-family:SourceHanSansCN;
      font-weight:400;
      line-height:16px;
    }

    .label-3, .label-4 {
      font-size:12px;
      font-family:Avenir;
      font-weight:400;
      line-height:16px;
    }

    .label-3 {
      margin-top: 21px;
    }
    .label-4 {
      margin-top: 10px;
    }
    .facebook {
      margin-top: 30px;
    }
  }
</style>