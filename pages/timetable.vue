<template>
  <div>
    <subpage-hero-section :title="['Time', 'Table']" subtitle="タイムテーブル">
      <div class="w-10/12 lg:w-7/12 mx-auto">
        <sprint-news-card :primary="true" />
      </div>
    </subpage-hero-section>
    <div class="pt-12 bg-tertiary-100">
      <div class="flex justify-center w-full">
        <time-table
          ref="child"
          class="w-10/12"
          refs="chlid"
          :talk-list="talkList"
          :approval-data="approvalData"
        ></time-table>
      </div>

      <div class="w-10/12 mx-auto mt-4 text-xs lg:text-base text-tertiary-600">
        {{ $t('annotation') }}
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
import { filterTalkList, getAllTalkList } from '@/utils/timetable_functions'
import mixinVideoDocuments from '@/utils/mixin_video_documents'
import SubpageHeroSection from '@/components/Elements/SubpageHeroSection'
import TimeTable from '@/components/Domains/TimeTable/TimeTable'
import SprintNewsCard from '@/components/Elements/SprintNewsCard'

export default {
  name: 'TimeTablePage',
  components: {
    SprintNewsCard,
    SubpageHeroSection,
    TimeTable,
  },
  mixins: [mixinVideoDocuments],
  async asyncData({ $config }) {
    const allTalkList = await getAllTalkList($config.pretalxAuthKey)
    return {
      talkList: filterTalkList(allTalkList),
    }
  },
  data() {
    return {
      isModal: false,
      modalDisplaySessionData: {},
    }
  },
  mounted() {
    if (this.$route.query.id !== undefined) {
      const targetSession = this.getTargetSessionDataById(this.$route.query.id)
      this.$refs.child.openSessionModal(targetSession)
    }
    document.onkeydown = (evt) => {
      // キーボードを使っているユーザーは、Escapeキーでモーダルを閉じる
      evt = evt || window.event
      if (evt.key === 'Escape') {
        // this.closeSessionModal()
        this.$refs.child.closeSessionModal()
      }
    }
  },
  methods: {
    getTargetSessionDataById(id) {
      const targetSessionData = this.talkList.filter(function (talk) {
        return talk.code === id
      })
      const dummyData = {
        title: '',
        talk_format: '',
        name: '',
        lang_of_talk: '',
        description: '',
        audience_python_level: '',
      }
      if (targetSessionData.length <= 0) {
        return dummyData
      } else {
        return targetSessionData[0]
      }
    },
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
    "description": "セッションの詳細説明は別サイトのタイムテーブルから参照ください",
    "annotation": "※ このタイムテーブルは変更の可能性があります。"
  },
  "en": {
    "title": "About Session Detail",
    "description": "Please refer to the timetable on another site for the detailed explanation of the session.",
    "annotation": "※ This time table is subject to change."
  }
}
</i18n>
