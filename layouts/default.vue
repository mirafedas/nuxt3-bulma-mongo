<template>
  <div class="is-flex is-flex-direction-column" style="min-height: 100vh">
    <TheNav />
    <main class="is-flex-grow-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup></script>

<style></style>
