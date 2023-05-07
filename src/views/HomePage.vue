<template>
  <ion-page>
    <ion-header  mode="md" class="ion-no-border z-10">
      <ion-toolbar mode="md" class="bg-white">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="bg-red-500 w-full h-full">
      <ion-header collapse="condense" class="ion-no-border" >
        <ion-toolbar class="bg-white">
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class=" w-full h-full pt-5">
        <div class="bg- w-full rounded-t-3xl h-96 bg-fixed z-20">
            <div class="mx-auto px-auto w-full h-full">
              <h1 class="text-4xl font-bold text-center py-20">WELCOME TO <br/> <span class="text-red-500">GESTER</span> BIKE SHOP</h1>
              <p class="text-center -mt-20 text-gray-200">You won't get anywhere when you stand still.</p>
            </div>
        </div>
    
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
