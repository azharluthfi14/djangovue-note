<template>
  <div>
    <skeleton-loader :count="6" v-if="loading" />
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2" v-else-if="notes.length">
      <router-link
        v-for="(note, index) in notes"
        :key="index"
        :to="{ name: 'DetailNote', params: { id: note.id } }"
        class="
          bg-white
          hover:bg-gray-100
          dark:bg-dark-second
          dark:text-gray-200
          dark:border-transparent
          dark:hover:bg-dark-third
          dark:shadow-lg
          shadow-md
          p-7
          m-3
          rounded-lg
          border
        "
      >
        <h1
          class="
            font-semibold
            text-indigo-500
            dark:text-indigo-400
            text-lg
            mb-4
          "
        >
          {{ note.title }}
        </h1>
        <p>{{ note.description }}</p>
      </router-link>
    </div>
    <div v-else class="flex justify-center mt-20 align-middle items-center">
      <span class="text-center text-7xl">🥺</span>
      <h1 class="font-bold text-center text-3xl dark:text-gray-200">
        You dont have any note
      </h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import SkeletonLoader from "../Skeleton/SkeletonLoader.vue";
export default {
  components: {
    SkeletonLoader,
  },
  data() {
    return {
      notes: [],
      loading: false,
    };
  },

  created() {
    this.getNotes();
  },
  methods: {
    async getNotes() {
      this.loading = true;
      await axios
        .get("api/v1/note/")
        .then((response) => {
          setTimeout(() => {
            this.notes = response.data;
            this.loading = false;
          });
        })
        .catch((error) => {
          console.error(error);
          this.loading = true;
        });
    },
  },
};
</script>