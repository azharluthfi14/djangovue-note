<template>
  <header
    class="
      sticky
      top-0
      w-full
      z-50
      bg-white
      dark:bg-dark-second dark:border-transparent
      border-b
    "
  >
    <div class="flex justify-between items-center py-5 px-8">
      <div class="flex items-center justify-between">
        <img
          class="w-12 h-12 mr-2 items-center"
          src="../../assets/img/logo-m.svg"
          alt=""
        />
        <router-link :to="{ name: 'Dashboard' }">
          <h1
            class="
              font-bold
              text-indigo-500
              dark:text-white
              inline-block
              tracking-wide
              text-2xl
            "
          >
            Mnotes
          </h1>
        </router-link>
      </div>
      <nav class="flex gap-3">
        <button
          @click="toggleTheme"
          class="
            p-3
            text-white
            flex
            justify-center
            items-center
            bg-gray-100
            hover:bg-gray-200
            dark:bg-dark-third dark:hover:bg-gray-700
            rounded-full
          "
        >
          <span class="material-icons text-gray-400 dark:text-yellow-300">
            dark_mode
          </span>
        </button>
        <router-link
          class="
            py-3
            px-7
            font-semibold
            border border-transparent
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-1
            focus:ring-offset-2
            focus:ring-indigo-500
            dark:focus:ring-offset-transparent dark:focus:ring-indigo-300
            flex
            items-center
          "
          :to="{ name: 'AddNote' }"
        >
          <span class="material-icons mr-2"> add_circle </span>
          Create Note
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
};
</script>

 