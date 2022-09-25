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
    "description": "PyCon JP 2022では、一緒にイベントを創り上げる当日スタッフを募集しています",
    "url": "https://pyconjp.blogspot.com/2022/09/pyconjp2022-conf-day-of-staff.html"
  },
  "en": {
    "title": "Volunteers wanted!",
    "description": "PyCon JP 2022 is looking for conference day of staff volunteers to help create the event together!",
    "url": "https://pyconjp.blogspot.com/2022/09/pyconjp2022-conf-day-of-staff.html"
  }
}
</i18n>
