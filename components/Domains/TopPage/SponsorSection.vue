<template>
  <div class="text-center component-border-top bg-tertiary-100">
    <section-title main="SPONSOR" sub="スポンサー" :primary="false" />
    <div class="flex flex-col items-center">
      <div class="mt-10 mb-10 separator" />
      <!-- Separator -->

      <!-- ダイヤモンドスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">
            DIAMOND
          </h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">
            ダイヤモンドスポンサー
          </h4>
        </div>

        <diamond-item />
      </div>

      <div class="mt-10 mb-10 separator" />
      <!-- Separator -->

      <!-- プラチナスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">
            PLATINUM
          </h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">
            プラチナスポンサー
          </h4>
        </div>

        <platinum-list />
      </div>
      <div class="mt-10 mb-10 separator" />
      <!-- Separator -->

      <!-- ゴールドスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">GOLD</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">
            ゴールドスポンサー
          </h4>
        </div>

        <gold-list />
      </div>

      <div class="mt-10 mb-10 separator" />
      <!-- Separator -->

      <!-- シルバースポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">SILVER</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">
            シルバースポンサー
          </h4>
        </div>
        <silver-list />
      </div>

      <div class="mt-10 mb-10 separator" />
      <!-- Separator -->

      <!-- 特別スポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">
            SPECIAL
          </h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">
            特別スポンサー
          </h4>
        </div>
        <special-list />
      </div>

      <div class="mt-10 mb-10 separator" />

      <!-- パトロン -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PATRON</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">
            パトロン
          </h4>
        </div>
        <!-- パトロン -->
        <patron-list />
      </div>
    </div>
    <!-- snake -->
    <div class="snake-face-base">
      <div class="hidden snake-face-left-black lg:block" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/Elements/SectionTitle'
import sponsorsMixin from '@/utils/sponsors_mixin'
import DiamondItem from '@/components/Elements/DiamondItem'
import PlatinumList from '@/components/Elements/PlatinumList'
import GoldList from '@/components/Elements/GoldList'
import SilverList from '@/components/Elements/SilverList'
import SpecialList from '@/components/Elements/SpecialList'
import PatronList from '@/components/Elements/PatronList'

export default {
  name: 'SponsorSection',
  components: {
    SectionTitle,
    DiamondItem,
    PlatinumList,
    GoldList,
    SilverList,
    SpecialList,
    PatronList,
  },
  mixins: [sponsorsMixin],
}
</script>

<style scoped>
.separator {
  width: 59px;
  height: 23px;
  background-image: url('@/assets/images/separator.svg');
}

.snake-face-base {
  width: 100%;
  height: 36px;
  @media (min-width: 1024px) {
    height: 90px;
  }
}
.snake-face-left-black {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_black.svg');
}
</style>
