<template>
  <div>
    <div class="main">
      <div>
        <div>
          <div class="col_header col_left">
            <div class="identity">
              <div>
                <div>
                  <div class="div_identity">
                    <div class="name_identity">
                      <div><span>Bonjour,</span></div>
                      <div class="name"><span>Anthony Betingamba</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav>
              <ul class="nav_left">
                <li class="nav_item">
                  <router-link to="/commandes" class="nav-tem nav-link active">
                    <div class="icon_nav">
                      <div>
                        <img src="@/assets/img/svg/logo-commandes.svg" alt="" />
                      </div>
                    </div>
                    <div><span>Mes commandes</span></div>
                  </router-link>
                </li>
              </ul>
              <ul class="nav_left">
                <li class="nav_item">
                  <router-link to="/compte" class="nav-tem nav-link active">
                    <div class="icon_nav">
                      <div>
                        <img src="@/assets/img/svg/logo-profil.svg" alt="" />
                      </div>
                    </div>
                    <div><span>Mes informations</span></div>
                  </router-link>
                </li>
                <li class="nav_item">
                  <router-link to="/adresse" class="nav-tem nav-link active">
                    <div class="icon_nav">
                      <div>
                        <img src="@/assets/img/svg/logo-maison.svg" alt="" />
                      </div>
                    </div>
                    <div><span>Carnet d'adresses</span></div>
                  </router-link>
                </li>
              </ul>
              <ul class="nav_left">
                <li class="nav_item">
                  <router-link to="/connexion" class="nav-tem nav-link active">
                    <div class="icon_nav">
                      <div>
                        <img
                          src="@/assets/img/svg/logo-deconnexion.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div><span>Déconnexion</span></div>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col_header col_title">
            <main role="main">
              <div>
                <div>
                  <div class="col_right_title">
                    <span
                      ><span
                        ><img
                          src="@/assets/img/svg/logo-maison.svg"
                          alt="" /></span
                    ></span>
                    <h1><span class="title_page">Carnet d'adresses</span></h1>
                  </div>
                </div>
              </div>
              <div>
                <form action="">
                  <div>
                    <div class="form_conatiner">
                      <div class="form">
                        <div>
                          <label class="label_form">
                            <span class="label_form_span">Adresse :</span>
                            <span>
                              <span class="span_input">
                                <input
                                  name="adresse"
                                  class="input"
                                  type="text"
                                />
                              </span>
                            </span>
                          </label>
                        </div>
                        <div>
                          <label class="label_form margin_label"
                            ><span class="label_form_span"
                              >Ville :</span
                            >
                            <span>
                              <span class="span_input">
                                <input
                                  name="ville"
                                  class="input"
                                  type="text"
                                />
                              </span>
                            </span>
                          </label>
                        </div>
                        <div>
                          <label class="label_form margin_label">
                            <span class="label_form_span"
                              >Code postal:</span
                            >
                            <span>
                              <span class="span_input">
                                <input
                                  name="zip"
                                  class="input"
                                  type="text"
                                  value=" "
                                />
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="btn_save">
                        <div>
                          <div>
                            <button
                              type="submit"
                              class="button"
                              disabled=""
                              role="button"
                            >
                              <span>Sauvegarder l'adresse</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TemplateAdresse",
};
</script>

<style scoped>
@import "../assets/style/style_compte.css";
@import "../assets/style/footer.css";
</style>
