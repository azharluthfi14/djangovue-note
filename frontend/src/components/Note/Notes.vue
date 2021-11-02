<template>
  <div class="pb-10" v-masonry transition-duration="0.3s" item-selector=".note">
    <router-link
      class="note"
      v-masonry-tile
      v-for="(note, index) in notes"
      :key="index"
      :to="{ name: 'DetailNote', params: { id: note.id } }"
    >
      <div
        class="
          bg-white
          hover:bg-gray-100
          shadow-md
          p-7
          h-full
          m-3
          lg:max-w-md
          md:w-full
          rounded-lg
          border
        "
      >
        <h1 class="font-semibold text-lg mb-4">{{ note.title }}</h1>
        <p>{{ note.description }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

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