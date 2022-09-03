<template>
  <div>
    <subpage-hero-section
      :title="['Time', 'Table']"
      subtitle="タイムテーブル"
    />
    <div class="pt-12 bg-tertiary-100">
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
import { filterTalkList, getAllTalkList } from '../utils/timetable_functions'
import SubpageHeroSection from '@/components/Elements/SubpageHeroSection'
import TimeTable from '@/components/Domains/TimeTable/TimeTable'

export default {
  name: 'TimeTablePage',
  components: {
    SubpageHeroSection,
    TimeTable,
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
