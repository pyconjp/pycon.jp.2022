<template>
  <div>
    <time-table />
  </div>
</template>

<script>
import TimeTable from '@/components/Domains/TimeTable'

export default {
  name: 'TimeTablePage',
  components: {
    TimeTable,
  },
  data() {
    return {
      // トーク情報の一覧を保存
      talkList: [],
    }
  },
  async fetch() {
    const allTalkList = await this.getAllTalkList()
    this.talkList = this.filterTalkList(allTalkList)
  },
  methods: {
    /**
     * すべてのトーク情報を取得する
     */
    async getAllTalkList() {
      const params = {
        state: 'confirmed',
      }
      const token = process.env.PRETALX_AUTH_KEY
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
          if (answer.id === 119773) {
            // if: Audience experiment
            answersInfo.audienceExperiment =
              answer.options.length >= 1 ? answer.options[0].answer.en : ''
          } else if (answer.id === 119770) {
            // if: Why did you choose this topic?
            answersInfo.choiceReason = answer.answer
          } else if (answer.id === 119774) {
            // if: Language of presentation material
            answersInfo.languageOfPresentationMaterial =
              answer.options.length >= 1 ? answer.options[0].answer.en : ''
          } else if (answer.id === 119771) {
            // if: Knowledges and know-how the audience can get from your talk
            answersInfo.knowledge = answer.answer
          } else if (answer.id === 119772) {
            // if: Prior knowledges speakers assume the audience to have
            answersInfo.requiredKnowledge = answer.answer
          }
        })
        return {
          title: talk.title,
          speakers,
          track: talk.track.en,
          abstract: talk.abstract,
          description: talk.description,
          durationMinutes: talk.duration,
          room: talk.slot.room,
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
