<template>
  <news-card-base
    :primary="primary"
    :title="$t('title').toString()"
    :description="$t('description').toString()"
    :url="$t('url').toString()"
  >
    <template #icon>
      <UsersIcon
        :class="
          'h-9 w-9 mr-4 ' +
          (primary ? 'text-primary-700' : ' text-secondary-400')
        "
      />
    </template>
  </news-card-base>
</template>

<script>
import { UsersIcon } from '@vue-hero-icons/solid'
import NewsCardBase from '@/components/Elements/NewsCardBase'

export default {
  name: 'VolunteerNewsCard',
  components: { NewsCardBase, UsersIcon },
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
    "title": "スタッフ募集",
    "description": "PyCon JP 2022では、一緒にイベントを創り上げるボランティアスタッフを募集しています",
    "url": "https://pyconjp.blogspot.com/2022/02/pycon-jp-2022.html"
  },
  "en": {
    "title": "Volunteers wanted!",
    "description": "PyCon JP 2022 is looking for volunteers to help create the event together!",
    "url": "https://pyconjp.blogspot.com/2022/02/pycon-jp-2022.html"
  }
}
</i18n>
