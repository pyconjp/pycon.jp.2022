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

        <div class="mt-10">
          <template v-for="(keynote, index) in ['keynote1', 'keynote2']">
            <div
              v-if="index !== 0"
              :key="'separator_' + index"
              class="hidden mt-12 lg:block conference-keynote-separator"
            />

            <div :key="'talk_' + index" class="flex flex-col mt-10">
              <div class="flex flex-col items-center lg:flex-row">
                <!-- left image -->
                <div class="relative w-full lg:flex-1">
                  <div class="keynote-bg">
                    <img
                      class="relative object-cover w-11/12 w-full h-5/6 keynote-clip lg:flex-1"
                      :src="keynote_info[keynote].image"
                      :alt="`${keynote}_img`"
                    />
                  </div>
                </div>

                <!-- right text -->
                <div
                  class="flex flex-col mt-6 lg:mt-0 lg:ml-10 w-12/12 lg:flex-[2_2_0]"
                >
                  <div class="text-tartiary-700 font-fira">
                    {{ $t(`${keynote}.date`) }}
                  </div>
                  <div
                    class="mt-1 font-bold font-fira text-primary-900"
                    v-html="$t(`${keynote}.name`)"
                  ></div>
                  <p
                    class="font-bold text-tartiary-900 font-noto-sans-jp"
                    v-html="$t(`${keynote}.desc`)"
                  ></p>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="mt-12 flex lg:w-full lg:items-end flex-col">
          <nuxt-link :to="localePath('/timetable')">
            <div class="px-9 py-3 bg-tertiary-50 text-primary-700 rounded">
              <div
                class="font-noto underline text-xl font-bold lg:text-left text-center"
              >
                {{ $t('timetable') }}
                <ArrowNarrowRightIcon class="inline w-6 h-6 my-auto" />
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="mt-10 snake-face-base">
        <!--snake face-->
        <div class="hidden snake-face lg:block" />
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowNarrowRightIcon } from '@vue-hero-icons/solid'
import SectionTitle from '@/components/Elements/SectionTitle'

const KEYNOTE_INFO = {
  keynote1: {
    image: require('assets/images/keynote1.jpg'),
  },
  keynote2: {
    image: require('assets/images/keynote2.jpg'),
  },
}

export default {
  name: 'ConferenceSection',
  components: {
    SectionTitle,
    ArrowNarrowRightIcon,
  },
  data: () => ({ keynote_info: KEYNOTE_INFO }),
}
</script>

<style lang="scss" scoped>
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

.keynote-clip {
  clip-path: polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%);
}

.keynote-bg::before {
  content: '';
  position: absolute;
  top: 1.5rem;
  left: -1rem;
  width: calc(100% + 0.5rem);
  height: calc(100% - 0.5rem);
  background-color: #b32f0f;
  clip-path: polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%);
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

<i18n>
{
  "en": {
    "keynote1": {
      "date": "OCTOBER 14 2022 10:30AM -",
      "name": "Mark Shannon",
      "title": "",
      "desc": "Mark has been using Python since 2005, and has been contributing to CPython since 2010. After a long interlude working on static analysis tools, he has returned to working on speeding up Python over the last couple of years. His academic and commercial work is focused on compilers, virtual machines and static analysis for Python. His Ph.D. was on building virtual machines for dynamic languages. He is the author of various PEPs including 412, 590, 626 and 659. <br/>Mark is currently working as the technical lead of the \"Faster CPython\" team funded by Microsoft."
    },
    "keynote2": {
      "date": "OCTOBER 15 2022 10:30AM -",
      "name": "Hiromu Nishiuchi",
      "title": "",
      "desc": "After working as an Assistant Professor in the Department of Medical Communication at the University of Tokyo Graduate School of Medicine, Deputy Director of the University Hospital Medical Information Network Research Center, and a visiting researcher at Dana-Farber/Harvard Cancer Research Center, he founded Data Vehicle, Inc. in November 2014. He is engaged in the development and sales of extended analytics tools such as \"dataDiver,\" utilizing his own expertise, as well as supporting public and private sector data utilization projects. His publications include the \"Statistics is the Strongest Study\" series, which has sold over 500,000 copies, and \"Statistics Will Save Japan\" (Chuokoron Shinsha). He is also a member of the Advisory Board of EBPM (Evidence Based Policy Making) of the Cabinet Office since 2020."
    },
    "timetable": "Timetable"
  },
  "ja": {
    "keynote1": {
      "date": "2022.10.14 10:30 -",
      "name": "Mark Shannon",
      "title": "",
      "desc": "2005年からPythonを使い始め、2010年からCPythonにコントリビュートしています。静的解析ツールの開発に長い間携わっていた後、ここ数年はPythonの高速化に取り組んでいます。彼の学術的および商業的な研究は、Pythonのコンパイラ、仮想マシン、静的解析に重点を置いています。博士号は、動的言語用の仮想マシンの構築に関するもので、412, 590, 626, 659 など、さまざまな PEP の著者でもあります。<br/>現在は、Microsoftの資金提供による \"Faster CPython\"チームの技術リーダーとして働いています。"
    },
    "keynote2": {
      "date": "2022.10.15 10:30 -",
      "name": "西内 啓 / Hiromu Nishiuchi",
      "title": "",
      "desc": "東京大学大学院医学系研究科医療コミュニケーション学分野助教、大学病院医療情報ネットワーク研究センター副センター長、ダナファーバー/ハーバードがん研究センター客員研究員を経て、2014年11月より株式会社データビークルを創業。<br/>      自身のノウハウを活かした拡張アナリティクスツール「dataDiver」などの開発・販売と、官民のデータ活用プロジェクト支援に従事。著書に累計50万部を突破した『統計学が最強の学問である』シリーズのほか、『統計学が日本を救う』（中央公論新社）など。<br/>      2020年より内閣府EBPM(Evidence Based Policy Making: 科学的根拠に基づく政策立案)アドバイザリーボードメンバーも務める。"
    },
    "timetable": "タイムテーブル詳細"
  }
}
</i18n>
