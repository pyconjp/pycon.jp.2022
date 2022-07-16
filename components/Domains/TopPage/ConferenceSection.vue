<template>
  <div class="relative mt-20 conference">
    <div class="text-center component-border-top bg-secondary-400">
      <section-title main="CONFERENCE" sub="カンファレンス" />
    </div>

    <div class="flex flex-col conference-frame items-center">
      <!-- Keynote1 start -->
      <div class="flex flex-col conference-inner-frame mt-10">
        <img
          src="@/assets/images/conference_vector1.svg"
          alt="Keynote vector"
          class="conference-mid-vector"
        />
        <div class="conference-label font-noto-sans-js mt-10">Keynote</div>
        <div class="conference-description font-noto-sans-js mt-1">
          基調講演
        </div>

        <div class="flex flex-col mt-10">
          <div class="flex flex-row mt-10">
            <!-- left image -->
            <div class="conference-image-frame">
              <img
                :src="require(`@/assets/images/${keynote1.image}`)"
                class="self-center"
              />
            </div>

            <!-- right text -->
            <div class="flex flex-col conference-description-frame ml-10">
              <div class="text-tartiary-700 font-fira-sans">
                {{ keynote1.date }}
              </div>
              <div class="font-fira-sans text-primary-900 font-bold mt-1">
                {{ keynote1.Jp.name }}
              </div>
              <p
                class="text-tartiary-900 font-bold font-noto-sans-jp"
                v-html="keynote1.Jp.desc"
              ></p>
            </div>
          </div>
        </div>

        <div class="conference-keynote-separator mt-10" />

        <div class="flex flex-col conference-frame mt-10">
          <div class="flex flex-row mt-10">
            <!-- left image -->
            <div class="conference-image-frame">
              <img
                :src="require(`@/assets/images/${keynote2.image}`)"
                class="self-center"
              />
            </div>
            <!-- right text -->
            <div class="flex flex-col conference-description-frame ml-10">
              <div class="text-tartiary-700 font-fira-sans">
                {{ keynote2.date }}
              </div>
              <div class="font-fira-sans text-primary-900 font-bold mt-1">
                {{ keynote2.Jp.name }}
              </div>
              <p
                class="text-tartiary-900 font-bold font-noto-sans-jp"
                v-html="keynote2.Jp.desc"
              ></p>
            </div>
          </div>
        </div>
        <div class="conference-frame-timetable">
          <div class="conference-timetable font-noto-sans-js">
            タイムテーブル詳細
          </div>
          <img src="@/assets/images/right_allow.svg" />
        </div>
      </div>

      <div class="flex flex-col items-center mt-10">
        <img
          src="@/assets/images/conference_vector2.svg"
          alt="Keynote vector"
          class="conference-small-vector"
        />
        <div class="mt-10"></div>
        <div class="conference-label font-noto-sans-js">Documents</div>
        <div class="conference-description font-noto-sans-js mt-1">
          当日配布物
        </div>
      </div>

      <div class="flex flex-col items-center mt-10">
        <img src="@/assets/images/documents.svg" />
      </div>
    </div>
    <div class="mt-10 snake-face-base">
      <!--snake face-->
      <div class="snake-face" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/Elements/SectionTitle'

export default {
  name: 'ConferenceSection',
  components: {
    SectionTitle
  },
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
.conference-frame {
  width: 960.83px;
  /* height: 1878.78px; */
}
.conference-inner-frame {
  width: 960.83px;
  /* height: 1158.51px; */
}

.conference-keynote-separator {
  width: 942.2px;
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

.conference-image-frame {
  width: 504.33px;
  height: 466.15px;
  left: -90.96px;
  top: 199.96px;
}

.conference-description-frame {
  width: 619.43px;
  height: 298px;
  left: 341.4px;
  top: 211.01px;
}

.conference-frame-timetable {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  padding: 10px 36px;
  text-align: right;
  margin-right: 0;
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

.font-bayon {
  font-family: 'Bayon';
  font-style: normal;
}
.font-noto-sans-js {
  font-family: 'Noto Sans JP';
  font-style: normal;
}

.font-fira-sans {
  font-family: 'Fira Sans';
  font-style: normal;
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
