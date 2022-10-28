<template>
  <NuxtLayout>
    <TheHero />
    <div class="container">
      <TheContent />
    </div>
  </NuxtLayout>
</template>

<script setup>
const products = await $fetch("/routes/shop");
</script>

<style></style>
