<template>
  <div class="label-gap flex-row">
    <div class="flex-column justify-content-end label">{{ label }}</div>
    <div :style="{width: `${line_width}px`}">
      <p class="line"></p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "LabelGap",
    props: ['label', 'line_width']
  }
</script>
<style lang="scss" scoped type="text/scss">
  .label-gap {
    padding-left: 62px;

    .label {
      font-size: 24px;
      font-family: $font-family-en;
      font-weight: 900;
      margin-right: 10px;
    }

    .line {
      margin-top: 20px;
      border-bottom: 4px solid #fff;
    }
  }
</style>