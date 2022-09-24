<template>
  <div>
    <subpage-hero-section
      :title="['CONTENTS FOR', 'BEGINNERS']"
      subtitle="初学者向けコンテンツ"
    />
    <div class="component-border-top bg-secondary-400">
      <div class="mt-12">
        <img
          src="@/assets/images/conference_vector.svg"
          alt="separator"
          class="mx-auto"
        />
      </div>

      <div class="my-8 flex items-center">
        <div class="font-noto mx-auto text-[30px] font-bold">
          {{ $t('title') }}
        </div>
      </div>

      <div class="w-10/12 flex mx-auto gap-6 mb-4 lg:flex-row flex-col-reverse">
        <content-body :document="document" class="flex-1" />
      </div>

      <div class="snake-face-base">
        <div class="snake-face hidden lg:block" />
      </div>
    </div>
  </div>
</template>

<script>
import SubpageHeroSection from '~/components/Elements/SubpageHeroSection'
import ContentBody from '~/components/Domains/Content/ContentBody'

export default {
  name: 'ContentsForBeginners',
  components: { SubpageHeroSection, ContentBody },
  async asyncData({ $content }) {
    const document = await $content('articles/pycamp').fetch()

    return {
      document,
    }
  },
}
</script>

<style scoped>
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

  background-image: url('@/assets/images/section_bg_img_left_black.svg');
}
</style>

<i18n>
{
  "ja": {
    "title": "初めてのPython"
  },
  "en": {
    "title": "First steps of Python"
  }
}
</i18n>
