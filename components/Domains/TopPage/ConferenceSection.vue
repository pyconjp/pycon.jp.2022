<template>
  <div class="component-border-top bg-secondary-400">
    <section-title main="CONFERENCE" sub="カンファレンス" />

    <div class="flex flex-col items-center">
      <!-- Keynote1 start -->
      <div class="flex flex-col w-10/12 mt-10 lg:w-7/12">
        <img
          src="@/assets/images/conference_vector.svg"
          alt="Keynote vector"
          class="conference-mid-vector"
        />
        <div class="mt-10 conference-label font-noto">Keynote</div>
        <div class="mt-1 conference-description font-noto">基調講演</div>

        <div class="flex flex-col mt-10">
          <div class="flex flex-col items-center mt-10 lg:flex-row">
            <!-- left image -->
            <div class="flex w-12/12 lg:flex-1">
              <img
                :src="require(`@/assets/images/${keynote1.image}`)"
                class="self-center"
              />
            </div>

            <!-- right text -->
            <div class="flex flex-col ml-10 w-12/12 lg:flex-[2_2_0]">
              <div class="text-tartiary-700 font-fira">
                {{ keynote1.date }}
              </div>
              <div
                class="mt-1 font-bold font-fira text-primary-900"
                v-html="$t('keynote1.name')"
              ></div>
              <p
                class="font-bold text-tartiary-900 font-noto-sans-jp"
                v-html="$t('keynote1.desc')"
              ></p>
            </div>
          </div>
        </div>

        <div class="hidden mt-10 lg:block conference-keynote-separator" />

        <div class="flex flex-col my-10 conference-frame">
          <div class="flex flex-col items-center mt-10 lg:flex-row">
            <!-- left image -->
            <div class="flex w-12/12 lg:flex-1">
              <img
                :src="require(`@/assets/images/${keynote2.image}`)"
                class="self-center"
              />
            </div>
            <!-- right text -->
            <div class="flex flex-col ml-10 w-12/12 lg:flex-[2_2_0]">
              <div class="text-tartiary-700 font-fira">
                {{ keynote2.date }}
              </div>
              <div
                class="mt-1 font-bold font-fira text-primary-900"
                v-html="$t('keynote2.name')"
              ></div>
              <p
                class="font-bold text-tartiary-900 font-noto-sans-jp"
                v-html="$t('keynote2.desc')"
              ></p>
            </div>
          </div>
        </div>

        <!--        <div class="mt-10 mr-auto conference-frame-timetable lg:mr-0">-->
        <!--          <div class="conference-timetable font-noto">タイムテーブル詳細</div>-->
        <!--          <img src="@/assets/images/right_allow.svg" />-->
        <!--          </div>-->
        <!--        </div>-->

        <!--        <div class="flex flex-col items-center mt-10">-->
        <!--          <img-->
        <!--            src="@/assets/images/conference_vector.svg"-->
        <!--            alt="Keynote vector"-->
        <!--            class="conference-small-vector"-->
        <!--          />-->
        <!--          <div class="mt-10"></div>-->
        <!--          <div class="conference-label font-noto">Documents</div>-->
        <!--          <div class="mt-1 conference-description font-noto">当日配布物</div>-->
        <!--        </div>-->

        <!--        <div class="flex flex-col items-center mt-10">-->
        <!--          <img src="@/assets/images/documents.svg" />-->
        <!--        </div>-->
      </div>
      <div class="mt-10 snake-face-base">
        <!--snake face-->
        <div class="hidden snake-face lg:block" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/Elements/SectionTitle'

export default {
  name: 'ConferenceSection',
  components: {
    SectionTitle,
  },
  data() {
    return {
      keynote1: {
        image: 'keynote1.svg',
        date: '2021.10.14 10:30 -',
      },
      keynote2: {
        image: 'keynote2.svg',
        date: '2021.10.15 10:30 -',
      },
    }
  },
}
</script>

<style scoped>
.conference {
  box-sizing: border-box;
  width: 100%;
  /* height: 2198.17px; */
  align-items: center;
  background: #f3d34f;
  order: 5;
  flex: none;
  flex-grow: 0;
}

.conference-mid-vector {
  /* width: 72.28px; */
  height: 23.01px;
  text-align: center;
}

.conference-small-vector {
  /* width: 59px; */
  height: 23px;
}

.conference-keynote-separator {
  /* width: 942.2px; */
  height: 0px;
  left: calc(50% - 942.2px / 2 - 9.32px);
  top: 718.52px;
  border: 1px solid #fcfcfd;
  /* tartiary/tartiary-50 */
}

.conference-label {
  height: 30px;
  left: calc(50% - 143.58px / 2 - 0.42px);
  top: 71.01px;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  text-align: center;
  color: #1a1623;
}

.conference-description {
  height: 16px;
  left: calc(50% - 75.95px / 2 + 0.18px);
  top: 115.52px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #776103;
}

.conference-frame-timetable {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  padding: 10px 36px;
  text-align: right;
  margin-left: auto;
  background: #fcfcfd;

  /* shadow / base */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.conference-timetable {
  /* width: 179px; */
  height: 20px;

  /* text / ja / .text-xl.text-bold */
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;

  /* identical to box height, or 20px */

  /* primary/primary-700 */
  color: #b32f0f;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
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

<!-- ↓JSONフォーマットです -->
<i18n>
{
  "en": {
    "keynote1": {
      "name": "Hiromu Nishiuchi",
      "title": "",
      "desc": "After working as an Assistant Professor in the Department of Medical Communication at the University of Tokyo Graduate School of Medicine, Deputy Director of the University Hospital Medical Information Network Research Center, and a visiting researcher at Dana-Farber/Harvard Cancer Research Center, he founded Data Vehicle, Inc. in November 2014. He is engaged in the development and sales of extended analytics tools such as \"dataDiver,\" utilizing his own expertise, as well as supporting public and private sector data utilization projects. His publications include the \"Statistics is the Strongest Study\" series, which has sold over 500,000 copies, and \"Statistics Will Save Japan\" (Chuokoron Shinsha). He is also a member of the Advisory Board of EBPM (Evidence Based Policy Making) of the Cabinet Office since 2020."
    },
    "keynote2": {
      "name": "Comming soon...",
      "title": "Comming soon...",
      "desc": "Comming soon..."
    }
  },
  "ja": {
    "keynote1": {
      "name": "西内 啓 / Hiromu Nishiuchi",
      "title": "",
      "desc": "東京大学大学院医学系研究科医療コミュニケーション学分野助教、大学病院医療情報ネットワーク研究センター副センター長、ダナファーバー/ハーバードがん研究センター客員研究員を経て、2014年11月より株式会社データビークルを創業。<br/>      自身のノウハウを活かした拡張アナリティクスツール「dataDiver」などの開発・販売と、官民のデータ活用プロジェクト支援に従事。著書に累計50万部を突破した『統計学が最強の学問である』シリーズのほか、『統計学が日本を救う』（中央公論新社）など。<br/>      2020年より内閣府EBPM(Evidence Based Plicy Making: 科学的根拠に基づく政策立案政策立案)アドバイザリーボードメンバーも務める。"
    },
    "keynote2": {
      "name": "Comming soon...",
      "title": "Comming soon...",
      "desc": "Comming soon..."
    }
  }
}
</i18n>
