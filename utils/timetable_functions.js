import axios from 'axios'

/**
 * トークリストから必要な情報のみを絞り込んで整形した結果を返す
 */
export function filterTalkList(talkList) {
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
}

export async function getAllTalkList(token) {
  const params = {
    state: 'confirmed',
  }
  let talkList = []
  let tmpResult = await axios.get(
    'https://pretalx.com/api/events/pyconjp2022/submissions/',
    {
      params,
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  )
  // console.log(tmpResult)
  talkList = talkList.concat(tmpResult.data.results)
  while (tmpResult.data.next !== null) {
    tmpResult = await axios.get(tmpResult.data.next, {
      params,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    talkList = talkList.concat(tmpResult.data.results)
  }
  return talkList
}
