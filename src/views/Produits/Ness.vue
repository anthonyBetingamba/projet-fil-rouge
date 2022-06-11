<template>
  <TemplateFicheProduit />
</template>

<script>
// @ is an alias to /src
import TemplateFicheProduit from "@/components/TemplateFicheProduit.vue";

export default {
  name: "Ness",
  components: {
    TemplateFicheProduit,
  },
  data: () => {
    return {
      productName: "Ness",
      // productImage: require("@/assets/img/produits/fiche-produit/audrey.jpeg"),
      productPrice: 10.99,
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
