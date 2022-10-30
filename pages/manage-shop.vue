<template>
  <NuxtLayout>
    <section class="section">
      <div class="is-flex is-justify-content-space-between">
        <h1 class="title">Manage goods</h1>
        <button class="button is-primary" @click="toggleCreateMode()">
          Add
        </button>
      </div>
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
            <div class="column is-three-fifths">
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
            <div
              class="column is-one-fifth buttons is-justify-content-flex-end mb-6"
            >
              <button class="button is-info">Edit</button>
              <button class="button is-danger" @click="remove(product)">
                Remove
              </button>
            </div>
          </div>
        </article>
      </div>

      <create-tshirt-modal
        :class="{ 'is-active': isCreateMode }"
        @close="toggleCreateMode"
      />
    </section>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";

let isCreateMode = ref(false);
const products = await $fetch("/api/products");

const toggleCreateMode = () => {
  isCreateMode.value = !isCreateMode.value;
};

const remove = async ({ _id }) => {
  //TODO: add loading (with Pinia?)
  console.log(_id);
  if (!_id) return;
  try {
    await $fetch(`/api/products/${_id}`, { method: "DELETE" });
    //TODO: show success message and refetch
  } catch ({ message }) {
    console.error(message);
    //TODO: show error message
  }
};
</script>

<style></style>
