<template>
  <div>
    <subpage-hero-section
      :title="['Time', 'Table']"
      subtitle="タイムテーブル"
    />
    <div class="pt-12 bg-tertiary-100">
      <!-- TODO: 一時的にpretalxのリンクを載せる -->
      <div class="flex justify-center w-full mb-8">
        <news-card-base
          :primary="false"
          :title="$t('title').toString()"
          :description="$t('description').toString()"
          url="https://pretalx.com/pyconjp2022/schedule/"
          class="block w-10/12"
        >
          <template #icon>
            <SpeakerphoneIcon :class="'h-9 w-9 mr-4 text-secondary-400'" />
          </template>
        </news-card-base>
      </div>

      <div class="flex justify-center w-full">
        <time-table class="w-10/12" :talk-list="talkList"></time-table>
      </div>

      <div class="flex flex-col items-center">
        <div class="mt-10 snake-face-base">
          <!--snake face-->
          <div class="hidden snake-face lg:block" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SpeakerphoneIcon } from '@vue-hero-icons/solid'
import { filterTalkList, getAllTalkList } from '../utils/timetable_functions'
import SubpageHeroSection from '@/components/Elements/SubpageHeroSection'
import TimeTable from '@/components/Domains/TimeTable/TimeTable'
import NewsCardBase from '@/components/Elements/NewsCardBase'

export default {
  name: 'TimeTablePage',
  components: {
    SubpageHeroSection,
    TimeTable,
    NewsCardBase,
    SpeakerphoneIcon,
  },
  async asyncData({ $config }) {
    const allTalkList = await getAllTalkList($config.pretalxAuthKey)
    return { talkList: filterTalkList(allTalkList) }
  },
}
</script>

<style scoped>
.snake-face-base {
  position: relative;
  width: 100%;
  height: 90px;
}

.snake-face {
  position: absolute;
  bottom: -1px;
  width: 150px;
  height: 90px;
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_black.svg');
}
</style>

<i18n>
{
  "ja": {
    "title": "セッション詳細について",
    "description":"セッションの詳細説明は別サイトのタイムテーブルから参照ください"
  },
  "en": {
    "title": "About Session Detail",
    "description": "Please refer to the timetable on another site for the detailed explanation of the session."
  }
}
</i18n>
