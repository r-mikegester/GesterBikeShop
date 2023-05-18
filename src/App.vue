<template>
  <ion-app>

      <ion-menu content-id="main-content" type="overlay" mode="md"  @ionWillClose="handleMenuClose">
        <ion-header>
          <ion-toolbar class="flex">
            <img src="./assets/imgs/logo/mylogo.png" class="w-10 h-10  ml-5" slot="start" />
            <ion-title class="text-base">GESTER BIKE SHOP</ion-title>
            <ion-buttons slot="primary" mode="ios">
              <ion-button>
                <!---->
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <div class="rounded-3xl" v-if="isLoggedOut">
            <ion-list-header class="-mt-1">
              <ion-label class="text-2xl">Menu</ion-label>
              <ion-button router-link="/SiteMap" router-direction="forward" class="text-emerald-500">Site Map</ion-button>
            </ion-list-header>
            <div class="rounded-3xl bg-white dark:bg-[#1f1f1f] w-full h-fit">
 
              <ion-item router-link="/Home" router-direction="forward" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>Home</ion-label>
              </ion-item>
              <ion-item router-link="/Services" router-direction="forward" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>Services</ion-label>
              </ion-item>
              <ion-item  router-link="/Contact" router-direction="forward" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>Contact</ion-label>
              </ion-item>
              <ion-item router-link="/About" router-direction="forward" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>About</ion-label>
              </ion-item>
             

            </div>
          </div>
          <div class="rounded-2xl">
            <ion-list-header class="mt-5">
              <ion-label class="text-2xl ">Administration</ion-label>
              <ion-button  router-link="/SiteMap" router-direction="forward" v-if="isLoggedIn" class="text-emerald-500">Site Map</ion-button>
            </ion-list-header>
            <div class="rounded-2xl bg-white dark:bg-[#1f1f1f] w-full h-fit">
              <ion-item router-link="/Admin" router-direction="forward" v-if="isLoggedIn" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>Dashboard</ion-label>
              </ion-item>
              <ion-item router-link="/Messages" router-direction="forward" v-if="isLoggedIn" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>Messages</ion-label>
              </ion-item>
              <ion-item router-link="/Clients" router-direction="forward" v-if="isLoggedIn" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>Clients</ion-label>
              </ion-item>
              <ion-item router-link="/Notifications" router-direction="forward" v-if="isLoggedIn" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>Notifications</ion-label>
              </ion-item>
           
              <ion-item router-link="/SignIn" router-direction="forward" v-if="isLoggedOut" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>Sign in</ion-label>
              </ion-item>
              <ion-item router-link="/Register" router-direction="forward" v-if="isLoggedOut" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]">
                <ion-label>Sign up</ion-label>
              </ion-item>
              
              <ion-item @click="handleSignOut" v-if="isLoggedIn" :detail="true" class="rounded-2xl bg-gray-100 dark:bg-[#1f1f1f]" >
                <ion-label>Logout</ion-label>
              </ion-item>


            </div>
          </div>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>

  </ion-app>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import { Auth, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
const router = useRouter();
const isLoggedIn = ref(false);
const isLoggedOut = ref(true);
const menu = ref<HTMLElement | null>(null);

// Method to handle menu close action
const handleMenuClose = () => {
  if (menu.value) {
    const parentMenu = menu.value.closest('ion-menu');
    if (parentMenu) {
      parentMenu.close();
    }
  }
};
let auth: Auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      isLoggedOut.value= false;
    } else {
      isLoggedIn.value = false;
      isLoggedOut.value = true;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });

};
import {
  IonApp,
  IonContent,
  IonMenu,
  IonRouterOutlet,

  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonListHeader,
  IonList,
  IonButtons,



} from '@ionic/vue';
import {
 
} from 'ionicons/icons';
</script>