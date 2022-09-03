<template>
  <news-card-base
    :primary="primary"
    :title="$t('title').toString()"
    :description="$t('description').toString()"
    :url="$t('url').toString()"
  >
    <template #icon>
      <SpeakerphoneIcon
        :class="
          'h-9 w-9 mr-4 ' +
          (primary ? 'text-primary-700' : ' text-secondary-400')
        "
      />
    </template>
  </news-card-base>
</template>

<script>
import { SpeakerphoneIcon } from '@vue-hero-icons/solid'
import NewsCardBase from '@/components/Elements/NewsCardBase'

export default {
  name: 'SponsorNewsCard',
  components: { NewsCardBase, SpeakerphoneIcon },
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
    "title": "スポンサー募集中",
    "description": "PyCon JP 2022のスポンサーシップを募集中です。2次募集期間は 2022/06/14 (火) - 開催1ヶ月前 です。",
    "url": "https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship.html"
  },
  "en": {
    "title": "Sponsors wanted!",
    "description": "Sponsorships for PyCon JP 2022 are now being accepted, with the second call for applications being accepted from Tuesday, June 14 2022 - one month prior to the event.",
    "url": "https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship-en.html"
  }
}
</i18n>
