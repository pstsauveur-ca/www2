<template>
	<PageTitle title="Rendez-nous visite" />
	<section class="wrapper bg-light">
		<div class="container pb-11">
			<div class="row mb-14 mb-md-16">
				<div class="col-xl-10 mx-auto mt-n8">
					<div class="card">
						<div class="row gx-0">
							<div class="col-lg-6 align-self-stretch">
								<div class="map map-full rounded-top rounded-lg-start">
									<iframe style="width:100%; height: 100%; border:0" loading="lazy" allowfullscreen 
									src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJi3MbJRI7z0wRqf3nY_YP0hA&key=AIzaSyD3_JBIYZWO-Kc6Glv5yTm8gwk2IwDm9uk"></iframe>
								</div>
								<!-- /.map -->
							</div>
							<!--/column -->
							<div class="col-lg-6">
								<div class="p-10 p-md-11 p-lg-14">
									<div class="d-flex flex-row">
										<div>
											<div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-location-pin-alt"></i> </div>
										</div>
										<div class="align-self-start justify-content-start">
											<h5 class="mb-1">Adresse</h5>
											<address>
												205 rue Principale, <br class="d-none d-md-block" />
												St-Sauveur, Québec <br class="d-none d-md-block" />
												Canada J0R 1R0
											</address>
										</div>
									</div>
									<!--/div -->
									<div class="d-flex flex-row">
										<div>
											<div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-phone-volume"></i> </div>
										</div>
										<div>
											<h5 class="mb-1">Téléphone</h5>
											<p>(450) 227-2423</p>
										</div>
									</div>
									<!--/div -->
									<div class="d-flex flex-row">
										<div>
											<div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-envelope"></i> </div>
										</div>
										<div>
											<h5 class="mb-1">Courriel</h5>
											<p class="mb-0"><a href="mailto:info@pstsauveur.ca" class="link-body">info@pstsauveur.ca</a></p>
										</div>
									</div>
									<!--/div -->
								</div>
								<!--/div -->
							</div>
							<!--/column -->
						</div>
						<!--/.row -->
					</div>
					<!-- /.card -->
				</div>
				<!-- /column -->
			</div>
			<!-- /.row -->
			<div class="row mb-14 mb-md-16">
				<div class="col-xl-10 mx-auto">
					<div class="alert alert-primary alert-icon" role="alert">
						<i class="uil uil-compass"></i> Vous souhaitez vous impliquer dans la paroisse? Remplissez  <a href="/implication" class="alert-link hover">ce formulaire</a> pour nous envoyer vos coordonnées.
					</div>
				</div>
			</div>
			<!-- /.row -->
		</div>
		<!-- /.container -->
	</section>
	<!-- /section -->
</template>
