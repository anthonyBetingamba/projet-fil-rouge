<template>
  <div class="home-container">
    <h1 class="h1">Tous les produits</h1>

    <!-- search display -->
    <input
      v-model="searchKey"
      type="search"
      id="search"
      placeholder="Rechercher..."
      autocomplete="off"
    />
    <span v-if="searchKey && filteredList.length >= 1"
      >{{ filteredList.length }} résultat<span v-if="filteredList.length >= 2"
        >s</span
      >
    </span>

    <!-- cards display -->
    <div class="card-cart-container">
      <div class="card-container">
        <div v-for="product in filteredList" :key="product.id" class="card">
          <router-link :to="product.path">
            <div class="img-container">
              <img v-bind:src="product.img" />
            </div>
          </router-link>
          <div class="card-text">
            <h3>{{ product.description }}</h3>
            <span>{{ product.price }}€</span>
          </div>

          <div class="card-icons">
            <div class="like-container">
              <input
                type="checkbox"
                :value="product.id"
                name="checkbox"
                v-bind:id="product.id"
                v-model="liked"
                @click="setLikeCookie()"
              />
              <label v-bind:for="product.id">
                <i class="fas fa-heart"></i>
              </label>
            </div>

            <div class="add-to-cart">
              <button v-on:click="addToCart(product)">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- no result message -->
        <div v-if="filteredList.length == []" class="no-result">
          <h3>Désolé</h3>
          <p>Aucun résultat trouvé</p>
        </div>
      </div>

      <!-- cart display -->
      <transition name="cart-anim">
        <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
          <h2>Panier</h2>

          <transition-group name="item-anim" tag="div" class="item-group">
            <div
              v-for="(product, id) in cart"
              class="item"
              v-bind:key="product.id"
            >
              <div class="img-container">
                <img v-bind:src="product.img" />
              </div>

              <div class="item-description">
                <h4>{{ product.description }}</h4>
                <p>{{ product.price }}€</p>
              </div>

              <div class="item-quantity">
                <h6>quantité : {{ product.quantity }}</h6>

                <div class="cart-icons">
                  <button v-on:click="cartPlusOne(product)">
                    <i class="fa fa-plus"></i>
                  </button>
                  <button v-on:click="cartMinusOne(product, id)">
                    <i class="fa fa-minus"></i>
                  </button>
                  <button @click="cartRemoveItem(id)">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </transition-group>

          <div class="grand-total">
            <div class="total">
              <h2>Total</h2>
              <h2>{{ cartTotalAmount }} €</h2>
            </div>
            <h6>Total articles : {{ itemTotalAmount }}</h6>
          </div>
          <div class="order-button">
            <button>Commander</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// data
const products = [
  {
    id: 1,
    description: "Audrey",
    price: 7.99,
    img: require("../assets/img/produits//mini/audrey.jpeg"),
    path: "/audrey/",
  },
  {
    id: 2,
    description: "Emilie",
    price: 7.99,
    img: require("../assets/img/produits/mini/emilie.jpeg"),
    path: "/emilie/",
  },
  {
    id: 3,
    description: "Eva",
    price: 10.99,
    img: require("../assets/img/produits/mini//eva.jpeg"),
    path: "/eva/",
  },
  {
    id: 4,
    description: "Julie",
    price: 10.99,
    img: require("../assets/img/produits/mini/julie.jpeg"),
    path: "/julie/",
  },
  {
    id: 5,
    description: "Marie",
    price: 9.99,
    img: require("../assets/img/produits/mini/marie.jpeg"),
    path: "/marie/",
  },
  {
    id: 6,
    description: "Mélina",
    price: 7.99,
    img: require("../assets/img/produits/mini/melina.jpeg"),
    path: "/melina/",
  },
  {
    id: 7,
    description: "Mélissa",
    price: 10.99,
    img: require("../assets/img/produits/mini/melissa.jpeg"),
    path: "/melissa/",
  },
  {
    id: 8,
    description: "Ness",
    price: 10.99,
    img: require("../assets/img/produits/mini/ness.jpeg"),
    path: "/ness/",
  },
  {
    id: 9,
    description: "Ornella",
    price: 8.99,
    img: require("../assets/img/produits/mini/ornella.jpeg"),
    path: "/ornella/",
  },
  {
    id: 10,
    description: "Sese",
    price: 7.99,
    img: require("../assets/img/produits/mini/sese.jpeg"),
    path: "/sese/",
  },
];

export default {
  name: "TemplateProduits",
  data: () => {
    return {
      products,
      searchKey: "",
      liked: [],
      cart: [],
    };
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    // getLikeCookie() {
    //   let cookieValue = JSON.parse($cookies.get("like"));
    //   cookieValue == null ? (this.liked = []) : (this.liked = cookieValue);
    // },
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].quantity * this.cart[item].price;
      }
      return total.toFixed(2);
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + this.cart[item].quantity;
      }
      return itemTotal;
    },
  },
  methods: {
    // /*     setLikeCookie() {
    //       document.addEventListener("input", () => {
    //         setTimeout(() => {
    //           Window.cookies.set("like", JSON.stringify(this.liked));
    //         }, 300);
    //       });
    //     }, */
    addToCart(product) {
      // check if already in array
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++;
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1,
      });
    },
    cartPlusOne(product) {
      product.quantity = product.quantity + 1;
    },
    cartMinusOne(product, id) {
      if (product.quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    cartRemoveItem(id) {
      this.cart.splice(id, 1);
    },
  },
  // mounted: {
  //   // this.getLikeCookie;
  // },
};
</script>
