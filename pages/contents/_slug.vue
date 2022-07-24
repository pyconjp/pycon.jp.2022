<template>
  <div class="w-10/12 mx-auto my-8">
    <h1 class="text-6xl">{{ page.title }}</h1>
    <p class="my-4 w-full p-6 bg-slate-200 rounded-lg">
      {{ page.description }}
    </p>
    <article class="prose max-w-none prose:w-full prose-pre:w-full my-8">
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content('articles/' + slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: slug })
      })

    return {
      page,
    }
  },
}
</script>
