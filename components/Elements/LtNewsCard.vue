<template>
  <news-card-base
    :primary="primary"
    :title="$t('title').toString()"
    :description="$t('description').toString()"
    :url="$t('url').toString()"
  >
    <template #icon>
      <PaperAirplaneIcon
        :class="
          'h-9 w-9 mr-4 ' +
          (primary ? 'text-primary-700' : ' text-secondary-400')
        "
      />
    </template>
  </news-card-base>
</template>

<script>
import { PaperAirplaneIcon } from '@vue-hero-icons/solid'
import NewsCardBase from '@/components/Elements/NewsCardBase'

export default {
  name: 'LtNewsCard',
  components: { NewsCardBase, PaperAirplaneIcon },
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped></style>

<i18n>
{
  "ja": {
    "title": "LT募集中",
    "description": "Day1のLTで発表して頂ける方を募集しています。",
    "url": "https://pyconjp.blogspot.com/2022/10/lt-application-2022-ja.html.html"
  },
  "en": {
    "title": "Call for Lightning Talks",
    "description": "We are looking for people to present at the LT on Day 1.",
    "url": "https://pyconjp.blogspot.com/2022/10/lt-application-2022-en.html.html"
  }
}
</i18n>
