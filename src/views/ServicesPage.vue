<template>
  <ion-page>
    <ion-header  mode="ios">
      <ion-toolbar mode="md" class="bg-white">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title>Services</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Services</ion-title>
        </ion-toolbar>
      </ion-header>
      <section class="bg-white dark:bg-gray-900 z-50 ">
          <div class="container px-6 py-10 mx-auto">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our <span class="text-emerald-500 ">Services</span>
            </h1>

            <div class="flex justify-center mx-auto mt-6">
              <span class="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
              <span class="inline-block w-3 h-1 mx-1 bg-red-500 rounded-full"></span>
              <span class="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
            </div>

            <h2 class="max-w-2xl mx-auto mt-6 text-center  text-gray-600 dark:text-gray-400">
              As we claim for a better service as we do what our client needs and wants for their beloved bikes we aim to give a good service. 
            </h2>

          <!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">


  <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Card -->
      <a class="group block" href="#">
        <div class="aspect-w-16 aspect-h-9">
          <img class="w-full object-cover rounded-xl" src="../assets/imgs/services/fix1.jpg" alt="Image Description">
        </div>
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
         Simple Repair for you simple problem, no problem
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          September 19, 2022
        </p>
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a class="group block" href="#">
        <div class="aspect-w-16 aspect-h-9">
          <img class="w-full object-cover rounded-xl" src="../assets/imgs/services/fix2.jpg" alt="Image Description">
        </div>
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
          Living Spaces filled with all accesories and bike equipments and apparel all in one shop a unified experience across the customer journey.
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          September 17, 2022
        </p>
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a class="group block" href="#">
        <div class="aspect-w-16 aspect-h-9">
          <img class="w-full object-cover rounded-xl" src="../assets/imgs/services/fix3.jpg" alt="Image Description">
        </div>
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
          Our fine tuneing mechanics will tune those hardy derailleurs
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          September 15, 2022
        </p>
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a class="group block" href="#">
        <div class="aspect-w-16 aspect-h-9">
          <img class="w-full object-cover rounded-xl" src="../assets/imgs/services/fix4.jpg" alt="Image Description">
        </div>
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
          Everything you need to even a Bike Wash.
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          September 12, 2022
        </p>
      </a>
      <!-- End Card -->
    </div>
    <!-- End Grid -->
</div>
<!-- End Card Blog -->
          </div>
        </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
