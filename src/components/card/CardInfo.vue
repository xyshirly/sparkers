<template>
  <div class="card-info" :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }">
    <!--<div class="layer content flex-column justify-content-end">
      <p class="label title">{{ title }}</p>
      <p class="label subtitle">{{ subtitle }}</p>
    </div>
    <div class="layer shadow"></div>-->
  </div>
</template>
<script>
  export default {
    name: "CardInfo",
    props: ['item']
  }
</script>
<style lang="scss" scoped type="text/scss">
  .card-info {
    min-width: 232px;
    height: 232px;
    margin-right: 12px;
    position: relative;
    background-size: cover;
    background-position: center center;

    .layer {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }

    .shadow {
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.5)
    }
    .content {
      z-index: 20;
      padding: 0 0 20px 15px;
    }

    .label {
      font-family: SourceHanSansCN;
      font-size: 15px;
    }
    .title {
      font-weight: 500;
    }
    .subtitle {
      margin-top: 10px;
      font-weight: 400;
    }

  }
</style>