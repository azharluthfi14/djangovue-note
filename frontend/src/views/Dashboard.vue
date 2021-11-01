<template>
  <div class="flex h-screen bg-gray-100">
    <div class="flex-1 h-full overflow-x-hidden overflow-y-auto">
      <header class="sticky top-0 w-full bg-white border-b">
        <div class="flex justify-between items-center py-3 px-8">
          <h1 class="font-semibold inline-block tracking-wide text-2xl">
            Notes
          </h1>
          <button class="bg-indigo-500 text-white px-7 py-3 rounded-md">
            Create note
          </button>
        </div>
      </header>
      <main>
        <div class="mt-5 lg:px-48 sm:px-5">
          <div class="md:masonry-2-col lg:masonry-3-col box-border mx-auto">
            <div
              v-for="note in notes"
              :key="note.id"
              class="bg-white break-inside shadow-md p-7 my-6 rounded-lg border"
            >
              <h1 class="font-semibold text-lg mb-4">{{ note.title }}</h1>
              <p>{{ note.description }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar/Sidebar.vue";
export default {
  name: "Dashboard",
  components: {
    Sidebar,
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          title: "Note title one",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat nesciunt, veritatis omnis aspernatur impedit adipisci earum tenetur vel atque Lorem ipsum dolor sit amet consectetur ipisicing elit. Ab iusto ipsam ad aperiam quaerat magni omnis autem architec",
        },
        {
          id: 2,
          title: "Note title one",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat nesciunt, veritatis omnis aspernatur impedit adipisci earum tenetur vel atque Lorem ipsum dolor sit amet consectetur ipisicing elit. Ab iusto ipsam ad aperiam quaerat magni omnis autem architec",
        },
        {
          id: 3,
          title: "Note title one",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat nesciunt, veritatis omnis aspernatur impedit adipisci earum tenetur vel atque Lorem ipsum dolor sit amet consectetur ipisicing elit. Ab iusto ipsam ad aperiam quaerat magni omnis autem architec Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat nesciunt, veritatis omnis aspernatur impedit adipisci earum tenetur vel atque Lorem ipsum dolor sit amet consectetur ipisicing elit. Ab iusto ipsam ad aperiam quaerat magni omnis autem architec",
        },
        {
          id: 5,
          title: "Note title one",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat nesciunt,",
        },
      ],
    };
  },
};
</script>
