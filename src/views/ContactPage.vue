<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar mode="md" class="bg-white">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title>Contact Us</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Contact Us</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container" class="bg-white">
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-12 mx-auto">
            <div class="text-center">
              <p class="font-medium text-blue-500 dark:text-blue-400"></p>

              <h1 class="mt-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-900 md:text-3xl dark:text-gray-100">Get in touch</h1>

              <p class="mt-3 text-gray-500 dark:text-gray-400">Your Friendly Cycling Mechanics <br/>and Support is always here to Help.</p>
            </div>

            <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <Icon icon="ant-design:facebook-outlined" class="w-10 h-10  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-900" />
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                <p class="mt-2 text-blue-500 dark:text-blue-400">Gester Bike Shop</p>
              </div>
              

              <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <Icon icon="ic:round-alternate-email" class="w-10 h-10  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-900" />
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Send us you.</p>
                <p class="mt-2 text-blue-500 dark:text-blue-400">gester.bikeshop@gmail.com</p>
              </div>

              <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <Icon icon="heroicons-outline:phone" class="w-10 h-10  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-900" />
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone Number</h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Tue - Wed from 9am to 5pm.</p> 
                <p class="mt-2 text-blue-500 dark:text-blue-400">+63 (912) 345-6789</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { Icon } from '@iconify/vue';
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
}</style>
