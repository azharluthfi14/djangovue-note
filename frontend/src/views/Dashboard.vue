<template>
  <div class="flex h-screen bg-white dark:bg-dark-first">
    <div class="flex-1 h-full overflow-x-hidden overflow-y-auto">
      <Header />
      <main class="mt-10 min-h-screen mx-40">
        <Notes />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar/Sidebar.vue";
import Header from "../components/Navbar/Navbar.vue";
import Notes from "../components/Note/Notes.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Header,
    Notes,
  },
};
</script>
