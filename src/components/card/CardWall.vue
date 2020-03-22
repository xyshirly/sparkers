<template>
  <div class="card-wall flex-row align-items-center justify-content-center"
       :class="{'card-wall-focused': item.focused}"
       :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }">
    <label>{{ item.label }}</label>
  </div>
</template>

<script>
  export default {
    name: "CardWall",
    props: ['item'],
  }
</script>

<style scoped lang="scss" type="text/scss">
  .card-wall {
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    background-position: center center;
    font-size: 24px;
    font-family: $font-family-zh;
    font-weight: 300;
  }
  .card-wall:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 300ms ease-in-out;
  }
  .card-wall:hover {
    transform: scale(1.2);
    transition: all 300ms cubic-bezier(0,.17,.01,.99);
  }
  .card-wall:hover::before {
    background: transparent;
  }
  .card-wall:hover label {
    opacity: 0;
    animation: show 300ms ease-in-out;
    animation-direction: reverse;
  }
</style>
