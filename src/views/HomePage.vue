<template>
  <ion-page>
    <ion-header mode="md" class="ion-no-border z-10">
      <ion-toolbar mode="md" class="bg-white shadow-md">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="bg-red-500 w-full h-full">
      <ion-header collapse="condense" class="ion-no-border">
        <ion-toolbar class="bg-white">
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class=" w-screen h-screen bg-white">
<!-- Announcement Banner -->
<div class="bg-gradient-to-r from-pink-600 to-emerald-400 fixed w-full">
  <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Grid -->
    <div class="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div class="text-center md:text-left md:order-2 md:flex md:justify-end md:items-center">
        <p class="mr-5 inline-block text-sm font-semibold text-white">
          Ready to get started?
        </p>
        <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-white font-medium text-white hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="/Register">
          Sign up
        </a>
      </div>
      <!-- End Col -->

      <!--<div class="flex items-center">
        <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="#">
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
          </svg>
          Watch demo
        </a>
        <span class="inline-block border-r border-white/[.3] w-px h-5 mx-2"></span>
        <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="#">
          Explore what's new
        </a>
      </div>-->
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Announcement Banner -->
        <div
          class="bg-fixed bg-contain top-0 overflow-auto bg-no-repeat w-screen h-full brightness-50 backdrop-brightness-0"
          style="background-image: url('https://c.pxhere.com/photos/95/70/bicycle_bicycles_bike_repair_shop_support-1176393.jpg!d'); background-size: cover; background-position: center; ">
          <div class="h-64 w-64"></div>
        </div>
        <div class="bg-fixed w-screen rounded-t-3xl h-64 bg-cover -mt-64">
          <div class="mx-auto px-auto w-screen rounded-t-3xl h-96 absolute -mt-56 text-white">


            <h1 class="text-5xl font-bold text-center py-20 px-6">WELCOME TO <br /> <span
                class="text-emerald-500">GESTER</span> BIKE SHOP</h1>
            <p class="text-center -mt-20 text-gray-200">You won't get anywhere when you stand still.</p>
            <div class="mx-auto w-full grid-cols-3 grid">
              <a href="/Contact" router-link="/Contact" router-direction="forward"
                class="px-5 py-3 rounded-full  bg-transparent border-2 border-emerald-500 text-emerald-500 text-center text-2xl font-bold  hover:bg-emerald-900 hover:text-red-200 hover:border-emerald-700 transition ease-in-out delay-75 col-span-3 mx-20 my-10">Book
                a Repair</a>
            </div>
          </div>
        </div>


        <section class="bg-white dark:bg-gray-900 z-50 pt-20">
          <div class="container px-6 py-10 mx-auto">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              What our <span class="text-emerald-500 ">clients</span> say
            </h1>

            <div class="flex justify-center mx-auto mt-6">
              <span class="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
              <span class="inline-block w-3 h-1 mx-1 bg-red-500 rounded-full"></span>
              <span class="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
            </div>

            <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
              alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p>

            <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
              <div class="p-8 border rounded-3xl dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                  tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                  aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="">

                  <div class="mx-2">
                    <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                    <span class="text-sm text-gray-500">Cyclist, Bike Commuter</span>
                  </div>
                </div>
              </div>

              <div class="p-8 border rounded-3xl dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                  tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                  aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="">

                  <div class="mx-2">
                    <h1 class="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                    <span class="text-sm text-gray-500">Cyclist, Vlogger</span>
                  </div>
                </div>
              </div>

              <div class="p-8 border rounded-3xl dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                  tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                  aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="">

                  <div class="mx-2">
                    <h1 class="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                    <span class="text-sm text-gray-500">Commuter</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
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
