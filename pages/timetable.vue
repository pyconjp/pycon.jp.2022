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
import SubpageHeroSection from '@/components/Elements/SubpageHeroSection'
import TimeTable from '@/components/Domains/TimeTable/TimeTable'

export default {
  name: 'TimeTablePage',
  components: {
    SubpageHeroSection,
    TimeTable,
  },
  data() {
    return {
      // トーク情報の一覧を保存
      talkList: [],
    }
  },
  async fetch() {
    const allTalkList = await this.getAllTalkList(this.$config.pretalxAuthKey)
    this.talkList = this.filterTalkList(allTalkList)
  },
  methods: {
    /**
     * すべてのトーク情報を取得する
     */
    async getAllTalkList(token) {
      const params = {
        state: 'confirmed',
      }
      let talkList = []
      let tmpResult = await this.$axios.$get(
        'https://pretalx.com/api/events/pyconjp2022/submissions/',
        {
          params,
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      talkList = talkList.concat(tmpResult.results)
      while (tmpResult.next !== null) {
        tmpResult = await this.$axios.$get(tmpResult.next, {
          params,
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        talkList = talkList.concat(tmpResult.results)
      }
      return talkList
    },

    /**
     * トークリストから必要な情報のみを絞り込んで整形した結果を返す
     */
    filterTalkList(talkList) {
      return talkList.map((talk) => {
        // speaker情報からメールアドレスを削除
        const speakers = talk.speakers.map((speaker) => {
          return {
            code: speaker.code,
            name: speaker.name,
            biography: speaker.biography,
            avatar: speaker.avatar,
          }
        })
        const answersInfo = {}
        talk.answers.forEach((answer) => {
          if (answer.question.id === 1713) {
            // if: オーディエンスのPythonのレベル
            answersInfo.audienceExperiment =
              answer.options.length >= 1 ? answer.options[0].answer.en : ''
          } else if (answer.question.id === 1714) {
            // if: この題材を選んだ理由やきっかけ
            answersInfo.choiceReason = answer.answer
          } else if (answer.question.id === 1715) {
            // if: 発表資料の言語
            answersInfo.languageOfPresentationMaterial =
              answer.options.length >= 1 ? answer.options[0].answer.en : ''
          } else if (answer.question.id === 1716) {
            // if: オーディエンスが持って帰れる具体的な知識やノウハウ
            answersInfo.knowledge = answer.answer
          } else if (answer.question.id === 1717) {
            // if: オーディエンスに求める前提知識
            answersInfo.requiredKnowledge = answer.answer
          }
        })
        return {
          code: talk.code,
          title: talk.title,
          speakers,
          track: talk.track ? talk.track.en : '',
          abstract: talk.abstract,
          description: talk.description,
          durationMinutes: talk.duration,
          room: talk.slot.room ? talk.slot.room.en : '',
          start: talk.slot.start,
          end: talk.slot.end,
          notes: talk.notes,
          ...answersInfo,
        }
      })
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
