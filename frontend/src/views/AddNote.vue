<template>
  <div class="flex h-screen bg-gray-200 dark:bg-dark-first">
    <div class="flex-1 h-full overflow-x-hidden overflow-y-auto">
      <Header />
      <main class="mt-5 lg:px-48 sm:px-5">
        <Add />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Navbar/Navbar.vue";
import Add from "../components/Note/Add.vue";

export default {
  name: "AddNote",
  components: {
    Header,
    Add,
  },
};
</script>
