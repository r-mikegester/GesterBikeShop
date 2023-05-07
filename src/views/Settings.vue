<template>
  <ion-page>
    <ion-header  mode="ios">
      <ion-toolbar mode="md" class="bg-white">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="bg-white dark:bg-gray-900 w-full h-full">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container" class="">
        <ion-item>
  
  </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonToggle, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonToggle, IonButtons, IonItem, IonMenuButton
  },
  name: 'MyComponent',
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle('dark');
    },
  },
  
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
}
</style>
