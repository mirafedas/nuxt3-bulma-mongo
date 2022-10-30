<template>
  <NuxtLayout>
    <section class="section">
      <h1 class="title">Shop</h1>
      <p>All items are available for preorder.</p>
      <div class="my-6">
        <article
          v-for="product in products"
          :key="product.id"
          class="has-background-light mx-2 section mb-4"
        >
          <div class="columns">
            <div class="column is-one-fifth">
              <figure class="image is-128x128">
                <img :src="product.picUrl" />
              </figure>
            </div>
            <div class="column is-four-fifths">
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
