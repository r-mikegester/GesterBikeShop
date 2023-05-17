<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar mode="md" class="bg-white">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="bg-[#121212]">
        <ion-toolbar class="bg-[#121212]">
          <ion-title size="large">Dashboard</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- Card Section -->
     
      <!-- End Card Section -->
      <div class="m-4 rounded-3xl">
        <!-- Icon Blocks -->
        <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <!-- Grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <!-- Icon Block -->
            <div
              class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
              <!-- Icon -->
              <div
                class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
                <p class="text-bold text-3xl">{{ messageCount }}</p>
              </div>
              <!-- End Icon -->

              <div class="mt-3">
                <h3 class="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  MESSAGES
                </h3>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div
              class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
              <!-- Icon -->
              <div
                class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
                <p class="text-bold text-3xl">0</p>
              </div>
              <!-- End Icon -->

              <div class="mt-3">
                <h3 class="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  NOTIFICATIONS
                </h3>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div
              class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
              <!-- Icon -->
              <div
                class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
                <p class="text-bold text-3xl">{{ userCount  }}</p>
              </div>
              <!-- End Icon -->

              <div class="mt-3">
                <h3 class="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                 ALL CLIENTS
                </h3>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div
              class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
              <!-- Icon -->
              <div
                class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
                <p class="text-bold text-3xl">3</p>
              </div>
              <!-- End Icon -->

              <div class="mt-3" router-link="/SiteMap" router-direction="forward">
                <h3 class="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Reviews
                </h3>
              </div>
            </div>
            <!-- End Icon Block -->

          </div>
          <!-- End Grid -->
        </div>
        <!-- End Icon Blocks -->
      </div>
      <div class="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <!-- Card -->
          <div class="flex flex-col bg-white shadow-md rounded-xl bg-gradient-to-br from-blue-900 to-violet-900">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase tracking-wide text-white">
                  Total Clients
                </p>
                <div class="hs-tooltip">
                  <div class="hs-tooltip-toggle">
                    <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path
                        d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                    <span
                      class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                      role="tooltip">
                      The number of daily clients
                    </span>
                  </div>
                </div>
              </div>

              <div class="mt-1 flex items-center">
                <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  {{ userCount }}
                </h3>
                <span class="flex items-center text-green-600">
                  <svg class="inline-block w-7 h-7 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                  </svg>
                  <span class="inline-block text-sm">
                    1.7%
                  </span>
                </span>
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="flex flex-col bg-white shadow-md rounded-xl bg-gradient-to-br from-blue-900 to-violet-900">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase tracking-wide text-white">
                  Repairs
                </p>
              </div>

              <div class="mt-1 flex items-center">
                <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  29.4%
                </h3>
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="flex flex-col bg-white shadow-md rounded-xl bg-gradient-to-br from-blue-900 to-violet-900">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase tracking-wide text-white">
                  Avg. CLients
                </p>
              </div>

              <div class="mt-1 flex items-center">
                <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  56.8%
                </h3>
                <span class="flex items-center text-red-600">
                  <svg class="inline-block w-7 h-7 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                  </svg>
                  <span class="inline-block text-sm">
                    1.7%
                  </span>
                </span>
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="flex flex-col bg-white shadow-md rounded-xl bg-gradient-to-br from-blue-900 to-violet-900">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase tracking-wide text-white">
                 Reviews 
                </p>
              </div>

              <div class="mt-1 flex items-center">
                <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  69
                </h3>
              </div>
            </div>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Grid -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  onIonViewDidEnter,
  IonItem,
  IonAvatar,
  IonLabel,
  IonRippleEffect
} from "@ionic/vue";
import { onMounted, ref } from "vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useQuery } from '@tanstack/vue-query';

const { isLoading, isError, data: messages } = useQuery({
  queryKey: ["getMessages"],
  queryFn: loaddata,
  refetchInterval: 5000
});

const userCount = ref(0);
const messageCount = ref(0);

const listenForAuthChanges = () => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user: any) => {
    if (user) {
      // User is signed in
      userCount.value += 1;
    } else {
      // User is signed out
      userCount.value -= 1;
    }
  });
};

async function loaddata() {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "userMessages"));

  const messages: any[] = [];
  querySnapshot.forEach((doc) => {
    messages.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  // Update the message count
  messageCount.value = messages.length;

  return messages;
}

onMounted(async () => {
  // loaddata(); 
  listenForAuthChanges();
});

onIonViewDidEnter(async () => {
  // loaddata();
});
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
