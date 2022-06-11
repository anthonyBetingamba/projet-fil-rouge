<template>
  <div id="main">
    <div class="container register">
      <div class="onglet title_onglet">
        <div class="onglet_options">
          <div class="title">
            <div>
              <router-link to="/inscription">Créer un compte</router-link>
            </div>
          </div>
          <div class="title active">
            <div>
              <router-link to="/connexion">Connexion</router-link>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <h1 class="welcome">BIENVENUE</h1>
        <h2 class="subtitle">CONNECTEZ-VOUS AVEC...</h2>

        <div class="options three-buttons">
          <div class="social-links-container">
            <ul>
              <li class="social-register">
                <a href="#" class="social-link">
                  <div class="connect google">
                    <div class="icon"></div>
                    <div class="text"><span>Google</span></div>
                  </div>
                </a>
              </li>
              <li class="social-register">
                <a href="#" class="social-link">
                  <div class="connect apple">
                    <div class="icon"></div>
                    <div class="text"><span>Apple</span></div>
                  </div>
                </a>
              </li>
              <li class="social-register">
                <a href="#" class="social-link">
                  <div class="connect facebook">
                    <div class="icon"></div>
                    <div class="text"><span>Facebook</span></div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container">
        <p class="subtitle connect_with">
          Connectez-vous avec votre adresse e-mail pour continuer
        </p>
        <div class="form form-login">
          <form action="">
            <fieldset>
              <div>
                <div class="field">
                  <label for="email_address" id="email_label"
                    >Adresse e-mail</label
                  >
                  <div>
                    <input name="username" />
                  </div>
                  <div class="clear"></div>
                </div>
                <div class="field">
                  <label for="password" id="password_label">Mot de passe</label>
                  <div>
                    <input autocomplete="off" type="password" value="" />
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="submit">
                <input type="submit" value="connexion" />
                <div class="clear"></div>
              </div>
              <div class="forgotten-password">
                <a>Mot de passe oublié ?</a>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TemplateLogin",
};
</script>

<style scoped>
@import "../assets/style/login.css";
@import "../assets/style/footer.css";
</style>
