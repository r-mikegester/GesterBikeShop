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

      <div id="container" class="">
        <section class="min-h-screen bg-white dark:bg-gray-900">
          <div class="container px-6 py-20 mt-56 mx-auto bg-white dark:bg-gray-900">
            <div class="lg:flex lg:items-center lg:-mx-10">
              <div class="lg:w-1/2 lg:mx-10">
                <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                  Let’s talk
                </h1>

                <p class="mt-4 text-gray-500 dark:text-gray-400">
                  Ask us everything and we would love to hear from you
                </p>
               
                <form @submit.prevent="handleSubmit" class="mt-12 text-left text-xl font-bold">
                  <div class="-mx-2 md:items-center md:flex">
                    <div class="flex-1 px-2">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name:</label>
                      <input type="text" id="name" v-model="name" placeholder="John Doe" required
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-2xl dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-emerald-400  focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="flex-1 px-2 mt-4 md:mt-0">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address:</label>
                      <input type="email" id="email" v-model="email" placeholder="johndoe@example.com" required
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-2xl dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-emerald-400  focus:ring focus:ring-opacity-40" />
                    </div>
                  </div>

                  <div class="w-full mt-4">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Message:</label>
                    <textarea id="message" v-model="message" required
                      class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-2xl md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-emerald-400  focus:ring focus:ring-opacity-40"
                      placeholder="Message"></textarea>
                  </div>
 <div v-if="isSent" class="text-green-500 mt-4 font-extrabold uppercase text-center" @transitionend="handleFadeEnd">Send successful!</div>
                  <button type="submit"
                    class="w-full bg-emerald-900 px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md hover:bg-emerald-400  focus:ring focus:ring-emerald-300 focus:ring-opacity-50">
                    Contact us
                  </button>
                  <button type="button" @click="handleClear"
                    class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-gray-800 capitalize transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-400  focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Clear
                  </button>
                </form>
                <div class="m-3 rounded-3xl">

                  <ion-card mode="ios" class="rounded-3xl p-3">
                    <h1>Message Preview</h1>
                    <ion-card-header>
                      <ion-card-title class="text-xl">{{ name }}</ion-card-title>
                      <ion-card-subtitle class="text-xs lowercase">{{ email }}</ion-card-subtitle>
                    </ion-card-header>

                    <ion-card-content class="bg-gray-200 dark:bg-gray-800 m-3 rounded-xl h-20">
                      <p class="py-5 text-white">{{ message }}</p>
                    </ion-card-content>
                  </ion-card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader
} from "@ionic/vue";
import { Icon } from "@iconify/vue";
import { defineComponent, ref } from "vue";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    Icon, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader
  },
  data() {
    return {
      name: ref(""),
      email: ref(""),
      message: ref(""),
      isSent: false,
    };
  },
  methods: {
    handleClear() {
      this.name = '';
      this.email = '';
      this.message = '';
    },
    async handleSubmit() {
      let userMessage = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "userMessages"), userMessage);
      console.log("Document written with ID: ", docRef.id);
      this.isSent = true; // Set the flag to true after successful send
      setTimeout(() => {
        this.isSent = false;
      }, 3000);
    },
    handleFadeEnd() {
      if (!this.isSent) {
        // Reset the form fields when the message is hidden
        this.name = "";
        this.email = "";
        this.message = "";
      }
    },
  },
});
</script>

<style scoped>
.fade {
  opacity: 1;
  transition: opacity 0.5s;
}

.fade-out {
  opacity: 0;
}
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
