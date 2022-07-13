<template>
  <div class="relative mt-20 conference">
    <div class="flex flex-col items-center">
      <div class="rectangle">
        <br />
        <div class="conference-title conference-font-bayon">CONFERENCE</div>
        <div class="conference-subtitle conference-font-notojs">
          カンファレンス
        </div>
        <br />
        <br />

        <div class="conference-keynote-frame">
          <img
            src="@/assets/images/conference_vector1.svg"
            alt="Keynote vector"
          />

          <div
            class="text-3xl text-bold text-tartiary-900 conference-font-notjs"
          >
            Keynote
          </div>
          <div class="text-base text-gray-600 conference-font-notjs">
            基調講演
          </div>
          <div class="flex flex-col mt-8 lg:flex-row conference-card">
            <div class="flex justify-center w-full mb-6 lg:w-1/4 lg:mb-0">
              <div class="flex lg:h-full lg:justify-end lg:items-start">
                <img
                  :src="require(`@/assets/images/${keynote1.image}`)"
                  class="self-center conference-image"
                />
              </div>
            </div>
            <div class="flex-1 mb-10 ml-6">
              <div class="text-xs conference-font-firasans">
                {{ keynote1.date }}
              </div>
              <div
                class="my-4 text-lg font-bold lg:text-xl text-blue-green corner"
                v-html="
                  $i18n.locale === 'ja' ? keynote1.Jp.title : keynote1.En.title
                "
              />
              <div class="my-2 text-base font-bold text-primary-900 text-bold">
                {{ keynote1.Jp.name }}
              </div>
              <p class="text-sm leading-7" v-html="keynote1.Jp.desc"></p>
            </div>
          </div>

          <div class="flex flex-col mt-8 lg:flex-row conference-card">
            <div class="flex justify-center w-full mb-6 lg:w-1/4 lg:mb-0">
              <div class="flex lg:h-full lg:justify-end lg:items-start">
                <img
                  :src="require(`@/assets/images/${keynote2.image}`)"
                  class="self-center conference-image"
                />
              </div>
            </div>
            <div class="flex-1 mb-10 ml-6">
              <div class="text-xs conference-font-firasans">
                {{ keynote2.date }}
              </div>
              <div
                class="my-4 text-lg font-bold lg:text-xl text-blue-green corner"
                v-html="
                  $i18n.locale === 'ja' ? keynote2.Jp.title : keynote2.En.title
                "
              />
              <div class="my-2 text-base font-bold text-primary-900 text-bold">
                {{ keynote2.Jp.name }}
              </div>
              <p class="text-sm leading-7" v-html="keynote2.Jp.desc"></p>
            </div>
          </div>
          <div>
            <img
              src="@/assets/images/conference_vector2.svg"
              alt="Keynote vector"
            />
          </div>
          <div class="conference-timetable">
            <p class="text-primary-700 text-bold">タイムテーブル詳細</p>
          </div>
          <div
            class="text-3xl text-bold text-tartiary-900 conference-font-notjs"
          >
            Documents
          </div>
          <div class="text-base text-gray-600 conference-font-notjs">
            当日配布物
          </div>
          <img src="@/assets/images/documents.svg" alt="Keynote vector" />
        </div>
      </div>
    </div>
    <div class="mt-5 snake-face-base">
      <!--snake face-->
      <div class="snake-face" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keynote1: {
        image: 'keynote1.svg',
        date: '2021.10.15 13:30 -',
        Jp: {
          name: '西内 啓 / Hiromu Nishiuchi',
          title: '',
          desc: `東京大学大学院医学系研究科医療コミュニケーション学分野助教、大学病院医療情報ネットワーク研究センター副センター長、ダナファーバー/ハーバードがん研究センター客員研究員を経て、2014年11月より株式会社データビークルを創業。<br/>
                 自身のノウハウを活かした拡張アナリティクスツール「dataDiver」などの開発・販売と、官民のデータ活用プロジェクト支援に従事。著書に累計50万部を突破した『統計学が最強の学問である』シリーズのほか、『統計学が日本を救う』（中央公論新社）など。<br/>
                 2020年より内閣府EBPM(Evidence Based Plicy Making: 科学的根拠に基づく政策立案政策立案)アドバイザリーボードメンバーも務める。`
        },
        En: {
          name: 'Hiromu Nishiuchi',
          title: '',
          desc: `TBD.`
        }
      },
      keynote2: {
        image: 'keynote2.svg',
        date: 'Comming Soon...',
        Jp: {
          name: 'Comming soon...',
          title: 'Comming soon...',
          desc: 'Comming soon...'
        },
        En: {
          name: 'Comming soon...',
          title: 'Comming soon...',
          desc: 'Comming soon...'
        }
      }
    }
  }
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
.conference-title {
  /* h1 */
  font-weight: 400;
  font-size: 64px;
  line-height: 100%;

  /* or 64px */
  text-align: center;
  letter-spacing: 0.02em;
  /* shadow / base */
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: #b32f0f;
}

.conference-subtitle {
  /* text / ja / .text-xl.text-bold */

  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */

  text-align: center;

  /* tartiary / tartiary-900 */

  color: #1a1623;
}
.conference-keynote-frame {
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
.conference-font-bayon {
  font-family: 'Bayon';
  font-style: normal;
}
.conference-font-notojs {
  font-family: 'Noto Sans JP';
  font-style: normal;
}

.conference-font-firasans {
  font-family: 'Fira Sans';
  font-style: normal;
}

.keynotebox {
  width: 800px; /* 画像にあわせて適当な幅を指定 */
  padding: 20px; /* 適当な余白を指定 */
}

.conference-timetable {
  /* Button/Primitive/Default */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 36px;

  position: absolute;
  width: 329.89px;
  height: 44px;
  left: calc(50% - 329.89px / 2 + 312.27px);
  top: 1185.52px;

  /* tartiary/tartiary-50 */
  background: #fcfcfd;

  /* shadow / base */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.confererence-card {
  position: absolute;

  width: 590px;
  height: 370px;
  background-color: #b32f0f;
  clip-path: polygon(
    0% 0%,
    90% 0%,
    100% 10%,
    100% 90%,
    100% 100%,
    10% 100%,
    0% 90%
  );
}
.confererence-image {
  position: absolute;
  /*width: 696.69px;
  height: 504.37px;*/
  width: 590px;
  height: 370px;

  /* secondary / secondary-50 */

  border: 1px solid #fef9e6;
  clip-path: polygon(
    0% 0%,
    90% 0%,
    100% 10%,
    100% 90%,
    100% 100%,
    10% 100%,
    0% 90%
  );
}
.snake-face-base {
  width: 100%;
  height: 90px;
}

.snake-face {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_orange.svg');
}
</style>
