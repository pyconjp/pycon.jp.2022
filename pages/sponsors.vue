<template>
<div>
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
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">Media</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">メディアスポンサー</h4>
          <div class="flex flex-col items-center">
            <media-list :needs-introduction="true" />
          </div>
        </div>
      </div>
      <div class="mt-10 mb-10 separator" /><!-- Separator -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">Food</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">食事提供</h4>
          <div class="flex flex-col items-center">
            <food-list :needs-introduction="true" />
          </div>
        </div>
      </div>
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
</div>
</template>

<script>
import SectionTitle from '@/components/Elements/SectionTitle'
import sponsorsMixin from '@/utils/sponsors_mixin'
import SubpageHeroSection from '@/components/Elements/SubpageHeroSection'
import SponsorNewsCard from '@/components/Elements/SponsorNewsCard'
import DiamondItem from '@/components/Elements/DiamondItem'
import PlatinumList from '@/components/Elements/PlatinumList'
import GoldList from '@/components/Elements/GoldList'
import SilverList from '@/components/Elements/SilverList'
import MediaList from '@/components/Elements/MediaList'
import FoodList from '@/components/Elements/FoodList'
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
    MediaList,
    FoodList,
    PatronList,
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
</style>