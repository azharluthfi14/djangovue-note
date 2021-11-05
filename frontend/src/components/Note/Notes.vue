<template>
  <div>
    <div
      v-masonry
      transition-duration="0.3s"
      item-selector=".note"
      v-if="notes.length"
    >
      <router-link
        v-masonry-tile
        class="note"
        v-for="(note, index) in notes"
        :key="index"
        :to="{ name: 'DetailNote', params: { id: note.id } }"
      >
        <div
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
            lg:max-w-md
            md:max-w-sm
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
        </div>
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
export default {
  data() {
    return {
      notes: [],
    };
  },

  created() {
    this.getNotes();
  },
  methods: {
    async getNotes() {
      await axios
        .get("api/v1/note/")
        .then((response) => {
          this.notes = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>