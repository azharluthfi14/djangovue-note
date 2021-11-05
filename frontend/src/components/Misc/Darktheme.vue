<template>
  <button
    @click="toggleTheme"
    class="py-3 px-7 text-white bg-gray-900 rounded-md"
  >
    Theme Toggle
  </button>
</template>
<script>
export default {
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>