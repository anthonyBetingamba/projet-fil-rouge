<template>
  <!-- <div id="nav">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="./assets/img/logo/logo_site.png" alt="logo" />
          </router-link>
        </div>

        <ul id="icons">
          <li>
            <router-link class="hovertext" data-hover="Tous les produit" to="/tous-les-produits">
              <i class="fas fa-shop"></i>
            </router-link>
          </li>
          <li>
            <router-link class="hovertext" data-hover="Wish List" to="/wish-list">
              <i class="fas fa-heart"></i>
              <span id="nav-not"></span>
            </router-link>
          </li>
          <li>
            <router-link class="hovertext" data-hover="Mon compte" to="/compte">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link class="hovertext" data-hover="Panier" to="/panier">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div> -->
  <AppHeader />
  <router-view />
</template>


<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "app",
  components: {
    AppHeader,
  }
};
</script>

<style>
  /* @import './assets/style/app.css'; */
</style>
