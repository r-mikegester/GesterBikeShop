<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar mode="md" class="bg-white">
                <ion-buttons slot="start">
                    <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
                </ion-buttons>
                <ion-title>Messages</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense" class="bg-[#121212]">
                <ion-toolbar class="bg-[#121212]">
                    <ion-title size="large">Messages</ion-title>
                </ion-toolbar>
            </ion-header>

            <div class="m-3 rounded-3xl">

                <ion-card v-for="message in messages" :key="message.id" mode="ios" class="rounded-3xl p-3">
                    <ion-card-header>
                        <ion-card-title class="text-xl">{{ message.name }}</ion-card-title>
                        <ion-card-subtitle class="text-xs lowercase">{{ message.email }}</ion-card-subtitle>
                    </ion-card-header>

                    <ion-card-content class="bg-gray-800 m-3 rounded-xl h-20">
                        <p class="py-5 text-white">{{ message.message }}</p>
                    </ion-card-content>
                    <ion-button @click="deleteMessage(message.id)" expand="block" color="danger">
                        Delete
                    </ion-button>
                </ion-card>
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
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
} from "@ionic/vue";
import { onMounted, ref } from "vue";
import { collection, getDocs, getFirestore, deleteDoc, doc } from "firebase/firestore";
import { useQuery } from "@tanstack/vue-query";

onMounted(async () => {
    // loaddata()
});

onIonViewDidEnter(async () => {
    // loaddata()
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

    // Sort the messages array in descending order based on a property (e.g., timestamp)
    messages.sort((a, b) => b.timestamp - a.timestamp);

    return messages;
};
async function deleteMessage(id: string) {
    const db = getFirestore();
    await deleteDoc(doc(db, "userMessages", id));
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
