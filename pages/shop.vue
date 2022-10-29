<template>
  <NuxtLayout>
    <section class="section">
      <h1 class="title">Shop</h1>
      <p>All items are available for preorder.</p>
      <div class="columns my-6">
        <article
          v-for="product in products"
          :key="product.id"
          class="column has-background-light mx-2 section"
        >
          <div class="columns">
            <div class="column is-half">
              <figure class="image is-128x128">
                <img :src="product.picUrl" />
              </figure>
            </div>
            <div
              class="column is-flex is-flex-direction-column is-justify-content-space-between is-half"
            >
              <p class="mb-2 is-uppercase has-text-weight-bold">
                {{ product.name }}
              </p>
              <p class="mb-3 is-lowercase">{{ product.description }}</p>
              <p class="is-size-7">Preordered: {{ product.preorders }}</p>
              <p class="has-text-weight-medium is-size-4 my-3">
                {{ product.price }} PLN
              </p>
              <button class="button is-success">Preorder</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
const products = await $fetch("/api/products");
</script>

<style></style>
