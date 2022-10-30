<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div
      class="modal-content has-background-white p-4"
      style="border-radius: 10px"
    >
      <h1 class="is-size-4 mb-3">Create new t-shirt</h1>
      <form @submit.prevent class="mb-6">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              v-model="model.name"
              class="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <input
              v-model="model.description"
              class="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Image URL</label>
          <div class="control">
            <input
              v-model="model.picUrl"
              class="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input
              v-model="model.price"
              class="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Preorders</label>
          <div class="control">
            <input
              v-model="model.preorders"
              class="input"
              type="number"
              placeholder="0"
            />
          </div>
        </div>
      </form>
      <div class="buttons is-justify-content-space-between">
        <button class="button is-danger" @click="$emit('close')">Cancel</button>
        <button class="button is-success" @click="save">Save</button>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('close')"
    ></button>
  </div>
</template>

<script setup>
const model = {
  name: "",
  description: "",
  picUrl: "",
  price: "",
  preorders: 0,
};

const save = async () => {
  //TODO: add loading (with Pinia?)
  try {
    await $fetch("/api/products/create", {
      method: "post",
      body: {
        ...model,
        preorders: Number(model.preorders),
      },
    });
    //TODO: show success message and close, and refetch
  } catch ({ message }) {
    console.error(message);
    //TODO: show error message
  }
};
</script>
