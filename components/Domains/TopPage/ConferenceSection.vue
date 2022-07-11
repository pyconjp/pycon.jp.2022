<template>
  <div>
      <div class="mx-auto w-full conference">
        <br />
        <div class="title text-primary-700">CONFERENCE</div>
<br />
        <div class="subtitle">カンファレンス</div>
        <div class="frame176">
          <img src="@/assets/images/conference_vector1.svg" alt="Keynote vector" />
          <div class="text-3xl text-bold text-tartiary-900">Keynote</div>
          <div class="text-base text-gray-600">基調講演</div>
          <div
            v-for="keynote in $i18n.locale === 'ja' ? keynoteJp : keynoteEn"
            :key="keynote.name"
            class="flex flex-col mt-8 lg:flex-row"
          >
            <div class="flex justify-center w-full mb-6 lg:w-1/4 lg:mb-0">
              <div class="flex keynotebox lg:h-full lg:justify-end lg:items-start">
                <img
                  :src="require(`@/assets/images/${keynote.image}`)"
                  class="self-center"
                />
              </div>
            </div>
            <div class="flex-1 mb-10 ml-6">
              <div class="text-xs text-gray-600">
                {{ keynote.date }}
              </div>
              <div
                v-if="keynote.title"
                class="my-4 text-lg font-bold lg:text-xl text-blue-green corner"
              >
                {{ keynote.title }}
              </div>
              <div class="my-2 text-base font-bold">
                {{ keynote.name }}
              </div>
              <p class="text-sm leading-7" v-html="keynote.desc"></p>
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
          image: 'keynote2.png',
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
          image: 'keynote2.png',
          date: 'TBD.',
          desc: `TBD.`,
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bayon&display=swap');

.conference {
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;

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

.title {
  /* h1 */
  font-family: 'Bayon';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 100%;

  /* or 64px */
  text-align: center;
  letter-spacing: 0.02em;

  /* shadow / base */
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
}

.subtitle {
/* text / ja / .text-xl.text-bold */

font-family: 'Noto Sans JP';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 100%;
/* identical to box height, or 20px */

text-align: center;

/* tartiary / tartiary-900 */

color: #1A1623;
}
.frame176 {
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 48px;

  width: 960.83px;
  height: 1878.78px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.keynotebox {
background: url(@/assets/images/keynote2.png);
  width: 800px;   /* 画像にあわせて適当な幅を指定 */
  padding: 20px;  /* 適当な余白を指定 */
}

</style>
