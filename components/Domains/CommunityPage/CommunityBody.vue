<template>
  <div>
    <div v-if="community" class="bg-tertiary-50 chipped-card">
      <div class="py-12 px-12">
        <article
          class="prose prose:w-full prose-pre:w-full prose-h1:text-2xl prose-h1:font-bold prose-h2:text-xl prose-h2:font-bold prose-a:underline prose-a:text-primary-800 max-w-none marker:text-primary-500"
        >
          <NuxtContent :document="community" />
        </article>

        <!--        <div v-if="community.url">-->
        <!--          <outer-link-->
        <!--            :to="community.url"-->
        <!--            class="inline underline text-primary-800"-->
        <!--          >-->
        <!--            詳しくはこちら-->
        <!--            <ExternalLinkIcon class="inline w-4 h-4 mb-2" />-->
        <!--          </outer-link>-->
        <!--        </div>-->

        <!--        <img-->
        <!--          :src="require('@/assets/images/communities/' + community.image)"-->
        <!--          :alt="community.name"-->
        <!--          class="my-4"-->
        <!--        />-->

        <!--        <div v-if="community.owner">-->
        <!--          <h5 class="text-xl my-4">主催者</h5>-->
        <!--          <ul>-->
        <!--            <li-->
        <!--              v-for="(owner, i) in (community.owner || '').split(',')"-->
        <!--              :key="i"-->
        <!--            >-->
        <!--              {{ owner }}-->
        <!--            </li>-->
        <!--          </ul>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityBody',
  props: {
    community: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>
