<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar mode="md" class="bg-white">
                <ion-buttons slot="start">
                    <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
                </ion-buttons>
                <ion-title>Clients</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense" class="bg-[#121212]">
                <ion-toolbar class="bg-[#121212]">
                    <ion-title size="large">Clients</ion-title>
                </ion-toolbar>
            </ion-header>

            <div class="m-3 rounded-3xl">
                <ion-searchbar v-model="searchText" animated="true" placeholder="Search" mode="ios"></ion-searchbar>
                <ion-list :inset="true" mode="ios" v-if="messages.length > 0">
                    <ion-item v-for="message in filteredMessages" :key="message.id" class="py-3" lines="full">
                        <ion-label>{{ message.name }}</ion-label>
                    </ion-item>
                </ion-list>
                <p v-else class="text-center text-gray-400">No Active Clients in the moment.</p>
                <!-- Table Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Card -->
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
          <!-- Header -->
          <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Clients
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Create Clients, edit, download and more.
            </p>
          </div>
          <!-- End Header -->

          <!-- Body -->
          <div class="max-w-sm w-full min-h-[400px] flex flex-col justify-center text-center mx-auto px-6 py-4">
         

            <h2 class="mt-5 font-semibold text-gray-800 dark:text-white">
              No draft test Clients
            </h2>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Draft a Client so you can have data.
            </p>
            <div>
              <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
                Learn more
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
            </div>

            <div class="mt-5 grid sm:flex gap-2">
              <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                <svg class="w-3 h-3"  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Create a new Client
              </button>
              <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                Use a Template
              </button>
            </div>
          </div>
          <!-- End Body -->

          <!-- Footer -->
          <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <span class="font-semibold text-gray-800 dark:text-gray-200">0</span> results
              </p>
            </div>

            <div>
              <div class="inline-flex gap-x-2">
                <div class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-300 shadow-sm text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                  <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Prev
                </div>

                <div class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-300 shadow-sm text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                  Next
                  <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- End Footer -->
        </div>
      </div>
    </div>
  </div>
  <!-- End Card -->
</div>
<!-- End Table Section -->
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
    IonList,
    IonItem,
    IonLabel,


} from "@ionic/vue";
import { onMounted, ref, computed } from "vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useQuery } from "@tanstack/vue-query";

onMounted(async () => {
    // loaddata()
});

onIonViewDidEnter(async () => {
    // loaddata()
});


const searchText = ref('');
const messages = ref<any[]>([]); // Provide the correct type annotation for 'messages'

const filteredMessages = computed(() => {
    return messages.value.filter((message) =>
        message.name.toLowerCase().includes(searchText.value.toLowerCase())
    );
});

const {
    isLoading,
    isError,
    data: messagesData,
} = useQuery({
    queryKey: ["getMessages"],
    queryFn: loaddata,
    refetchInterval: 5000,
});

async function loaddata() {
    const db = getFirestore();
    const messagesArray: any[] = [];
    const querySnapshot = await getDocs(collection(db, "userMessages"));

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        messagesArray.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    return messagesArray;
}
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
