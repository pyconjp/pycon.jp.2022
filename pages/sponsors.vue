<template>
<div>
  <subpage-hero-section title="SPONSOR" subtitle="スポンサー">
    <div class="w-10/12 mx-auto lg:w-7/12">
      <sponsor-news-card :primary="true" />
    </div>
  </subpage-hero-section>
  <div class="component-border-top">
    <!-- ダイヤモンドスポンサー -->
    <div class="text-center component-border-top bg-secondary-400">
      <section-title main="DIAMOND" sub="ダイヤモンドスポンサー"/>
      <div class="flex flex-col items-center mt-20">
        <diamond-item :needs-introduction="true" />
      </div>

      <!-- snake -->
      <div class="snake-face-base">
        <div class="hidden snake-face-left-orange lg:block" />
      </div>
    </div>
    <!-- プラチナスポンサー -->
    <div class="text-center component-border-top bg-tertiary-100">
      <section-title main="PLATINUM" sub="プラチナスポンサー" :primary="false"/>
      <div class="flex flex-col items-center">
        <platinum-list :needs-introduction="true" />
      </div>
      <!-- snake -->
      <div class="snake-face-base">
        <div class="hidden snake-face-right-yello lg:block" />
      </div>
    </div>
    <!-- ゴールドスポンサー -->
    <div class="text-center component-border-top bg-secondary-400">
      <section-title main="GOLD" sub="ゴールドスポンサー"/>
      <div class="flex flex-col items-center">
        <gold-list :needs-introduction="true" />
      </div>

      <!-- snake -->
      <div class="snake-face-base">
        <div class="hidden snake-face-left-orange lg:block" />
      </div>
    </div>
    <!-- シルバースポンサー -->
    <div class="text-center component-border-top bg-tertiary-100">
      <section-title main="SILVER" sub="シルバースポンサー" :primary="false"/>
      <div class="flex flex-col items-center">
        <silver-list />
      </div>

      <!-- snake -->
      <div class="snake-face-base">
        <div class="hidden snake-face-right-yello lg:block" />
      </div>
    </div>
    <!-- スペシャルスポンサー -->
    <div class="text-center component-border-top bg-secondary-400">
      <section-title main="SPECIAL" sub="特別スポンサー"/>
      <div class="flex flex-col items-center">
        <div class="mt-10 mb-10 separator" /><!-- Separator -->
        <special-list />
      </div>

      <!-- snake -->
      <div class="snake-face-base">
        <div class="hidden snake-face-left-orange lg:block" />
      </div>
    </div>
    <!-- パトロン -->
    <div class="text-center component-border-top bg-tertiary-100">
      <section-title main="PATRON" sub="パトロン" :primary="false"/>
      <div class="flex flex-col items-center">
        <patron-list />
      </div>

      <!-- snake -->
      <div class="snake-face-base">
        <div class="hidden snake-face-right-yello lg:block" />
      </div>
    </div>
    <!-- スポンサー募集 9/13（1か月前）までシルバースポンサーだけ募集予定 -->
    <div class="text-center component-border-top bg-primary-500">
      <div
        class="w-10/12 mx-auto mt-24 mb-12 text-left bg-tertiary-50 lg:w-7/12 chipped-card"
      >
      <div class="px-6 py-8 text-lg lg:py-16 lg:px-24">
        <div class="flex flex-col">
          <div class="flex flex-row pb-8 pl-8 text-left">
            <div class="mr-1 sponsor-text-icon" />
            <div class="font-bold sponsor-text-title text-tertiary-900 font-fira ">
              {{ $t('title') }}
            </div>
          </div>
          <div class="pb-8 pl-8 text-left">
            {{ $t('description') }}
          </div>

          <div
            class="pb-8 pr-8 text-lg font-bold text-center underline lg:text-right text-primary-700"
          >
            <outer-link :to="$t('url').toString()">
              {{ $t('link') }}
              <ArrowNarrowRightIcon class="inline w-4 h-4 mb-2" />
            </outer-link>
          </div>
        </div>
      </div>
    </div>

      <!-- snake -->
      <div class="snake-face-base">
        <div class="hidden snake-face-left-black lg:block" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ArrowNarrowRightIcon } from '@vue-hero-icons/outline'
import SectionTitle from '@/components/Elements/SectionTitle'
import sponsorsMixin from '@/utils/sponsors_mixin'
import SubpageHeroSection from '@/components/Elements/SubpageHeroSection'
import SponsorNewsCard from '@/components/Elements/SponsorNewsCard'
import DiamondItem from '@/components/Elements/DiamondItem'
import PlatinumList from '@/components/Elements/PlatinumList'
import GoldList from '@/components/Elements/GoldList'
import SilverList from '@/components/Elements/SilverList'
import SpecialList from '@/components/Elements/SpecialList'
import PatronList from '@/components/Elements/PatronList'

export default {
  name: 'SponsorsPage',
  components: {
    SectionTitle,
    SponsorNewsCard,
    SubpageHeroSection,
    DiamondItem,
    PlatinumList,
    GoldList,
    SilverList,
    SpecialList,
    PatronList,
    ArrowNarrowRightIcon,
  },
  mixins: [sponsorsMixin],
}
</script>

<style scoped>
.separator{
  width: 59px;
  height: 23px;
  background-image: url("@/assets/images/separator.svg");
}
.card_frame {
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 90%, 100% 100%, 10% 100%, 0% 90%);
}

.snake-face-base {
  width: 100%;
  height: 36px;
  @media (min-width: 1024px) {
    height: 90px;
  }
}
.snake-face-left-orange {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;
  background-image: url('@/assets/images/section_bg_img_left_orange.svg');
}

.snake-face-right-yello {
  position: absolute;
  width: 150px;
  height: 90px;
  left: 85px;

  background-image: url('@/assets/images/section_bg_img_right_yellow.svg');
}

.snake-face-left-black {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_black.svg');
}

.sponsor-text-icon {
  width: 31px;
  height: 31px;
  background-image: url('@/assets/images/card_title_icon.svg');
}

.sponsor-text-title {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0.02em;
  @media screen(lg) {
    font-size: 36px;
  }
}
</style>

<i18n>
{
  "ja": {
    "title": "スポンサー募集中！",
    "description": "PyCon JP 2022のスポンサーシップを募集中です。2次募集期間は 2022/06/14 (火) - 開催1ヶ月前 です。Pythonをキーワードに集まる多くの参加者に、Pythonを扱う企業であることや、エンジニアコミュニティを理解し支援する風土のある企業であること、または自社のサービスをアピールすることが可能です。",
    "url": "https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship.html",
    "link": "スポンサー募集概要・応募フォーム"
  },
  "en": {
    "title": "Sponsors wanted!",
    "description": "Sponsorships for PyCon JP 2022 are now being accepted, with the second call for applications being accepted from Tuesday, 06/14/2022 - one month prior to the event. We look forward to receiving applications from companies that want to appeal to the Python community!",
    "url": "https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship-en.html",
    "link": "Sponsorship Application Form"
  }
}
</i18n>
