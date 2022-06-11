<template>
  <div id="main">
    <div class="container register">
      <div class="onglet title_onglet">
        <div class="onglet_options">
          <div class="title active">
            <div>
              <router-link to="/inscription">Créer un compte</router-link>
            </div>
          </div>
          <div class="title">
            <div>
              <router-link to="/connexion">Connexion</router-link>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <h1 class="welcome">BIENVENUE</h1>
        <h2 class="subtitle">INSCRIVEZ-VOUS AVEC...</h2>

        <div class="options three-buttons">
          <div class="social-links-container">
            <ul>
              <li class="social-register">
                <a href="#" class="social-link">
                  <div class="connect google">
                    <div class="icon">
                      <!-- <img src="@/assets/img/svg/google.svg" alt="" /> -->
                    </div>
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

      <div class="form form-register">
        <h2 class="title_form_email">
          Ou inscrivez-vous avec une adresse e-mail
        </h2>
        <form action="" method="post">
          <fieldset>
            <legend class="legend">
              Ou inscrivez-vous avec une adresse e-mail
            </legend>
            <div>
              <div class="field">
                <label for="Email">Adresse e-mail</label>
                <div>
                  <input name="Email" type="email" value="" />
                </div>
                <div class="clear"></div>
              </div>

              <div class="field">
                <label for="FirstName">Prénom</label>
                <div>
                  <input alt="Prénom" name="FirstName" type="text" value="" />
                </div>
                <div class="clear"></div>
              </div>

              <div class="field">
                <label for="LastName">Nom de famille</label>
                <div>
                  <input name="LastName" type="text" value="" />
                </div>
                <div class="clear"></div>
              </div>

              <div class="field">
                <label for="Password">Mot de passe</label>
                <div>
                  <input
                    autocomplete="off"
                    name="Password"
                    type="password"
                    value=""
                  />
                </div>
                <div class="clear"></div>
              </div>

              <div class="field js-birthday">
                <fieldset>
                  <legend for="BirthDay" class="birthday_label">
                    Date de naissance
                  </legend>
                  <div class="subfield">
                    <label for="BirthDay">Jour</label>
                    <select name="BirthDay">
                      <option selected="selected" value="0">Jour</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </div>
                  <div class="subfield month">
                    <label for="BirthMonth">Mois</label>
                    <select name="BirthMonth">
                      <option selected="selected" value="0">Mois</option>
                      <option value="1">janvier</option>
                      <option value="2">février</option>
                      <option value="3">mars</option>
                      <option value="4">avril</option>
                      <option value="5">mai</option>
                      <option value="6">juin</option>
                      <option value="7">juillet</option>
                      <option value="8">août</option>
                      <option value="9">septembre</option>
                      <option value="10">octobre</option>
                      <option value="11">novembre</option>
                      <option value="12">décembre</option>
                    </select>
                  </div>
                  <div class="subfield year">
                    <label for="BirthYear">Année</label>
                    <select name="BirthYear">
                      <option selected="selected" value="0">AAAA</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                      <option value="1919">1919</option>
                      <option value="1918">1918</option>
                      <option value="1917">1917</option>
                      <option value="1916">1916</option>
                      <option value="1915">1915</option>
                      <option value="1914">1914</option>
                      <option value="1913">1913</option>
                      <option value="1912">1912</option>
                      <option value="1911">1911</option>
                      <option value="1910">1910</option>
                      <option value="1909">1909</option>
                      <option value="1908">1908</option>
                      <option value="1907">1907</option>
                      <option value="1906">1906</option>
                      <option value="1905">1905</option>
                      <option value="1904">1904</option>
                      <option value="1903">1903</option>
                      <option value="1902">1902</option>
                      <option value="1901">1901</option>
                      <option value="1900">1900</option>
                    </select>
                  </div>
                  <div class="clear"></div>
                </fieldset>
              </div>
            </div>

            <div class="submit">
              <input
                type="submit"
                value="Rejoignez EvyDo Shop"
                aria-label="Rejoignez EvyDo Shop"
              />
              <div class="clear"></div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TemplateInscription",
  data() {
      return {
          apple: require("@/assets/img/svg/apple.svg"),
          google: require("@/assets/img/svg/google.svg"),
          facebook: require("@/assets/img/logo/facebook.png"),
      }
  }
};
</script>

<style scoped>
@import "../assets/style/inscription.css";
@import "../assets/style/footer.css";
</style>
