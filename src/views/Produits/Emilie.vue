<template>
  <TemplateFicheProduit />
</template>

<script>
// @ is an alias to /src
import TemplateFicheProduit from "@/components/TemplateFicheProduit.vue";

export default {
  name: "Emilie",
  components: {
    TemplateFicheProduit,
  },
  data: () => {
    return {
      productName: "Emilie",
      // productImage: require("@/assets/img/produits/fiche-produit/audrey.jpeg"),
      productPrice: 7.99,
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
