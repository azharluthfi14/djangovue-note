<template>
  <header class="sticky top-0 w-full z-50 bg-white border-b">
    <div class="flex justify-between items-center py-5 px-8">
      <router-link :to="{ name: 'Dashboard' }">
        <h1 class="font-semibold inline-block tracking-wide text-2xl">Notes</h1>
      </router-link>
      <router-link :to="{ name: 'AddNote' }">
        <a class="bg-indigo-500 text-white px-7 py-3 rounded-md">
          Create note
        </a>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>