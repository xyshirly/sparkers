<template>
  <header class="flex-row">
    <div class="flex-1 logo">SPARKERS</div>

    <ul class="flex-row">
      <li v-for="menu in menus"
          :key="menu.id"
          class="flex-row align-items-center"
          :class="{'menu-active': menu.isActive}"
          @mouseover="handleMouseOver(menu)" @mouseout="handleMouseOut(menu)">{{ menu.label }}</li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        menus: [
          {id: '1', label: '首页', isActive: false},
          {id: '2', label: '关于', isActive: false},
          {id: '3', label: '案例', isActive: false},
          {id: '4', label: '联系', isActive: false}
        ]
      }
    },
    methods: {
      handleMouseOver(menu) {
        this.menus.forEach((item) => {
          if (menu.id === item.id) item.isActive = true;
        })
      },

      handleMouseOut(menu) {
        this.menus.forEach((item) => {
          if (menu.id === item.id) item.isActive = false;
        })
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  header {
    padding: 0 62px;

    .logo {
      font-family:Avenir;
      font-size: 24px;
      line-height: 49px;
      font-weight:normal;
    }

    ul {
      li {
        cursor: pointer;
        font-weight: 300;
        padding-left: 33.5px;
      }

      .menu-active {
        color: #8ED9C8;
        font-weight: 500;
      }
    }
  }
</style>