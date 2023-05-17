<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar mode="md" class="bg-white">
                <ion-buttons slot="start">
                    <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
                </ion-buttons>
                <ion-title>Notifications</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense" class="bg-[#121212]">
                <ion-toolbar class="bg-[#121212]">
                    <ion-title size="large">Notifications</ion-title>
                </ion-toolbar>
            </ion-header>

            <div class="m-3 rounded-3xl">
                <h1 class="text-center text-gray-400 mt-96">No Notifications at this time</h1>
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
import { onMounted, ref } from "vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useQuery } from "@tanstack/vue-query";

onMounted(async () => {
    //loaddata()
});

onIonViewDidEnter(async () => {
    //loaddata()
});

const {
    isLoading,
    isError,
    data: messages,
} = useQuery({
    queryKey: ["getMessages"],
    queryFn: loaddata,
    refetchInterval: 5000,
});

async function loaddata() {
    const db = getFirestore();
    const messages: any[] = [];
    const querySnapshot = await getDocs(collection(db, "userMessages"));

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        messages.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    return messages;
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
