<template>
  <div>
    <div v-if="document" class="bg-tertiary-50 chipped-card">
      <div class="lg:p-12 p-6">
        <article
          class="prose prose:w-full prose-pre:w-full prose-h1:text-2xl prose-h1:font-bold prose-h2:text-xl prose-h2:font-bold prose-a:underline prose-a:text-primary-800 max-w-none marker:text-primary-500"
        >
          <NuxtContent :document="document" />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityBody',
  props: {
    document: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>
