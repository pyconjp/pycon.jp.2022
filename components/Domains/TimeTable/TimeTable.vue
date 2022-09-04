<template>
  <div class="">
    <div class="flex justify-center w-full">
      <div class="flex justify-center w-full">
        <button
          class="px-5 py-2 w-[45%] mr-4 text-2xl font-bold border rounded shadow-md font-noto lg:mr-12"
          :class="[
            targetDay === 1
              ? 'bg-primary-700 text-white'
              : 'bg-tertiary-50 text-primary-700',
          ]"
          @click="targetDay = 1"
        >
          DAY1 10/14
        </button>
        <button
          class="px-5 py-2 w-[45%] text-2xl font-bold border rounded shadow-md font-noto"
          :class="[
            targetDay === 2
              ? 'bg-primary-700 text-white'
              : 'bg-tertiary-50 text-primary-700',
          ]"
          @click="targetDay = 2"
        >
          DAY2 10/15
        </button>
      </div>
    </div>
    <div v-if="$device.isDesktop" class="flex justify-between mt-14">
      <div
        v-for="(room, index) in [
          'pyconjp_1',
          'pyconjp_2',
          'pyconjp_3',
          'pyconjp_4',
          'pyconjp_5',
        ]"
        :key="room"
        :class="[index % 2 === 0 ? 'bg-[#3D3B45]' : 'bg-[#585562]']"
        class="w-[calc((100%_-_16px)/5)] flex justify-center items-center h-9"
      >
        <p class="font-medium text-white">{{ room }}</p>
      </div>
    </div>

    <!-- オープニング -->
    <FullWidthRow
      :background-color="secondaryColor"
      :text-color="primaryColor"
      :title="openingInfo.title"
      :time="openingInfo.startTime"
      class="mt-24 lg:mt-2"
    ></FullWidthRow>

    <!-- 基調講演 -->
    <FullWidthRow
      :background-color="secondaryColor"
      :text-color="primaryColor"
      :title="keynoteInfo.title"
      :time="keynoteInfo.startTime"
      class="mt-12 lg:mt-2"
    ></FullWidthRow>

    <!-- ランチセッション -->
    <FullWidthRow
      :background-color="primaryColor"
      text-color="white"
      :title="lunchSessionInfo.title"
      :time="lunchSessionInfo.startTime"
      class="mt-12 lg:mt-2"
    ></FullWidthRow>

    <!-- 一般セッション1行目 -->
    <SessionRow
      :talk-list="firstLowDataList"
      :start-time="getStartTime(1)"
    ></SessionRow>

    <!-- 一般セッション2行目 -->
    <SessionRow
      :talk-list="secondLowDataList"
      :start-time="getStartTime(2)"
    ></SessionRow>

    <!-- 一般セッション3行目(1日目のみ) -->
    <SessionRow
      v-if="targetDay === 1"
      :talk-list="thirdLowDataList"
      :start-time="getStartTime(3)"
    ></SessionRow>

    <!-- コーヒー休憩 -->
    <FullWidthRow
      :background-color="primaryColor"
      text-color="white"
      :title="coffeeBreakInfo.title"
      :time="coffeeBreakInfo.startTime"
      class="mt-12 lg:mt-2"
    ></FullWidthRow>

    <!-- 一般セッション4行目 -->
    <SessionRow
      :talk-list="fourthLowDataList"
      :start-time="getStartTime(4)"
    ></SessionRow>

    <!-- 一般セッション5行目 -->
    <SessionRow
      :talk-list="fifthLowDataList"
      :start-time="getStartTime(5)"
    ></SessionRow>

    <!-- LT(1日目のみ) -->
    <FullWidthRow
      v-if="targetDay === 1"
      :background-color="secondaryColor"
      :text-color="primaryColor"
      :title="lightningTalkInfo.title"
      :time="lightningTalkInfo.startTime"
      class="mt-12 lg:mt-2"
    ></FullWidthRow>

    <!-- クロージング -->
    <FullWidthRow
      :background-color="secondaryColor"
      :text-color="primaryColor"
      :title="closingInfo.title"
      :time="closingInfo.startTime"
      class="mt-12 lg:mt-2"
    ></FullWidthRow>
  </div>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'
import FullWidthRow from '@/components/Domains/TimeTable/FullWidthRow'
import SessionRow from '@/components/Domains/TimeTable/SessionRow'

const fullConfig = resolveConfig(tailwindConfig)
const specialSessionCode = {
  opening: ['QS8ZYM', 'V9SGFS'],
  keynote: ['HFEB37', 'TLNEJQ'],
  closing: ['AUNGB9', 'UQP9YT'],
  coffeeBreak: ['EB87SG', 'UD8FLV'],
  lunchSession: ['S3DU8Z', 'NHY3TK'],
  lightningTalk: ['RLTBKP'],
}

const talkSessionStartTime = {
  firstRow: ['2022-10-14T13:00:00+09:00', '2022-10-15T13:00:00+09:00'],
  secondRow: ['2022-10-14T13:50:00+09:00', '2022-10-15T13:50:00+09:00'],
  thirdRow: ['2022-10-14T14:40:00+09:00'],
  fourthRow: ['2022-10-14T16:20:00+09:00', '2022-10-15T15:10:00+09:00'],
  fifthRow: ['2022-10-14T17:10:00+09:00', '2022-10-15T16:00:00+09:00'],
}

