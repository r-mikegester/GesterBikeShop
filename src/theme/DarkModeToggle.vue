<template>
<p>is Dark : {{ isDark }}</p>
<button class="px-4 py-2 text-white bg-green-500 dark:bg-red-500 rounded" @click="toggleDark()">Toggle Dark Mode</button>
  </template>
  
  <script setup lang="ts">
  import { useDark, useToggle } from '@vueuse/core';

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  

  </script>