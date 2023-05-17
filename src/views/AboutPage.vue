<template>
  <ion-page>
    <ion-header  mode="ios">
      <ion-toolbar mode="md" class="bg-white">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title>About Us</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">About Us</ion-title>
        </ion-toolbar>
      </ion-header>

      <section class="bg-white dark:bg-gray-900">
    <div class="h-[32rem] bg-emerald-700 dark:bg-emerald-900">
        <div class="container px-6 py-10 mx-auto">
            <h1 class="text-4xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">About Us</h1>

            <div class="flex justify-center mx-auto mt-6">
                <span class="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-red-500 rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
            </div>

            <p class="max-w-2xl mx-auto mt-6 text-center text-gray-900 dark:text-gray-300">
               
                This is the team responsible on creating and developing this mobile app which helps local bikeshops like Gester Bike Shop to be Digitized and be in touch with the recent tech.
            </p>
        </div>
    </div>

    <div class="container px-6 py-10 mx-auto -mt-80 sm:-mt-80 md:-mt-96">
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-emerald-800">
                <img class="object-cover w-full rounded-xl aspect-square" src="../assets/imgs/dps/profilepic2.jpg" alt="">

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Ronnel Araza</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-emerald-500 font-semibold">UI / UX Designer</p>

                <div class="flex mt-3 -mx-2">
                    <a href="https://www.facebook.com/LennorAzara" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                      <Icon icon="mdi:facebook" class="w-10 h-10 fill-current" />
                    </a>

               

                    <a href="
https://github.com/rONn3L" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                      <Icon icon="mdi:github" class="w-10 h-10 fill-current" />
                    </a>
                </div>
            </div>

            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-emerald-800">
                <img class="object-cover w-full rounded-xl aspect-square" src="../assets/imgs/dps/profilepic.jpg" alt="">

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Mike Gester Sabuga</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-emerald-500 font-semibold">Programmer</p>

                <div class="flex mt-3 -mx-2">
                    <a href="https://www.facebook.com/r.mikegester" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                      <Icon icon="mdi:facebook" class="w-10 h-10 fill-current" />
                    </a>

                    <a href="https://mikegester.vercel.app" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                      <Icon icon="fluent:globe-person-24-filled" class="w-10 h-10 fill-current" />
                    </a>

                    <a href="https://github.com/r-mikegester" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                      <Icon icon="mdi:github" class="w-10 h-10 fill-current" />
                    </a>
                </div>
            </div>

        </div>
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
