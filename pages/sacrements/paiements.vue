<template>
  <div>
    <PageTitle title="Paiements" />
    <section class="wrapper bg-light">
      <div class="container py-10 py-md-12">
        <!-- /.row -->
        <div class="row">
          <div class="col-xl-10 mx-auto">
            <div class="job-list mb-10">
              <!-- <h3 class="mb-4">Design</h3> -->
              <a v-for="item in items" :href="item.url" class="card mb-4 lift">
                <div class="card-body p-5">
                  <span class="row justify-content-between align-items-center">
                    <span class="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                      <span class="avatar bg-blue text-white w-9 h-9 fs-17 me-3">{{item.initials}}</span> {{ item.name }} </span>
                    <!-- <span class="col-5 col-md-3 text-body d-flex align-items-center">
                      <i class="uil uil-clock me-1"></i> Full time </span> -->
                    <span class="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
                      <i class="uil uil-money-bill me-1"></i> {{ item.price }} </span>
                    <span class="d-none d-lg-block col-1 text-center text-body">
                      <i class="uil uil-angle-right-b"></i>
                    </span>
                  </span>
                </div>
                <!-- /.card-body -->
              </a>
              <!-- /.card -->
            </div>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
								

  </div>
</template>

<script setup>
const items = [{ 
  initials: "B",
  name: "Baptême",
  url: "https://www.zeffy.com/ticketing/c3c500bf-320d-487a-9ee3-bb3d76bad7bb",
  price: "100$"
}, { 
  initials: "PC",
  name: "Première communion",
  url: "https://www.zeffy.com/fr-CA/ticketing/2df58841-81cf-4ae0-83c4-e2edd454e38a",
  price: "100$"
}, { 
  initials: "C",
  name: "Confirmation",
  url: "https://www.zeffy.com/fr-CA/ticketing/c45db31e-7b02-4a2c-a8fb-39fbbdfe795f",
  price: "100$"
}, { 
  initials: "M",
  name: "Mariage (Dépôt)",
  url: "https://www.zeffy.com/fr-CA/ticketing/9d712be5-2c5c-41c0-8296-6d10bb0b72bd",
  price: "150$"
}, { 
  initials: "M",
  name: "Mariage (Paiement final)",
  url: "https://www.zeffy.com/fr-CA/ticketing/b1321e2e-2811-46f0-b350-f7ac2f5c3b90",
  price: "650$"
}, { 
  initials: "F",
  name: "Funérailles",
  url: "https://www.zeffy.com/fr-CA/ticketing/eff2fc25-6314-4a08-90d0-62716f00c133",
  price: "600$"
}]

</script>