<template>
  <div class="header">
    <div class="container">
      <div class="header-container">
        <div class="logo">
          <router-link to="/home" class="menu-img">
            <img src="../assets/images/logo.png" alt="" />
          </router-link>
        </div>
        <div class="primary-menu">
          <ul class="primary-menu-list">
            <router-link to="/home" class="menu-item">HOME</router-link>
            <router-link to="/about" class="menu-item">ABOUT</router-link>
            <router-link to="/feature" class="menu-item">FEATURE</router-link>
            <router-link to="/service" class="menu-item">SERVICE</router-link>
            <router-link to="/contact" class="menu-item">CONTACT</router-link>
          </ul>
        </div>
        <div class="mobile-menu hide-on-pc">
          <div @click="ShowMenuBar" class="mobile-menu-icon">
            <i class="ti-menu"></i>
          </div>
          <ul class="mobile-menu-list" v-if="ShowMenu">
            <router-link to="/home" class="menu-item item-moblie"
              >HOME</router-link
            >
            <router-link to="/about" class="menu-item item-moblie"
              >ABOUT</router-link
            >
            <router-link to="/feature" class="menu-item item-moblie"
              >FEATURE</router-link
            >
            <router-link to="/service" class="menu-item item-moblie"
              >SERVICE</router-link
            >
            <router-link to="/contact" class="menu-item item-moblie"
              >CONTACT</router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ShowMenu: false,
    };
  },
  methods: {
    ShowMenuBar() {
      this.ShowMenu = !this.ShowMenu;
    },
  },
};
</script>
<style scoped>
.header {
  z-index: 1 !important;
}
.header-container {
  display: flex;
  align-items: flex-end;
  font-size: 1.4rem;
  font-family: var(--header-font) !important;
  font-weight: 600;
  width: 100%;
}
.logo {
  flex: 0 0 25%;
  max-width: 25%;
  line-height: 0;
}
.primary-menu {
  padding: 0 1.5rem;
  flex: 0 0 75%;
  max-width: 75%;
}
.menu-item {
  color: var(--header-text-color);
  margin-right: 45px;
}
.menu-item:hover {
  color: var(--primary-color);
}

.router-link-active {
  color: var(--primary-color);
}
</style>
