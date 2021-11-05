<template>
   <div
      class="
         bg-white
         dark:bg-dark-second
         rounded-md
         relative
         shadow-md
         w-full
         p-8
      "
   >
      <div class="mb-5">
         <div>
            <input
               class="
                  w-full
                  border-white
                  focus:ring-white focus:border-white
                  dark:focus:ring-transparent dark:focus:border-transparent
                  rounded-md
                  dark:bg-dark-second dark:border-transparent dark:text-gray-100
                  mb-3
               "
               type="text"
               v-model="note.title"
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
                  dark:bg-dark-second
                  dark:border-transparent
                  dark:focus:ring-transparent
                  dark:focus:border-transparent
                  dark:text-gray-100
                  focus:ring-white focus:border-white
                  w-full
                  rounded
               "
               name="description"
               id="description"
               rows="10"
               v-model="note.description"
            ></textarea>
         </div>
      </div>
      <div class="text-right">
         <button
            class="
               inline-flex
               justify-center
               py-2
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
            @click="submitNote"
         >
            Create
         </button>
      </div>
   </div>
</template>

<script>
import { useToast } from "vue-toastification";
import axios from "axios";

export default {
   data() {
      return {
         note: {},
      };
   },
   methods: {
      async submitNote() {
         await axios
            .post("api/v1/note/", this.note)
            .then((response) => {
               this.$router.push({ name: "Dashboard" });
            })
            .catch((error) => {
               alert(error);
               console.error(error);
            });
      },
   },
};
</script>