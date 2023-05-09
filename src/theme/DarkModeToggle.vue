<template>
<p>is Dark : {{ isDark }}</p>
<button class="px-4 py-2 text-white bg-green-500 dark:bg-red-500 rounded">Toggle Dark Mode</button>
<input type="checkbox" v-model="isDark"/>
  </template>
  
  <script setup lang="ts">
  import { useDark } from '@vueuse/core';

  const isDark = useDark()
  
  
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
  </script>