<template>
  <ion-page>
    <ion-header  mode="ios">
      <ion-toolbar mode="md" class="bg-white">
        <ion-buttons slot="start">
          <ion-menu-button class="text-[#5e896e] text-5xl"></ion-menu-button>
        </ion-buttons>
        <ion-title>Sign in</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Sign in</ion-title>
        </ion-toolbar>
      </ion-header>

     <!-- <div id="container" class="bg-white">
        <h1>SignIn to AN ACCOUNT</h1>
        <p><input type="text" placeholder="Email" v-model="email"/></p>
        <p><input type="password" placeholder="Password" v-model="password"/></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button @click="register">Sign In</button></p>
        <p><button @click="signInWithGoogle">Sign in with Google</button></p>
      </div>-->

      <div
        class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg dark:bg-transparent lg:max-w-4xl">
        <div class="hidden bg-cover lg:block lg:w-1/2"
          style="background-image: url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80');">
        </div>

        <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div class="flex justify-center mx-auto">
            <img class="w-20 h-20 sm:h-8" src="../assets/imgs/logo/mylogo.png" alt="">
          </div>

         <!-- <p class="mt-3 text-xl text-bold text-center text-gray-600 dark:text-gray-200">
            Gester Bike Shop
          </p>
-->


          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a href="#" class="text-base text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">Gester Bike Shop</a>

            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email</label>
            <input id="LoggingEmailAddress" v-model="email" required
              class="block w-full px-4 py-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-400 focus:ring-opacity-40 dark:focus:border-emerald-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email" />
          </div>

          <div class="mt-4">
           <!-- <div class="flex justify-between">
              
              <a href="#" class="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
            </div>-->
<label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="loggingPassword">Password</label>
            <input id="loggingPassword" v-model="password" required
              class="block w-full px-4 py-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password" />
          </div>
          <p v-if="errMsg" class="text-red-500 my-5">{{ errMsg }}</p>
          <div class="mt-4">
            <button @click="register"
              class="w-full px-6 py-4 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-emerald-700 dark:bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
             Sign in
            </button>
          </div>

          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <a href="/SignIn" class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or</a>

            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            
          </div>
          <a @click="signInWithGoogle"
            class="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <div class="px-5 py-2">
              <svg class="w-10 h-10" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107" />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00" />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50" />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2" />
              </svg>
            </div>

            <span class="w-4/6 px-1 py-3 font-bold text-left">Continue with Google</span>
          </a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getRedirectResult, Auth } from 'firebase/auth';
import { useRouter } from 'vue-router';
import firebase from 'firebase/app';


const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();
let auth: Auth;

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data: any) => {
      console.log("Successfully Signed In!!");
      router.push('/admin');
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No Account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect Password";
          break;
      }
    });
};

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  try {
    await signInWithPopup(auth, provider);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        router.push('/admin');
      } else {
        console.log("Sign-in failed.");
      }
    });
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      // User signed in successfully
      // Resume the operation that was interrupted
      const user = result.user;
      // Fetch the user data from Firebase Authentication
      const { uid, email, metadata } = user;

      // Retrieve the last sign-in time from the user metadata
      const lastSignInTime = metadata.lastSignInTime;

      // Perform any additional operations with the user data

      // Example: Display the email and last sign-in time on the dashboard
      console.log(`Email: ${email}`);
      console.log(`Last Sign-in Time: ${lastSignInTime}`);
    } else {
      // User is not signed in
      // Do something else
    }
  } catch (error) {
    console.error(error);
  }
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
