<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Accueil</router-link>
          <router-link class="nav-item nav-link" to="/tous-les-produits">Produits</router-link>
          <router-link class="nav-item nav-link" to="/compte">Compte</router-link>
        </div>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{ cartItemCount }} Panier</button>
            <div @click="$event.stopPropagation()">
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
  }
};
</script>

<style>
.btn:not(.btn--inverse):not(.btn--inline), .spr-button-primary, .spr-summary-actions-newreview {
    font-family: "Inter";
    font-weight: 700;
    font-size: calc(10px - 4px) !important;
    letter-spacing: 0.094rem;
    padding: 11px 35px;
    position: relative !important;
    overflow: hidden !important;
    z-index: 2;
    border-color: #d6ceb5;
    background-color: #d6ceb5;
    color: #262626;
    display: inline-flex;
    justify-content: center !important;
    align-items: center;
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}

.btn {
  line-height: 1.42;
    text-decoration: none;
    text-align: center;
    white-space: normal;
    text-transform: uppercase;
    margin: 0;
    min-width: 90px;
    user-select: none;
    border-radius: 50px;
    background: #d6ceb5;
}
</style>