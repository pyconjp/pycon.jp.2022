<template>
  <div class="text-center component-border-top bg-secondary-400">
    <section-title main="NEWS" sub="ニュース" class="mb-14" />
    <div
      class="w-10/12 mx-auto text-left bg-tertiary-50 lg:w-7/12 chipped-card"
    >
      <div class="pt-16 pb-10 text-lg px-14 lg:pb-5">
        <ul class="space-y-6">
          <li
            v-for="post in posts[$i18n.locale]"
            :key="post.id"
            class="w-full align-middle lg:inline-flex"
          >
            <span class="text-tertiary-600 mr-4 published flex-[0_0_8rem]">
              {{ post.published }}
            </span>
            <div class="text-tertiary-900">
              <outer-link :to="post.url">
                {{ post.title }}
              </outer-link>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="pr-8 text-lg font-bold text-center underline lg:text-right text-primary-700 pb-14"
      >
        <outer-link class="more-news" to="https://pyconjp.blogspot.com/">
          {{ $t('more_blogs') }}
        </outer-link>
      </div>
    </div>

    <div class="snake-face-base">
      <div class="hidden snake-face lg:block" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/Elements/SectionTitle'
import OuterLink from '@/components/Elements/OuterLink'

export default {
  name: 'NewsSection',
  components: {
    OuterLink,
    SectionTitle,
  },
  props: {
    posts: {
      type: Object,
      default: () => ({ ja: [], en: [] }),
    },
  },
}
</script>

<style scoped>
.more-news::after {
  content: '→';
}

li:before {
  content: url('@/assets/images/li_before.svg');
  display: inline-block;
  height: 1.125rem;
  margin-right: 0.375rem;
}

.snake-face-base {
  width: 100%;
  height: 36px;
  @media (min-width: 1024px) {
    height: 90px;
  }
}

.snake-face {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_orange.svg');
}
</style>

<i18n>
{
  "ja": {
    "more_blogs": "Newsをもっと見る（blog）"
  },
  "en": {
    "more_blogs": "More News (blog)"
  }
}
</i18n>