export default {
  name: 'TimeTable',
  components: { FullWidthRow, SessionRow },
  props: {
    talkList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      targetDay: 1,
      primaryColor: fullConfig.theme.colors.primary[700],
      secondaryColor: fullConfig.theme.colors.secondary[400],
      openingInfo: {
        startTime: '',
        title: '',
      },
      keynoteInfo: {
        startTime: '',
        title: '',
      },
      lunchSessionInfo: {
        startTime: '',
        title: '',
      },
      coffeeBreakInfo: {
        startTime: '',
        title: '',
      },
      lightningTalkInfo: {
        startTime: '',
        title: '',
      },
      closingInfo: {
        startTime: '',
        title: '',
      },
      firstLowDataList: [],
      secondLowDataList: [],
      thirdLowDataList: [],
      fourthLowDataList: [],
      fifthLowDataList: [],
    }
  },
  watch: {
    targetDay() {
      this.setInitialValue()
    },
  },
  mounted() {
    this.setInitialValue()
  },

  methods: {
    /**
     * オープニング、クロージング、ランチセッション、コーヒー休憩の情報取得用
     * @param {number} targetDay - 開催日が1日目か2日目か
     * @param {string} sessionType - 以下のいずれか
     *                                opening
     *                                closing
     *                                coffeeBreak
     *                                lunchSession
     *                                lightningTalk
     */
    getSpecialSessionInfo(targetDay, sessionType) {
      return this.talkList.filter((talkInfo) => {
        // 開催日と配列ではインデックスが1異なるので補正する
        return talkInfo.code === specialSessionCode[sessionType][targetDay - 1]
      })
    },
    /**
     * 1行分のトーク情報を取得する
     */
    getTalkSessionList(startTime) {
      return this.talkList
        .filter((talkInfo) => {
          return talkInfo.start === startTime
        })
        .sort((a, b) => {
          return a.room < b.room ? -1 : 1
        })
    },
    getStartTime(rowNumber) {
      if (rowNumber === 1) {
        return this.$dayjs(
          talkSessionStartTime.firstRow[this.targetDay - 1]
        ).format('HH:mm')
      } else if (rowNumber === 2) {
        return this.$dayjs(
          talkSessionStartTime.secondRow[this.targetDay - 1]
        ).format('HH:mm')
      } else if (rowNumber === 3) {
        return this.$dayjs(
          talkSessionStartTime.thirdRow[this.targetDay - 1]
        ).format('HH:mm')
      } else if (rowNumber === 4) {
        return this.$dayjs(
          talkSessionStartTime.fourthRow[this.targetDay - 1]
        ).format('HH:mm')
      } else if (rowNumber === 5) {
        return this.$dayjs(
          talkSessionStartTime.fifthRow[this.targetDay - 1]
        ).format('HH:mm')
      }
    },
    setInitialValue() {
      const openingInfo = this.getSpecialSessionInfo(this.targetDay, 'opening')
      if (openingInfo && openingInfo.length >= 1) {
        this.openingInfo = {
          startTime: this.$dayjs(openingInfo[0].start).format('HH:mm'),
          title: openingInfo[0].title,
        }
      }

      const keynoteInfo = this.getSpecialSessionInfo(this.targetDay, 'keynote')
      if (keynoteInfo && keynoteInfo.length >= 1) {
        this.keynoteInfo = {
          startTime: this.$dayjs(keynoteInfo[0].start).format('HH:mm'),
          title: keynoteInfo[0].title,
        }
      }

      const lunchSessionInfo = this.getSpecialSessionInfo(
        this.targetDay,
        'lunchSession'
      )
      if (lunchSessionInfo && lunchSessionInfo.length >= 1) {
        this.lunchSessionInfo = {
          startTime: this.$dayjs(lunchSessionInfo[0].start).format('HH:mm'),
          title: lunchSessionInfo[0].title,
        }
      }

      const coffeeBreakInfo = this.getSpecialSessionInfo(
        this.targetDay,
        'coffeeBreak'
      )
      if (coffeeBreakInfo && coffeeBreakInfo.length >= 1) {
        this.coffeeBreakInfo = {
          startTime: this.$dayjs(coffeeBreakInfo[0].start).format('HH:mm'),
          title: coffeeBreakInfo[0].title,
        }
      }

      const lightningTalkInfo = this.getSpecialSessionInfo(1, 'lightningTalk')
      if (lightningTalkInfo && lightningTalkInfo.length >= 1) {
        this.lightningTalkInfo = {
          startTime: this.$dayjs(lightningTalkInfo[0].start).format('HH:mm'),
          title: lightningTalkInfo[0].title,
        }
      }

      const closingInfo = this.getSpecialSessionInfo(this.targetDay, 'closing')
      if (closingInfo && closingInfo.length >= 1) {
        this.closingInfo = {
          startTime: this.$dayjs(closingInfo[0].start).format('HH:mm'),
          title: closingInfo[0].title,
        }
      }

      // 1日目、2日目と配列のインデックスが異なるので-1する
      this.firstLowDataList = this.getTalkSessionList(
        talkSessionStartTime.firstRow[this.targetDay - 1]
      )
      this.secondLowDataList = this.getTalkSessionList(
        talkSessionStartTime.secondRow[this.targetDay - 1]
      )
      // トークセッション3行目は1日目のみ
      this.thirdLowDataList = this.getTalkSessionList(
        talkSessionStartTime.thirdRow[0]
      )
      this.fourthLowDataList = this.getTalkSessionList(
        talkSessionStartTime.fourthRow[this.targetDay - 1]
      )
      this.fifthLowDataList = this.getTalkSessionList(
        talkSessionStartTime.fifthRow[this.targetDay - 1]
      )
    },
  },
}
</script>

<style scoped>
.snake-face-base {
  width: 100%;
  height: 90px;
}

.snake-face {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_black.svg');
}
</style>

<!-- ↓JSONフォーマットです -->
<i18n>
  {  }
</i18n>
