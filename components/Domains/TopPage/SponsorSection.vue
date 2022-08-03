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
        {{ diamond.length }}
        {{ diamond }}
        {{ platinums }}
        
        <div v-if="diamond && diamond.length > 0">
        {{ diamond[0][$i18n.locale] }}
        
          <outer-link :to="diamond[0][$i18n.locale].name" class="text-2xl font-bold font-noto text-primary-700">
                {{ diamond[0][$i18n.locale].name }}
                <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
            </outer-link>
        </div>
        
      </div>

      <div class="mt-10 mb-10 separator" /><!-- Separator -->

      <!-- プラチナスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PLATINUM</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">プラチナスポンサー</h4>
        </div>

      </div>
      <div class="mt-10 mb-10 separator" /><!-- Separator -->

      <!-- ゴールドスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">GOLD</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">ゴールドスポンサー</h4>
        </div>
        <div class="grid grid-cols-4">
          <!-- ゴールドスポンサー -->

        </div>
      </div>
      
      <div class="mt-10 mb-10 separator" /><!-- Separator -->

      <!-- シルバースポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">SILVER</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">シルバースポンサー</h4>
        </div>
        <div class="grid grid-cols-3">
          <!-- シルバースポンサー -->
        </div>
      </div>
      
      <div class="mt-10 mb-10 separator" /><!-- Separator -->

      <!-- 特別スポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">SPECIAL</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">特別スポンサー</h4>
        </div>
        <div class="grid grid-cols-4">
          <!-- 特別スポンサー -->
        </div>
      </div>
      
      <div class="mt-10 mb-10 separator" /><!-- Separator -->
      
      <!-- パトロン -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PATRON</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">パトロン</h4>
        </div>
        <div class="grid grid-cols-4">
          <!-- パトロン -->
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

export default {
  name: 'SponsorSection',
  components: {
    OuterLink,
    SectionTitle,
    ExternalLinkIcon,
  },
  data() {
    return {
      sponsors: [],
      diamond: [],
      platinums: [],
      golds: [],
      silvers: [],
      specials: [],
      // patrons: []
    }
  },
  async fetch() {
    this.sponsors = await this.$content("sponsors")
    .only(['body'])
    .fetch()
    
    this.filter_sponsors()
  },
  methods: {
    filter_sponsors() {
      let dm = 0;
      let pl = 0;
      let g = 0;
      let sl = 0;
      let sp = 0;
      for(let i=0;i < this.sponsors.body.length;i++){
        if(this.sponsors.body[i].sponsor_type === "diamond"){
          // ダイアモンドスポンサー
          this.diamond[dm++] = this.devide_i18n(this.sponsors.body[i]);
        }else if(this.sponsors.body[i].sponsor_type === "platinum"){
          // プラチナスポンサー
          this.platinums[pl++] = this.sponsors.body[i];
        }else if(this.sponsors.body[i].sponsor_type === "gold"){
          // ゴールドスポンサー
          this.golds[g++] = this.sponsors.body[i];
        }else if(this.sponsors.body[i].sponsor_type === "silver"){
          // シルバースポンサー
          this.silvers[sl++] = this.sponsors.body[i];
        }else if(this.sponsors.body[i].sponsor_type === "special"){
          // 特別スポンサー
          this.specials[sp++] = this.sponsors.body[i];
        }
      }
    },
    devide_i18n(sponsorRow){
      const hashJa = {};
      const hashEn = {};
      const result = {};
      // id
      hashJa.id = sponsorRow[0];
      hashEn.id = sponsorRow[0];
      // name
      hashJa.name = sponsorRow[4];
      hashEn.name = sponsorRow[5];
      // introduction
      hashJa.introduction = sponsorRow[9];
      hashEn.introduction = sponsorRow[10];
      // url
      hashJa.url = sponsorRow[11];
      hashEn.url = sponsorRow[11];
      // logo_file
      hashJa.logo_file = sponsorRow[13];
      hashEn.logo_file = sponsorRow[13];
      // sponsor_type
      hashJa.sponsor_type = sponsorRow[14];
      hashEn.sponsor_type = sponsorRow[14];
      
      result.ja = hashJa;
      result.en = hashEn;
      
      return result;
    }
  },
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
.diamond_card{
  width: 590px;
  height: 370px;
}

.platinum_card{
  width: 383px;
  height: 201px;
}

.gold_card{
  width: 284px;
  height: 147px;
}
.snake-base {
  @media (min-width: 1024px) {
    background-image: url('@/assets/images/section_bg_img_left_black.svg');
  }
}
</style>