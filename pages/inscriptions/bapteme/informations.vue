<template>

  <PageTitle title="Inscription pour un baptême d'enfant" />

  <section class="wrapper bg-light">
    <div class="container py-12 py-md-12">
      <div class="row gx-lg-8 gx-xl-12 gy-10">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">

          <div class="row mb-md-8 mb-4 gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
            <div class="col-md-6 col-lg-4"> <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"><span class="number">1</span></span>
              <h4 class="mb-1">Dates et documents</h4>
            </div>
            <!--/column -->
            <div class="col-md-6 col-lg-4"> <span class="icon btn btn-circle btn-lg btn-primary pe-none mb-4"><span class="number">2</span></span>
              <h4 class="mb-1">Informations</h4>
            </div>
            <!--/column -->
            <div class="col-md-6 col-lg-4"> <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"><span class="number">3</span></span>
              <h4 class="mb-1">Paiement</h4>
            </div>
            <!--/column -->
          </div>

          <h3 class="display-5 my-4">L'enfant</h3>

          <form name="bapteme_enfant" class="contact-form" method="post" action="@@webRoot/services/bapteme-merci" netlify novalidate>
            <div class="messages"></div>

            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_prenom" type="text" name="prenom" class="form-control" required>
                  <label for="form_prenom">Prénom</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_surnom" type="text" name="surnom" class="form-control">
                  <label for="form_surnom">Autres prénoms (s'il y a lieu)</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_nom" type="text" name="nom" class="form-control"  required>
                  <label for="form_nom">Nom</label>
                </div>
              </div> 
              <!-- /column -->
            </div>
            <!-- /.row -->

            <div class="row gx-4 px-4">
              <p class="fs-sm mb-1 text-ash">Sexe</p>
              <div class="col-3">
                <div class="form-check">
                  <input class="form-check-input" type="radio" value="garcon" name="sexe" id="garcon">
                  <label class="form-check-label" for="garcon">
                    Garçon
                  </label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-3">
                <div class="form-check">
                  <input class="form-check-input" type="radio" value="fille" name="sexe" id="fille">
                  <label class="form-check-label" for="fille">
                    Fille
                  </label>
                </div>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->

            <br>

            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_naissance" type="date" name="naissance" class="form-control" placeholder="Jane"  required>
                  <label for="form_naissance">Date de naissance</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Doe">
                  <label for="form_lastname">Lieu de naissance (Hopital)</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Doe">
                  <label for="form_lastname">Ville où est située l'hôpital de naissance</label>
                </div>
              </div>
              <!-- /column -->
            </div>
            
            <!-- /.row -->

            <h3 class="display-5 my-4">Le Père</h3>

            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_pere_prenom" type="text" name="pere_prenom" class="form-control">
                  <label for="form_pere_prenom">Prénom</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_pere_nom" type="text" name="pere_nom" class="form-control">
                  <label for="form_pere_nom">Nom</label>
                </div>
              </div> 
              <!-- /column -->
            </div>
            <!-- /.row -->
            
            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_pere_tel_cell" type="tel" name="pere_tel_cell" class="form-control">
                  <label for="form_pere_tel_cell">Téléphone cellulaire</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_pere_occupation" type="text" name="pere_occupation" class="form-control">
                  <label for="form_pere_occupation">Occupation</label>
                </div>
              </div> 
              <!-- /column -->
            </div>
            <!-- /.row -->

            <h3 class="display-5 mb-3">La Mère</h3>

            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_mere_prenom" type="text" name="mere_prenom" class="form-control">
                  <label for="form_mere_prenom">Prénom</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_mere_nom" type="text" name="mere_nom" class="form-control">
                  <label for="form_mere_nom">Nom</label>
                </div>
              </div> 
              <!-- /column -->
            </div>
            <!-- /.row -->
            
            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_mere_tel_cell" type="tel" name="mere_tel_cell" class="form-control">
                  <label for="form_mere_tel_cell">Téléphone cellulaire</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_mere_occupation" type="text" name="mere_occupation" class="form-control">
                  <label for="form_mere_occupation">Occupation</label>
                </div>
              </div> 
              <!-- /column -->
            </div>
            <!-- /.row -->


            <h3 class="display-5 mb-3">Informations de contact</h3>

            <div class="row gx-4">
              <p>Parent à contacter:
              </p>
              <div class="col-3">
                <div class="form-check mb-4">
                  <input class="form-check-input" type="radio" value="contacter_pere" name="parent_a_contacter" id="contacter_pere">
                  <label class="form-check-label" for="contacter_pere">
                    Le Père
                  </label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-3">
                <div class="form-check mb-4">
                  <input class="form-check-input" type="radio" value="contacter_mere" name="parent_a_contacter" id="contacter_mere">
                  <label class="form-check-label" for="contacter_mere">
                    La Mère
                  </label>
                </div>
              </div>
              <!-- /column -->
            </div>

            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_courriel" type="email" name="courriel" class="form-control">
                  <label for="form_courriel">Courriel</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_adresse" type="text" name="adresse" class="form-control">
                  <label for="form_adresse">Adresse et nom de la rue</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_ville" type="text" name="ville" class="form-control">
                  <label for="form_ville">Ville</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_code_postal" type="text" name="code_postal" class="form-control">
                  <label for="form_code_postal">Code postal</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-12">
                <div class="form-check mb-4">
                  <input id="form_infolettre" class="form-check-input" type="checkbox" value="Oui" checked name="infolettre">
                  <label  class="form-check-label" for="form_infolettre">J'accepte de recevoir par courriel de
                    l'information générale concernant les services offerts par la paroisse.</label>
                </div>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->

            <h3 class="display-5 mb-3">Parrain/Marraine</h3>

            <p>Vous pouvez choisir une marraine et un parrain ou une marraine ou un parrain. La marraine et
              le parrain doivent être baptisés catholiques et doivent obligatoirement avoir vécu tous leurs
              sacrements initiatiques (baptême, communion et confirmation).</p>

            <h4 class="fs-15 text-uppercase text-navy">Parrain</h4>

            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_prenom_parrain" type="email" name="prenom_parrain" class="form-control">
                  <label for="form_prenom_parrain">Prénom du parrain</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_nom_parrain" type="text" name="nom_parrain" class="form-control">
                  <label for="form_nom_parrain">Nom du parrain</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_ville_parrain" type="text" name="ville_parrain" class="form-control">
                  <label for="form_ville_parrain">Municipalité de résidence</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->

            <h4 class="fs-15 text-uppercase text-navy">Marraine</h4>

            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_prenom_marraine" type="email" name="prenom_marraine" class="form-control">
                  <label for="form_prenom_marraine">Prénom de la marraine</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_nom_marraine" type="text" name="nom_marraine" class="form-control">
                  <label for="form_nom_marraine">Nom de la marraine</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_ville_marraine" type="text" name="ville_marraine" class="form-control">
                  <label for="form_ville_marraine">Municipalité de résidence</label>
                </div>
              </div>
              <!-- /column -->
              <div class="col-md-6">
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->

            <div class="row gx-4">
              <div class="col-12">
                <a class="btn btn-primary" href="paiement">Continuer</a>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->

          </form>
          <!-- /form -->

        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
</template>
