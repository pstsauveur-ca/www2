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
            <div class="col-md-6 col-lg-4"> <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"><span class="number">2</span></span>
              <h4 class="mb-1">Informations</h4>
            </div>
            <!--/column -->
            <div class="col-md-6 col-lg-4"> <span class="icon btn btn-circle btn-lg btn-primary pe-none mb-4"><span class="number">3</span></span>
              <h4 class="mb-1">Paiement</h4>
            </div>
            <!--/column -->
          </div>

          <p>Le baptême est un sacrement gratuit. Toutefois, les frais demandés aident
            votre paroisse avec tous les frais qui entourent le baptême (chauffage,
            électricité, salaire des employés, etc.).</p>

          <a href="https://www.zeffy.com/fr-CA/ticketing/1e6dbb69-e6d6-4210-8ab2-662c4fe5e923" class="btn btn-primary btn-send mt-4" target="_blank">
            <i class="uil uil-external-link-alt me-2"></i> 
            Faire le paiement
          </a>

          <form name="bapteme_enfant" class="contact-form" method="post" action="/inscriptions/merci" netlify novalidate>
            <!-- <input type="submit" class="btn btn-primary btn-send mb-3" value="Faire le paiement" zeffy-form-link="https://www.zeffy.com/fr-CA/embed/ticketing/1e6dbb69-e6d6-4210-8ab2-662c4fe5e923?modal=true"> -->
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
