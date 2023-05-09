<template>
  <ion-page>
    <ion-header  mode="md" class="ion-no-border z-10">
      <ion-toolbar mode="md" class="bg-white shadow-md">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="bg-red-500 w-full h-full">
      <ion-header collapse="condense" class="ion-no-border" >
        <ion-toolbar class="bg-white">
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class=" w-screen h-screen">
        <div class="px-6 py-3">
		<div class="mx-auto fixed">
			<div class="flex flex-row lg:flex-row items-center mt-5">
				<h2 class="text-left text-4xl tracking-tighter font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-red-900 mr-20">Up to
					<br class="hidden">10% Off
				</h2>
				<!--<div class="space-x-2 text-center py-2 lg:py-0">
					<span>on Labored Repairs! Use code:</span>
					<span class="font-bold text-lg">CC106</span>
				</div>-->
				<a href="#" rel="noreferrer noopener" class="px-5 lg:mt-0 py-3 rounded-full border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Contact Now!</a>
			</div>
		</div>
	</div>
        <div class="bg-fixed bg-contain overflow-auto mt-20 bg-no-repeat w-screen h-full brightness-50 backdrop-brightness-0" style="background-image: url('https://c.pxhere.com/photos/95/70/bicycle_bicycles_bike_repair_shop_support-1176393.jpg!d'); background-size: cover; background-position: center; ">
  <div class="h-64 w-64"></div>
</div>
        <div class="bg-fixed w-screen rounded-t-3xl h-64 bg-cover -mt-64">
            <div class="mx-auto px-auto w-screen rounded-t-3xl h-96 absolute -mt-56 text-white">
             

              <h1 class="text-5xl font-bold text-center py-20 px-6">WELCOME TO <br/> <span class="text-emerald-500">GESTER</span> BIKE SHOP</h1>
              <p class="text-center -mt-20 text-gray-200">You won't get anywhere when you stand still.</p>
              <div class="mx-auto w-full grid-cols-3 grid">
                <a href="#" class="px-5 py-3 rounded-full  bg-transparent border-2 border-emerald-500 text-emerald-500 text-center text-2xl font-bold  hover:bg-emerald-900 hover:text-red-200 hover:border-emerald-700 transition ease-in-out delay-75 col-span-3 mx-20 my-10">Book a Repair</a>
              </div>
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
