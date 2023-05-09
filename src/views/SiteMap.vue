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

      <div id="container" class="bg-white">
        <div class="dark:bg-gray-800 dark:text-gray-100">
		<div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="max-w-3xl mx-auto text-center">
				<h2 class="text-3xl font-extrabold sm:text-4xl">All the features you want</h2>
				<p class="mt-4 text-lg dark:text-gray-400">Pellentesque viverra, leo id euismod laoreet, nunc risus molestie orci, vel faucibus quam justo id mauris.</p>
			</div>
			<dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
				<div class="flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Quisque at urna</dt>
						<dd class="mt-2 dark:text-gray-400">Vivamus ultricies bibendum tortor, molestie imperdiet justo cursus eu. Donec quis arcu magna. Integer tempor egestas dolor.</dd>
					</div>
				</div>
				<div class="flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Quisque eu dui lacinia</dt>
						<dd class="mt-2 dark:text-gray-400">Quisque ultricies volutpat sapien nec varius. Sed sit amet justo vestibulum, efficitur risus quis, gravida libero.</dd>
					</div>
				</div>
				<div class="flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Mauris dignissim</dt>
						<dd class="mt-2 dark:text-gray-400">Phasellus nec molestie arcu. Proin dictum, lorem mollis rutrum efficitur, lectus velit pharetra elit, et dictum purus nibh auctor velit.</dd>
					</div>
				</div>
				<div class="flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Proin nulla eros</dt>
						<dd class="mt-2 dark:text-gray-400">Sed ornare ultricies gravida. Morbi egestas dolor turpis, ornare laoreet est vehicula non.</dd>
					</div>
				</div>
				<div class="flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Proin dictum</dt>
						<dd class="mt-2 dark:text-gray-400">Lorem mollis rutrum efficitur, lectus velit pharetra elit, et dictum purus nibh auctor velit.</dd>
					</div>
				</div>
				<div class="flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Quisque eu dui lacinia</dt>
						<dd class="mt-2 dark:text-gray-400">Cras a mauris tincidunt, scelerisque justo sit amet, hendrerit est. Fusce venenatis diam fringilla metus convallis, at dapibus enim congue.</dd>
					</div>
				</div>
				<div class="flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Cras vel bibendum tellus</dt>
						<dd class="mt-2 dark:text-gray-400">Curabitur molestie neque ac massa pulvinar, nec sollicitudin nunc consequat. Donec mattis orci eros, vitae porttitor risus pretium eget.</dd>
					</div>
				</div>
				<div class="flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Dignissim magna</dt>
						<dd class="mt-2 dark:text-gray-400">Cras ac lectus erat. Curabitur condimentum luctus nisi, non lacinia ipsum.</dd>
					</div>
				</div>
			</dl>
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
