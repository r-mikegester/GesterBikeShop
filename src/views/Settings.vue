<template>
  <ion-page>
    <ion-header  mode="ios">
      <ion-toolbar mode="md" class="bg-white">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title> <button id="theme-toggle" type="button" title="Change Theme"
          class="text-gray-500   hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 rounded-md px-3">

          <svg id="theme-toggle-dark-icon" class="hidden w-8 h-8 " xmlns="http://www.w3.org/2000/svg" width="1em"
            height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="currentColor" fill-opacity="0">
              <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate id="lineMdMoonRisingFilledLoop0" fill="freeze" attributeName="fill-opacity"
                  begin="0.7s;lineMdMoonRisingFilledLoop0.begin+6s" dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+2.2s"
                  dur="0.4s" values="1;0" />
              </path>
              <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+3s"
                  dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+5.2s"
                  dur="0.4s" values="1;0" />
              </path>
              <path
                d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+0.4s"
                  dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+2.8s"
                  dur="0.4s" values="1;0" />
              </path>
              <path
                d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+3.4s"
                  dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+5.6s"
                  dur="0.4s" values="1;0" />
              </path>
            </g>
            <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2"
              d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
              transform="translate(0 22)">
              <animateMotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22" />
            </path>
          </svg>

          <svg id="theme-toggle-light-icon" class="hidden w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="1em"
            height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <circle cx="12" cy="32" r="6" fill="currentColor">
              <animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12" />
            </circle>
            <g fill="none" stroke="currentColor" stroke-dasharray="2" stroke-dashoffset="2" stroke-linecap="round"
              stroke-width="2">
              <path d="M0 0">
                <animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s"
                  values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" />
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0" />
              </path>
              <path d="M0 0">
                <animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s"
                  values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" />
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0" />
              </path>
              <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate"
                values="0 12 12;360 12 12" />
            </g>
          </svg>
        </button></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="bg-white dark:bg-gray-900 w-full h-full">
    

    
      <div id="container" class="bg-white">
        <section class="py-6 dark:bg-gray-800 dark:text-gray-50">
		<div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
			<div class="py-6 md:py-0 md:px-6">
				<h1 class="text-4xl font-bold">Book a Repair</h1>
				<p class="pt-2 pb-4">Fill in the form to start a conversation</p>
				<div class="space-y-4">
					<p class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
							<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
						</svg>
						<span>Fake address, 9999 City</span>
					</p>
					<p class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
							<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
						</svg>
						<span>123456789</span>
					</p>
					<p class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
						<span>contact@business.com</span>
					</p>
				</div>
			</div>
			<form class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
				<label class="block">
					<span class="mb-1">Full name</span>
					<input type="text" placeholder="Leroy Jenkins" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800">
				</label>
				<label class="block">
					<span class="mb-1">Email address</span>
					<input type="email" placeholder="leroy@jenkins.com" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800">
				</label>
				<label class="block">
					<span class="mb-1">Message</span>
					<textarea rows="3" class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
				</label>
				<button type="button" class="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
			</form>
		</div>
	</section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonToggle, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useDark } from '@vueuse/core';
export default defineComponent({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonToggle, IonButtons, IonItem, IonMenuButton
  },
  name: 'MyComponent',
  mounted() {
    var themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    )!;
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    )!;

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem("color-theme") === "dark" ||
      !("color-theme" in localStorage)
    ) {
      document.documentElement.classList.add("dark");
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      themeToggleDarkIcon.classList.remove("hidden");
    }

    var themeToggleBtn = document.getElementById("theme-toggle")!;

    themeToggleBtn.addEventListener("click", () => {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
      } else {
        // if NOT set via local storage previously
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  },
});
</script>
