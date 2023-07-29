<template>
  <header class="wrapper bg-soft-primary">
    <nav class="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark">
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <a href="/">
            <img src="/img/logo-dark.png" srcset="/img/logo-dark@2x.png 2x" alt="" />
          </a>
        </div>
        <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div class="offcanvas-header d-lg-none">
            <h3 class="text-white fs-30 mb-0 display-1">Paroisse<br>Saint-Sauveur</h3>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link" href="/horaire">Horaire</a>
                <!-- <ul class="dropdown-menu">
                  <li class="nav-item"><a class="dropdown-item" href="/blog">Horaire des messes</a></li>
                  <li class="nav-item"><a class="dropdown-item" href="/blog">Activités</a></li>
                </ul> -->
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/equipe">Équipe</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Sacrements</a>
                <ul class="dropdown-menu">
                  <li class="nav-item"><a class="dropdown-item" href="/sacrements/bapteme">Baptême</a></li>
                  <!-- <li class="nav-item"><a class="dropdown-item" href="/blog">Première communion</a></li> -->
                  <!-- <li class="nav-item"><a class="dropdown-item" href="/blog">Confirmation</a></li> -->
                  <li class="nav-item"><a class="dropdown-item" href="/sacrements/mariage">Mariage</a></li>
                  <!-- <li class="nav-item"><a class="dropdown-item" href="/blog">Onction des malades</a></li> -->
                  <!-- <li class="nav-item"><a class="dropdown-item" href="/blog">Pardon et confession</a></li> -->
                  <li class="nav-item"><a class="dropdown-item" href="/sacrements/funerailles">Funérailles</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Cimetière</a>
                <ul class="dropdown-menu">
                  <li class="nav-item"><a class="dropdown-item" href="/cimetiere/concessions">Concessions</a></li>
                  <li class="nav-item"><a class="dropdown-item" href="/cimetiere/colombarium">Colombarium</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/implication">S'impliquer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>    
              <li class="nav-item mt-3 ms-lg-8">
                <a class="btn btn-primary" href="/dime" target="_blank">Faire un don</a>
              </li>
            </ul>
            <div class="offcanvas-footer d-lg-none">
              <div>
                <a href="mailto:info@pstsauveur.ca" class="link-inverse">info@pstsauveur.ca</a>
                <br />
                (450) 227-2423
                <br />
                <nav class="nav social social-white mt-4">
                  <a href="#"><i class="uil uil-facebook-f"></i></a>
                </nav>
                <!-- /.social -->
              </div>
            </div>
            <!-- /.offcanvas-footer -->
          </div>
          <!-- /.offcanvas-body -->
        </div>
        <!-- /.navbar-collapse -->
        <div class="navbar-other @@classList">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item d-lg-none">
              <button class="hamburger offcanvas-nav-btn"><span></span></button>
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>
        <!-- /.navbar-other -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
  </header>
</template>
