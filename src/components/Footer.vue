<template>
  <div class="footer">
    <div class="container">
      <div class="footer-container">
        <div class="footer-logo">
        <img src="../assets/images/butterfly.png" alt="" />
      </div>
      <div class="footer-options">
        <div class="primary-menu">
          <div class="primary-menu-list">
            <router-link to="/home" class="menu-item">HOME</router-link>
            <router-link to="/about" class="menu-item">ABOUT</router-link>
            <router-link to="/feature" class="menu-item">FEATURE</router-link>
            <router-link to="/service" class="menu-item">SERVICE</router-link>
            <router-link to="/contact" class="menu-item">CONTACT</router-link>
          </div>
        </div>
      </div>
      <div class="footer-socials">
        <a href="">
          <i class="ti-facebook"></i>
        </a>
        <a href="">
          <i class="ti-twitter"></i>
        </a>
        <a href="">
          <i class="ti-vimeo-alt"></i>
        </a>
        <a href="">
          <i class="ti-instagram"></i>
        </a>
        
        
        
        
      </div>
      <div class="footer-copyright">
        <span
          >©COPYRIGHT 2019 
          <a href="https://themeies.com">themeies.com.</a>
          ALL RIGHTS RESERVED.
        </span>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
    font-family: 'Roboto';
    background-color: var(--footer-bg-color);
    padding: 8rem 0 6rem;
}
.footer-container {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.primary-menu {
  display: flex;
  align-items: flex-end;
  font-size: 1.4rem;
  font-family: var(--header-font) !important;
  font-weight: 600;
  width: 100%;
  margin: 30px 0;
}
.menu-item:not(:last-child) {
  
  margin-right: 4.5rem;
}
.menu-item {
  color: var(--header-text-color);
}
.menu-item:hover {
  color: var(--primary-color);
}
.footer-socials {
    margin-bottom: 30px;
}
.footer-socials i {
  font-size: 1.4rem;
  padding: 0 1rem;
}
.footer-socials a {
  color: var(--btn-appointment-color);
}
.footer-socials a:hover { 
  color: var(--primary-color);
}
.footer-socials a:not(:last-child) {
  border-right: 1px solid var(--border-color);
}
.footer-copyright {
    font-size: 1.3rem;
    color: var(--sub-text-color);
}
.footer-copyright span a {
    font-size: 1.3rem;
    color: var(--primary-color);
    text-transform: uppercase;
}
</style>
