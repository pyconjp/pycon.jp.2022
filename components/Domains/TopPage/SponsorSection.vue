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
          <div class="card_frame diamond_card bg-tertiary-50" >
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
          <div class="flex flex-row">
            <div v-for="platinum in platinums" :key="platinum.id" class="m-5">
              <!--ロゴ-->
              <div class="card_frame bg-tertiary-50 platinum_card" >
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
          <div class="grid grid-cols-4">
            <div v-for="gold in golds" :key="gold.id" class="m-5">
              <!--ロゴ-->
              <div class="card_frame bg-tertiary-50 gold_card" >
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
            <div class="grid grid-cols-3">
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
        // 言語別データ作成
        const hashJa = {};
        const hashEn = {};
        const hashi18n = {};
        const sponsorRow = this.sponsors.body[i];
        console.log(sponsorRow); // eslint-disable-line no-console

        // id,実装,実装可能,セクション,name_ja,name_en,担当,掲載情報確定,ロゴ,introduction_ja,introduction_en,link,other,logo_file,sponsor_type
        // id
        hashJa.id = sponsorRow.id;
        hashEn.id = sponsorRow.id;
        // name
        hashJa.name = sponsorRow.name_ja;
        hashEn.name = sponsorRow.name_en;
        // introduction
        hashJa.introduction = sponsorRow.introduction_ja;
        hashEn.introduction = sponsorRow.introduction_en;
        // url
        hashJa.url = sponsorRow.url;
        hashEn.url = sponsorRow.url;
        // logo_file
        if(sponsorRow.logo_file.length > 0){
          hashJa.logo_file = sponsorRow.logo_file;
          hashEn.logo_file = sponsorRow.logo_file;
        }else{
          hashJa.logo_file = "association-logo.svg";
          hashEn.logo_file = "association-logo.svg";
        }
        // sponsor_type
        hashJa.sponsor_type = sponsorRow.sponsor_type;
        hashEn.sponsor_type = sponsorRow.sponsor_type;
        // create hash
        hashi18n.ja = hashJa;
        hashi18n.en = hashEn;
      
        if(sponsorRow.sponsor_type === "diamond"){
          // ダイアモンドスポンサー
          this.diamond[dm++] = hashi18n;
        }else if(sponsorRow.sponsor_type === "platinum"){
          // プラチナスポンサー
          this.platinums[pl++] = hashi18n;
        }else if(sponsorRow.sponsor_type === "gold"){
          // ゴールドスポンサー
          this.golds[g++] = hashi18n;
        }else if(sponsorRow.sponsor_type === "silver"){
          // シルバースポンサー
          this.silvers[sl++] = hashi18n;
        }else if(sponsorRow.sponsor_type === "special"){
          // 特別スポンサー
          this.specials[sp++] = hashi18n;
        }
      }
    },
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