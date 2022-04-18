<template>
  <!-- <div id="nav">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="@/assets/img/logo/logo_site.png" alt="logo" />
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
            <div class="cart">
              <p><i class="fas fa-shopping-cart"></i>{{ cart }}</p>
            </div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view /> -->
  <div class="fiche-produit">
    <div class="container">
      <div class="product">
        <div class="image">
          <!-- <img :src="productImage"> -->
          <img src="@/assets/img/produits/fiche-produit/marie.jpeg" />
        </div>
        <div class="content">
          <h1>{{ productName }}</h1>
          <div class="stockInfo">
            <span class="green" v-if="disponible">En stock</span>
            <span class="amber" v-else-if="disponible <= 10 && disponible > 0"
              >Stock limité</span
            >
            <span class="red" v-else>En rupture de stock</span>
          </div>
          <ul class="description">
            <li v-for="(detail, index) in description" :key="index">
              {{ detail }}
            </li>
          </ul>
          <div class="shipping">Livraison : gratuite</div>
          <div class="addCart">
            <button v-on:clik="addToCart">Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
    <TemplateFicheProduit />
  </div>

  
</template>

<script>
// @ is an alias to /src
import TemplateFicheProduit from "@/components/TemplateFicheProduit.vue";

export default {
  name: "Marie",
  components: {
    TemplateFicheProduit,
  },
  data: () => {
    return {
      productName: "Marie",
      // productImage: require("@/assets/img/produits/fiche-produit/audrey.jpeg"),
      productPrice: 9.99,
      disponible: 100,
      description: ["description", "description"],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart = this.cart + 1;
    },
  },
};
</script>

<style scoped>
.fiche-produit {
  margin-top: 6%;
  height: 60vh;
}
</style>
