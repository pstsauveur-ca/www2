<template>
  <PageTitle title="Inscription pour un baptême d'enfant" />
  <section class="wrapper bg-light">
    <div class="container py-12 py-md-12">
      <div class="row gx-lg-8 gx-xl-12 gy-10">
        <div class="col-lg-2"></div>

        <div class="col-lg-8">
          <div class="row mb-md-8 mb-4 gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
            <div class="col-md-6 col-lg-4"> <span class="icon btn btn-circle btn-lg btn-primary pe-none mb-4"><span class="number">1</span></span>
              <h4 class="mb-1">Dates et documents</h4>
            </div>
            <!--/column -->
            <div class="col-md-6 col-lg-4"> <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"><span class="number">2</span></span>
              <h4 class="mb-1">Informations</h4>
            </div>
            <!--/column -->
            <div class="col-md-6 col-lg-4"> <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"><span class="number">3</span></span>
              <h4 class="mb-1">Paiement</h4>
            </div>
            <!--/column -->
          </div>
          
          <p>Nous tenons à vous féliciter d’avoir choisi d’offrir le baptême pour votre enfant. Le
            baptême, bien avant d’être une tradition, est une réponse au Christ. Il se présente comme
            notre Dieu et nous invite à l’accueillir dans notre vie afin de découvrir tout l’amour qu’Il
            souhaite nous transmettre.</p>
          
          <p>Afin de parvenir à réserver une date de baptême, vous devez obligatoirement avoir en
            main les documents suivants:</p>

          <ol>
            <li>Le certificat de naissance de l’enfant à baptiser (émis par le directeur de l’état
              civil)</li>
            <li>La preuve de confirmation de la marraine et du parrain (vous pouvez choisir
              une marraine OU un parrain OU une marraine et un parrain. Il n’est pas
              possible d’avoir deux marraines ou deux parrains. Si un des deux ou les deux
              ont été confirmé à la paroisse Saint-Sauveur, vous devrez indiquer le nom et
              l’année de confirmation)</li>
          </ol>

          <p>Si vous avez ces documents, téléversez les maintenant afin d'avoir accès au formulaire d’inscription. Au besoin, vous pouvez consulter les prochaines dates de baptêmes.</p>

          <br>
          

          <form id="form_bapteme_1">


            <div class="row mb-4">
              <div class="col-lg-6">
                <div class="form-floating mb-4">
                  <input id="input_courriel" type="email" class="form-control" required>
                  <label for="input_courriel">Votre addresse courriel</label>
                </div>
              </div>
            </div>

            <h3 class="display-5 mt-8 mb-4">Documents</h3>

            <p>Les formats supportés pour les documents sont: .pdf, .jpg, .jpeg, .png</p>

            <h4 class="lead fs-lg">
              Certificat de naissance de l'enfant
              <strong class="text-orange">*</strong>
            </h4>

            <div class="row">
              <div class="col-lg-6">
                <div class="form-floating mb-6">
                  <input id="doc_enfant" type="file" name="certificat_naissance" class="my-4" accept=".pdf, .jpg, .jpeg, .png" required>
                </div>
              </div>
            </div> 

            <div class="row mb-4">
              <div class="col-lg-6">

                <h4 class="lead fs-lg">Preuves de confirmation</h4>

                <div class="">
                  <p>Notre enfant aura:</p>

                  <input class="form-check-input" type="radio" name="parrain_marraine" id="opt_parrain_marraine" checked>
                  <label class="form-check-label" for="opt_parrain_marraine" >
                    Une marraine et un parrain 
                  </label>
                  <br>
                  <input class="form-check-input" type="radio" name="parrain_marraine" id="opt_marraine_seulement">
                  <label class="form-check-label" for="opt_marraine_seulement">
                    Seulement une marraine 
                  </label>
                  <br>
                  <input class="form-check-input" type="radio" name="parrain_marraine" id="opt_parrain_seulement">
                  <label class="form-check-label" for="opt_parrain_seulement">
                    Seulement un parrain
                  </label>

                  <div class="section-marraine"> 
                    <h4 class="lead mt-4">La marraine</h4>

                    <input class="form-check-input" type="radio" name="marraine_confirmation" id="opt_marraine_ici" checked>
                    <label class="form-check-label" for="opt_marraine_ici">
                      Confirmée à Saint-Sauveur
                    </label>
                    <br>
                    <input class="form-check-input" type="radio" name="marraine_confirmation" id="opt_marraine_ailleurs">
                    <label class="form-check-label" for="opt_marraine_ailleurs">
                      Confirmée ailleurs
                    </label>
                    <div class="form-floating my-4" id="marraine_confirmation_annee">
                      <input id="input_marraine_annee" type="text" class="form-control" maxlength="4">
                      <label for="input_marraine_annee">Année de confirmation</label>
                    </div>
                    <input id="doc_marraine" class="my-4" type="file" 
                    accept=".pdf, .jpg, .jpeg, .png">
                  </div>

                  <div class="section-parrain">
                    <h4 class="lead mt-4">Le parrain</h4>

                    <input class="form-check-input ms-0" type="radio" name="parrain_confirmation" id="opt_parrain_ici" checked>
                    <label class="form-check-label" for="opt_parrain_ici">
                      Confirmé à Saint-Sauveur
                    </label>
                    <br>
                    <input class="form-check-input ms-0" type="radio" name="parrain_confirmation" id="opt_parrain_ailleurs">
                    <label class="form-check-label" for="opt_parrain_ailleurs">
                      Confirmé ailleurs
                    </label>

                    <div class="form-floating my-4" id="parrain_confirmation_annee">
                      <input id="input_parrain_annee" type="text" class="form-control" maxlength="4">
                      <label for="input_parrain_annee">Année de confirmation</label>
                    </div>

                    <input id="doc_parrain" class="my-4" type="file" accept=".pdf, .jpg, .jpeg, .png">
                  </div>

                </div>
              </div>
            </div>

            <h3 class="display-5 mt-8 mb-4">Date de baptême</h3>

            <div class="row mb-4">
              <div class="col-lg-6">
                <div class="form-select-wrapper mb-4">
                  <select class="form-select" aria-label="Choisir une date" id="date_bapteme" required>
                    @@loop('_option_date.html', "../temp/disponibilites_bapteme.json")
                  </select>
                </div>
              </div>
            </div>

            <h3 class="display-5 mt-8 mb-4">Date de catéchèse</h3>

            <p>La catéchèse qui prépare le baptême est obligatoire (même si vous l’avez vécu
              précédemment pour un autre enfant que vous auriez fait baptiser à la paroisse Saint-                Sauveur). Les deux parents doivent être présents à cette rencontre. Nous vous demandons
              de ne pas amener votre enfant ou vos enfants avec vous à cette rencontre, afin de pouvoir
              vous concentrer, vous et les autres autour de vous.</p> 
              
              <p>Si vous étiez dans l’incapacité de participer à la rencontre, nous déplacerons la date du baptême afin de vous permettre de vivre la catéchèse avant le baptême. Comme le baptême est l’entrée dans une famille, il nous semble bon de prendre un temps ensemble afin de faire connaissance, de part et
              d’autre, comme membre de la même famille chrétienne.</p>

            <div class="row mb-4">
              <div class="col-lg-6">
                <div class="form-floating mb-4">
                  <div class="form-select-wrapper mb-4">
                    <select id="date_catechese" class="form-select" aria-label="Choisir une date" required>
                      @@loop('_option_date.html', "../temp/disponibilite_catechese_bapteme.json")
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <button id="btn_submit" type="submit" class="btn btn-primary my-4" value="Continuer" disabled>Continuer</button>

            <div id="output-box" class="alert alert-dark alert-icon hidden" role="alert">
              <i class="uil uil-clock"></i>
              <span id="output-text">&nbsp;</span>
            </div>
          </form>

        </div>
        <!--/column -->
      </div> 
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
</template>

<style>
#opt_parrain_seulement:checked ~ .section-marraine,
#opt_marraine_seulement:checked ~ .section-parrain, 
#opt_marraine_ailleurs:checked ~ #marraine_confirmation_annee,
#opt_parrain_ailleurs:checked ~ #parrain_confirmation_annee,
#opt_marraine_ici:checked ~ #doc_marraine,
#opt_parrain_ici:checked ~ #doc_parrain {
  visibility: hidden;
  display: none;
}
</style>
