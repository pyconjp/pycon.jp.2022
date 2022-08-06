<template>
  <div class="text-center component-border-top bg-tertiary-100">
    <section-title main="SPONSOR" sub="スポンサー" :primary="false"/>
    <div class="flex flex-col items-center">

      <div class="mt-10 mb-10 separator" /><!-- Separator -->
      
      <!-- ダイヤモンドスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">DIAMOND</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">ダイヤモンドスポンサー</h4>
        </div>
        
        <div v-if="sponsors && diamond && diamond.length > 0 && diamond[0][$i18n.locale]">
          <!--ロゴ-->
          <div class="lg:w-[590px] lg:h-[370px] card_frame bg-tertiary-50 w-[383px] h-[201px]" >
            <outer-link :to="diamond[0][$i18n.locale].url">
              <img 
              :src="require(`@/assets/images/sponsors/${diamond[0][$i18n.locale].logo_file}`)"
              class="object-none object-center w-full h-full" />
            </outer-link>
          </div>
          <!--会社名-->
          <div class="mt-2 underline">
            <outer-link :to="diamond[0][$i18n.locale].url" class="text-2xl font-bold font-noto text-primary-700">
                {{ diamond[0][$i18n.locale].name }}
                <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
            </outer-link>
          </div>
        </div>
        
      </div>

      <div class="mt-10 mb-10 separator" /><!-- Separator -->

      <!-- プラチナスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PLATINUM</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">プラチナスポンサー</h4>
        </div>

        <div v-if="sponsors && platinums && platinums.length > 0">
          <div class="flex flex-col lg:flex-row">
            <div v-for="platinum in platinums" :key="platinum.id" class="m-5">
              <!--ロゴ-->
              <div class="card_frame bg-tertiary-50 w-[383px] h-[201px]" >
                <outer-link :to="platinum[$i18n.locale].url">
                  <img 
                  :src="require(`@/assets/images/sponsors/${platinum[$i18n.locale].logo_file}`)"
                  class="object-none object-center w-full h-full" />
                </outer-link>
              </div>
              <!--会社名-->
              <div class="mt-2 underline">
                <outer-link :to="platinum[$i18n.locale].url" class="text-2xl font-bold font-noto text-primary-700">
                    {{ platinum[$i18n.locale].name }}
                    <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
                </outer-link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="mt-10 mb-10 separator" /><!-- Separator -->

      <!-- ゴールドスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">GOLD</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">ゴールドスポンサー</h4>
        </div>
        
        <!-- ゴールドスポンサー -->
        <div v-if="sponsors && golds && golds.length > 0">
          <div class="grid grid-cols-1 lg:grid-cols-4">
            <div v-for="gold in golds" :key="gold.id" class="m-5">
              <!--ロゴ-->
              <div class="card_frame bg-tertiary-50 w-[284px] h-[147px]" >
                <outer-link :to="gold[$i18n.locale].url">
                  <img 
                  :src="require(`@/assets/images/sponsors/${gold[$i18n.locale].logo_file}`)"
                  class="object-none object-center w-full h-full" />
                </outer-link>
              </div>
              <!--会社名-->
              <div class="mt-2 underline">
                <outer-link :to="gold[$i18n.locale].url" class="text-2xl font-bold font-noto text-primary-700">
                    {{ gold[$i18n.locale].name }}
                    <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
                </outer-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-10 mb-10 separator" /><!-- Separator -->

      <!-- シルバースポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">SILVER</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">シルバースポンサー</h4>
        </div>
          <!-- シルバースポンサー -->
          <div v-if="sponsors && silvers && silvers.length > 0">
            <div class="grid grid-cols-1 lg:grid-cols-3">
              <div v-for="silver in silvers" :key="silver.id" class="m-5">
                <!--会社名-->
                <div class="mt-2 underline">
                  <outer-link :to="silver[$i18n.locale].url" class="text-2xl font-bold font-noto text-primary-700">
                      {{ silver[$i18n.locale].name }}
                      <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
                  </outer-link>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      <div class="mt-10 mb-10 separator" /><!-- Separator -->

      <!-- 特別スポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">SPECIAL</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">特別スポンサー</h4>
        </div>
        <!-- 特別スポンサー -->
        <div v-if="sponsors && specials && specials.length > 0">
          <div class="grid grid-cols-1 lg:grid-cols-4">
            <div v-for="special in specials" :key="special.id" class="m-5">
              <!--ロゴ-->
              <div class="card_frame bg-tertiary-50 w-[284px] h-[147px]" >
                <outer-link :to="special[$i18n.locale].url">
                  <img 
                  :src="require(`@/assets/images/sponsors/${special[$i18n.locale].logo_file}`)"
                  class="object-none object-center w-full h-full" />
                </outer-link>
              </div>
              <!--会社名-->
              <div class="mt-2 underline">
                <outer-link :to="special[$i18n.locale].url" class="text-2xl font-bold font-noto text-primary-700">
                    {{ special[$i18n.locale].name }}
                    <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
                </outer-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-10 mb-10 separator" /><!-- Separator -->
      
      <!-- パトロン -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PATRON</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">パトロン</h4>
        </div>
        <!-- パトロン -->
        <div v-if="sponsors && patrons && patrons.length > 0">
            <div class="grid grid-cols-1 lg:grid-cols-3">
              <div v-for="patron in patrons" :key="patron.id" class="m-5">
                <div class="mt-2 underline">
                  <img 
                    :src="require(`@/assets/images/sponsors/${patron[$i18n.locale].logo_file}`)"
                    class="inline object-none object-center mr-2" />
                  <outer-link :to="patron[$i18n.locale].url" class="inline text-2xl font-bold font-noto text-primary-700">
                      {{ patron[$i18n.locale].name }}
                      <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
                  </outer-link>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      <!--snake face-->
      <div class="flex content-end w-11/12 h-32 bg-right-bottom bg-no-repeat snake-base" />
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from '@vue-hero-icons/outline'
import SectionTitle from '@/components/Elements/SectionTitle'
import OuterLink from '@/components/Elements/OuterLink'
import sponsorsMixin from '@/utils/sponsors_mixin'

export default {
  name: 'SponsorSection',
  components: {
    OuterLink,
    SectionTitle,
    ExternalLinkIcon,
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
.snake-base {
  @media (min-width: 1024px) {
    background-image: url('@/assets/images/section_bg_img_left_black.svg');
  }
}
</style>