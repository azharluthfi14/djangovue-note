<template>
  <div class="flex h-screen bg-gray-100 dark:bg-dark-first">
    <div class="flex-1 h-full overflow-x-hidden overflow-y-auto">
      <Header />
      <main class="mt-5 lg:px-48 sm:px-5">
        <div
          class="bg-white dark:bg-dark-second rounded-md shadow-md w-full p-8"
        >
          <div class="mb-5">
            <div>
              <input
                class="
                  w-full
                  font-semibold
                  border-white
                  focus:ring-white focus:border-white
                  dark:focus:ring-transparent
                  dark:focus:border-transparent
                  dark:text-gray-100
                  rounded-md
                  dark:bg-dark-second dark:border-transparent
                  mb-3
                "
                type="text"
                v-model="notes.title"
                name="title"
                id="title"
                placeholder="Title note"
              />
            </div>
            <div>
              <textarea
                placeholder="Description note..."
                class="
                  shadow-sm
                  block
                  border-white
                  focus:ring-white focus:border-white
                  dark:focus:ring-transparent
                  dark:focus:border-transparent
                  dark:text-gray-200
                  rounded-md
                  dark:bg-dark-second dark:border-transparent
                  w-full
                "
                name="description"
                id="description"
                rows="10"
                v-model="notes.description"
              ></textarea>
            </div>
          </div>
          <div class="flex justify-between w-6/12 gap-3 relative">
            <button
              class="
                w-full
                inline-flex
                justify-center
                py-3
                px-5
                border border-transparent
                text-lg
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
              @click="updateNote"
            >
              Update note
            </button>
            <button
              class="
                w-full
                inline-flex
                justify-center
                py-3
                px-5
                border border-transparent
                text-lg
                font-medium
                rounded-md
                text-red-500
                border-3 border-red-500
                hover:bg-red-500 hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-red-500
              "
              @click="deleteNote"
            >
              Delete note
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Navbar/Navbar.vue";
import { useToast } from "vue-toastification";
export default {
  name: "DetailNote",
  components: {
    Header,
  },
  data() {
    return {
      notes: [],
    };
  },
  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  mounted() {
    this.getNote();
  },
  methods: {
    getNote() {
      const noteId = this.$route.params.id;
      axios
        .get(`/api/v1/note/${noteId}`)
        .then((response) => {
          this.notes = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    updateNote() {
      const noteId = this.$route.params.id;
      axios
        .post(`/api/v1/note/${noteId}`, this.notes)
        .then((response) => {
          this.toast.info("Note updated !", {
            position: "bottom-right",
          });
          this.$router.push({ name: "Dashboard" });
        })
        .catch((error) => {
          console.error(error);
        });
    },

    deleteNote() {
      const noteId = this.$route.params.id;
      axios
        .delete(`/api/v1/note/${noteId}`, this.notes)
        .then((response) => {
          this.toast.error("Note deleted !", {
            position: "bottom-right",
          });
          this.$router.push({ name: "Dashboard" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>