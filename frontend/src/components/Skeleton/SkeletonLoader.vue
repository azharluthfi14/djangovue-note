<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8">
    <div v-for="n in count" :key="n">
      <skeleton-note class="skeleton" />
    </div>
  </div>
</template>

<script>
import SkeletonNote from "./SkeletonNote.vue";

export default {
  components: {
    SkeletonNote,
  },
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
};
</script>