<template>
  <NuxtLayout>
    <div class="container">
      {{ products }}
    </div>
  </NuxtLayout>
</template>

<script setup>
const products = await $fetch("/api/products");
</script>

<style></style>
