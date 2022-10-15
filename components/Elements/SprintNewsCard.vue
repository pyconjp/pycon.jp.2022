<template>
  <news-card-base
    :primary="primary"
    :title="$t('title').toString()"
    :description="$t('description').toString()"
    :url="$t('url').toString()"
  >
    <template #icon>
      <user-group-icon
        :class="
          'h-9 w-9 mr-4 ' +
          (primary ? 'text-primary-700' : ' text-secondary-400')
        "
      />
    </template>
  </news-card-base>
</template>

<script>
import { UserGroupIcon } from '@vue-hero-icons/solid'
import NewsCardBase from '@/components/Elements/NewsCardBase'

export default {
  name: 'SprintNewsCard',
  components: { NewsCardBase, UserGroupIcon },
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
    "title": "スプリントリーダー/参加者募集中",
    "description": "10/16(日)にスプリントを開催します。スプリント参加にあたってPyCon JP 2022のチケットは必要ありません。",
    "url": "https://pyconjp.blogspot.com/2022/09/pyconjp2022-sprint-ja.html"
  },
  "en": {
    "title": "Volunteers wanted!",
    "description": "A sprint will be held on Sunday, October 16. You do not need a ticket for PyCon JP 2022 to participate in the sprint.",
    "url": "https://pyconjp.blogspot.com/2022/09/pyconjp2022-sprint-en.html"
  }
}
</i18n>
