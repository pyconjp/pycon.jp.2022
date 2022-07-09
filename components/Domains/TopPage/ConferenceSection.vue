<template>
  <div class="my-8 text-black font-noto">
    <div>
      <div class="lg:ml-28 -mb-36">
        <p
          class="-mb-8 text-4xl font-bold font-mont lg:text-6xl text-blue-green"
        >
          CONFERENCE
        </p>
      </div>
      <div class="w-5/6 mt-10 conference lg:w-7/12">
        <div class="w-full mb-16 ml-8 lg:ml-80">
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>カンファレンス</p>
        </div>
        <div class="content-center w-full m-2 text-center lg:ml-80">
          <div class="text-2xl font-bold font-mont">Keynote</div>
          <div class="text-base text-gray-600">基調講演</div>
          <div class="w-full mt-12 ml-4 text-left">
            <div
              v-for="keynote in $i18n.locale === 'ja' ? keynoteJp : keynoteEn"
              :key="keynote.name"
              class="flex flex-col mt-8 lg:flex-row"
            >
              <div class="flex justify-center w-full mb-6 lg:w-1/4 lg:mb-0">
                <div class="flex lg:h-full lg:justify-end lg:items-start">
                  <img
                    :src="require(`@/assets/images/${keynote.image}`)"
                    class="self-center"
                  />
                </div>
              </div>
              <div class="flex-1 mb-10 ml-6">
                <div class="text-xs text-gray-600">{{ keynote.date }}</div>
                <div
                  v-if="keynote.title"
                  class="
                    my-4
                    text-lg
                    font-bold
                    lg:text-xl
                    text-blue-green
                    corner
                  "
                >
                  {{ keynote.title }}
                </div>
                <div class="my-2 text-base font-bold">{{ keynote.name }}</div>
                <p class="text-sm leading-7" v-html="keynote.desc"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keynoteJp: [
        {
          name: '西内 啓',
          title: '',
          image: 'keynote1.png',
          date: '2021.10.15 13:30 -',
          desc: `東京大学大学院医学系研究科医療コミュニケーション学分野助教、大学病院医療情報ネットワーク研究センター副センター長、ダナファーバー/ハーバードがん研究センター客員研究員を経て、2014年11月より株式会社データビークルを創業。<br/>
                 自身のノウハウを活かした拡張アナリティクスツール「dataDiver」などの開発・販売と、官民のデータ活用プロジェクト支援に従事。著書に累計50万部を突破した『統計学が最強の学問である』シリーズのほか、『統計学が日本を救う』（中央公論新社）など。<br/>
                 2020年より内閣府EBPM(Evidence Based Plicy Making: 科学的根拠に基づく政策立案政策立案)アドバイザリーボードメンバーも務める。`,
        },
        {
          name: '',
          title: '',
          image: 'keynote1.png',
          date: 'TBD.',
          desc: `TBD.`,
        },
      ],
      keynoteEn: [
        {
          name: 'Hiromu Nishiuchi',
          title: '',
          image: 'keynote1.png',
          date: 'TBD.',
          desc: `TBD.`,
        },
        {
          name: '',
          title: '',
          image: 'keynote1.png',
          date: 'TBD.',
          desc: `TBD.`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.conference {
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 16px 36px;
  gap: 36px;

  width: 394px;
  height: 2396.91px;

  /* secondary/secondary-400 */
  background: #f3d34f;

  /* tartiary / tartiary-900 */
  border-top: 24px solid #1a1623;

  /* Inside auto layout */
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
}

.grey-background {
  background: rgba(221, 221, 221, 0.2);
}

.corner {
  position: relative;
  border: none;
  display: inline-block;
  padding: 2px 20px;
}
.corner::before,
.corner::after {
  position: absolute;
  content: '';
  width: 20px;
  height: 15px;
}

.corner::before {
  left: 0;
  top: 0;
  border-left: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
}
.corner::after {
  right: 0;
  bottom: 0;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
</style>
