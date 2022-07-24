<script setup>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";

</script>

<template>


  <div class="flex min-h-screen w-full bg-gray-200 font-sans">
    <Sidebar />   
    <main class="flex min-h-screen flex-1 flex-col bg-white">
      <Header class="bg-gray-100 pt-4 px-8 pb-[140px] border-warm-gray-600 border-b-2" />
      <router-view></router-view>
    </main>
  </div>
</template>
