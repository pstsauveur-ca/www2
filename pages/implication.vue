<template>
  <div>
    <PageTitle title="S'impliquer" />
		<section class="wrapper bg-light">
      <div class="container py-14 py-md-16">
        <div class="card bg-soft-primary">
          <div class="card-body p-4 p-md-8 p-lg-12">
            <div class="row gx-md-8 gx-xl-12 gy-10">
              <div class="col-lg-6">
                <h2 class="display-4 mb-3 pe-lg-10">Joignez-vous à notre équipe, votre implication fait la différence.</h2>
                <p class="lead pe-lg-12 mb-0">Après avoir rempli le formulaire, nous prendrons contact avec vous sous peu.</p>
              </div>
              <!-- /column -->
              <div class="col-lg-6">
                <form class="contact-form needs-validation" action="/implication-merci" method="post" name="implication" netlify>
                  <div class="messages"></div>
                  <div class="row gx-4">
                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input id="frm_nom" type="text" name="nom" class="form-control border-0" placeholder="Jean" required="required" data-error="Le nom est requis.">
                        <label for="frm_nom">Nom complet*</label>
                        <div class="invalid-feedback">
                          S'il-vous-plaît inscrivez votre nom.
                        </div>
                      </div>
                    </div>
                    <!-- /column -->
                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input id="frm_courriel" type="courriel" name="courriel" class="form-control border-0" placeholder="jane.doe@example.com" required="required" data-error="Un courriel valide est requis.">
                        <label for="frm_courriel">Courriel *</label>
                        <div class="valid-feedback">
                          C'est bon!
                        </div>
                        <div class="invalid-feedback">
                          S'il-vous-plaît inscrivez votre adresse courriel.
                        </div>
                      </div>
                    </div>
                    <!-- /column -->
                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input id="frm_tel" type="tel" name="tel" class="form-control border-0" placeholder="555-555-5555" required="required" data-error="Un courriel valide est requis.">
                        <label for="frm_tel">Téléphone *</label>
                        <div class="valid-feedback">
                          C'est bon!
                        </div>
                        <div class="invalid-feedback">
                          S'il-vous-plaît inscrivez votre numéro de téléphone.
                        </div>
                      </div>
                    </div>
                    <!-- /column -->
                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input id="frm_ville" type="ville" name="ville" class="form-control border-0" placeholder="St-Sauveur">
                        <label for="frm_ville">Ville</label>
                      </div>
                    </div>
                    <!-- /column -->
                    <div class="col-md-12">
                      <fieldset class="form-floating mb-4">
                        <p class="">Je souhaite...</p>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" value="Recevoir l'infolettre" id="check-infolettre" name="participation">
                            Recevoir l'infolettre
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" value="Approfondir ma foi" id="check-foi" name="participation">
                            Approfondir le sens à la vie/ma spiritualité/ma foi chrétienne
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" value="M'impliquer dans la paroisse" id="check-benevolat" name="participation">
                            M'impliquer dans la paroisse (liturgie, administration, entretien...)
                          </label>
                        </div>
                      </fieldset>
                    </div>
                    <!-- /column -->
                    <div class="col-12">
                      <div class="form-floating mb-4">
                        <textarea id="frm_info_supplementaire" name="info_supplementaire" class="form-control border-0" style="height: 100px"></textarea>
                        <label for="frm_info_supplementaire">Informations supplémentaires</label>
                      </div>
                    </div>
                    <!-- /column -->
                    <div class="col-12">
                      <input type="submit" class="btn btn-outline-primary btn-send mb-3" value="Envoyer">
                    </div>
                    <!-- /column -->
                  </div>
                  <!-- /.row -->
                </form>
                <!-- /form -->
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
          </div>
          <!--/.card-body -->
        </div>
        <!--/.card -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
  </div>
</template>
