import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/tous-les-produits",
    name: "TousLesProduits",
    component: () => import("../views/TousLesProduits.vue"),
  },
  {
    path: "/wish-list",
    name: "WishList",
    component: () => import("../views/WishList.vue"),
  },
  {
    path: "/compte",
    name: "Compte",
    component: () => import("../views/Compte.vue"),
  },
  {
    path: "/panier",
    name: "Panier",
    component: () => import("../views/Panier.vue"),
  },
  {
    path: "/fiche-produit/",
    name: "Fiche Produit",
    component: () => import("../views/FicheProduit.vue"),
  },
  {
    path: "/audrey/",
    name: "Audrey",
    component: () => import("../views/Produits/Audrey.vue"),
  },
  {
    path: "/emilie/",
    name: "Emilie",
    component: () => import("../views/Produits/Emilie.vue"),
  },
  {
    path: "/eva/",
    name: "Eva",
    component: () => import("../views/Produits/Eva.vue"),
  },
  {
    path: "/julie/",
    name: "Julie",
    component: () => import("../views/Produits/Julie.vue"),
  },
  {
    path: "/marie/",
    name: "Marie",
    component: () => import("../views/Produits/Marie.vue"),
  },
  {
    path: "/melina/",
    name: "Mélina",
    component: () => import("../views/Produits/Melina.vue"),
  },
  {
    path: "/melissa/",
    name: "Mélissa",
    component: () => import("../views/Produits/Melissa.vue"),
  },
  {
    path: "/ness/",
    name: "Ness",
    component: () => import("../views/Produits/Ness.vue"),
  },
  {
    path: "/sese/",
    name: "Sese",
    component: () => import("../views/Produits/Sese.vue"),
  },
  {
    path: "/ornella/",
    name: "Ornella",
    component: () => import("../views/Produits/Ornella.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


