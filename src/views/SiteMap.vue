<template>
  <ion-page>
    <ion-header  mode="ios">
      <ion-toolbar mode="md" class="bg-white">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title>SiteMap</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">SiteMap</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container" class="bg-white dark:bg-gray-900 h-full py-20">
     <!-- Card Section -->
<div class="max-w-[85rem] container px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="/Home">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center text-left">
          <div>
            <h3 class="group-hover:text-blue-600 text-left font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Home
            </h3>
            <p class="text-sm text-gray-500">
              Client Side Page
            </p>
          </div>
          <div class="pl-3">
            <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="/Services">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center text-left">
          <div>
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Services
            </h3>
            <p class="text-sm text-gray-500">
				Client Side Page
            </p>
          </div>
          <div class="pl-3">
            <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="/Contact">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center text-left">
          <div>
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Contact Us
            </h3>
            <p class="text-sm text-gray-500">
				Client Side Page
            </p>
          </div>
          <div class="pl-3">
            <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="/About">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center text-left">
          <div>
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              About us 
            </h3>
            <p class="text-sm text-gray-500">
				Client Side Page
            </p>
          </div>
          <div class="pl-3">
            <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->


    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="/Admin">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center text-left">
          <div>
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Dashboard
            </h3>
            <p class="text-sm text-gray-500">
              Admin Side Page
            </p>
          </div>
          <div class="pl-3">
            <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="/Messages">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center text-left">
          <div>
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Messages
            </h3>
            <p class="text-sm text-gray-500">
				Admin Side Page
            </p>
          </div>
          <div class="pl-3">
            <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->
	   <!-- Card -->
	   <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="/Clients">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center text-left">
          <div>
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Clients
            </h3>
            <p class="text-sm text-gray-500">
				Admin Side Page
            </p>
          </div>
          <div class="pl-3">
            <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->
	   <!-- Card -->
	   <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="/Notifications">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center text-left">
          <div>
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
            Notifications
            </h3>
            <p class="text-sm text-gray-500">
				Admin Side Page
            </p>
          </div>
          <div class="pl-3">
            <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Section -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
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
