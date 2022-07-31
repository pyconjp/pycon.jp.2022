<template>
  <div class="text-center component-border-top bg-tertiary-100" >
    <section-title main="SPONSOR" sub="スポンサー" :primary="false"/>
    <div class="flex flex-col items-center">
      <div class="mt-10 mb-10 separator" />
      <!-- ダイヤモンドスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">DIAMOND</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">ダイヤモンドスポンサー</h4>
        </div>
        <!--ロゴ-->
        <div class="card_frame diamond_card bg-tertiary-50" >
          <outer-link :to="sponsors.body[0].link">
            <img 
            :src="require(`@/assets/images/sponsors/${sponsors.body[0].logo_file}`)"
            class="object-none object-center w-full h-full" />
          </outer-link>
        </div>
        <!--会社名-->
        <outer-link :to="sponsors.body[0].link" class="mt-2 text-2xl font-bold font-noto text-primary-700">
            {{ sponsors.body[0].name_ja }}
        </outer-link>
      </div>

      <div class="mt-10 mb-10 separator" />

      <!-- プラチナスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PLATINUM</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">プラチナスポンサー</h4>
        </div>
        <div class="flex flex-row">
          <div v-for="platinum in platinums" :key="platinum.id" class="m-5">
            <!--ロゴ-->
            <div class="card_frame platinum_card bg-tertiary-50">
              <outer-link :to="platinum.link">
              <img 
              :src="require(`@/assets/images/sponsors/${platinum.logo_file}`)"
               class="object-none object-center w-full h-full" />
               </outer-link>
            </div>
            <!--会社名-->
            <outer-link :to="platinum.link" class="mt-2 text-2xl font-bold font-noto text-primary-700">
            {{ platinum.name_ja }}
            </outer-link>
          </div>      
        </div>
      </div>

      <div class="mt-10 mb-10 separator" />

      <!-- ゴールドスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">GOLD</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">ゴールドスポンサー</h4>
        </div>
        <div class="grid grid-cols-4">
          <!-- ゴールドスポンサー -->
          <div v-for="gold in golds" :key="gold.id" class="m-5">
            <!--ロゴ-->
            <div class="card_frame gold_card bg-tertiary-50">
              <img 
              :src="require(`@/assets/images/sponsors/${gold.logo_file}`)"
               class="object-none object-center w-full h-full" />
            </div>
            
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" :href="gold.link">
              {{ gold.name_ja }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 mb-10 separator" />

      <!-- シルバースポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">SILVER</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">シルバースポンサー</h4>
        </div>
        <div class="grid grid-cols-3">
          <!-- シルバースポンサー -->
          <div v-for="silver_sponser in silvers" :key="silver_sponser.id" class="m-5">
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" :href="silver_sponser.link">
              {{ silver_sponser.name_ja }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 mb-10 separator" />


      <!-- 特別スポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">SPECIAL</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">特別スポンサー</h4>
        </div>
        <div class="grid grid-cols-4">
          <!-- 特別スポンサー -->
          <div v-for="special_sponser in specials" :key="special_sponser.id" class="m-5">
            <!--ロゴ-->
            <div class="card_frame gold_card bg-tertiary-50">
              <img 
              :src="require(`@/assets/images/sponsors/${special_sponser.logo_file}`)"
              class="object-none object-center w-full h-full" />
            </div>
            
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" :href="special_sponser.link">
              {{ special_sponser.name_ja }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 mb-10 separator" />


      <!-- パトロン -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PATRON</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">パトロン</h4>
        </div>
        <div class="grid grid-cols-4">
          <!-- パトロン -->
          <div v-for="patron in patrons" :key="patron.id" class="m-5">
            <!--パトロン名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" :href="patron.url">
            <img
            :src="require(`@/assets/images/sponsors/${patron.logo_file}`)"
            class="object-none object-center w-4" />
              {{ patron.name_ja }}
            </a>
          </div>
        </div>
      </div>

      <!--snake face-->
      <div class="flex content-end w-11/12 h-32 bg-right-bottom bg-no-repeat snake-base" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/Elements/SectionTitle'
import OuterLink from '@/components/Elements/OuterLink'

export default {
  name: 'SponsorSection',
  components: {
    OuterLink,
    SectionTitle
  },
  data() {
    return {
      sponsors: [],
      platinums: [],
      golds: [],
      silvers: [],
      specials: [],
      patrons: []
    }
  },
  async fetch() {
    this.sponsors = await this.$content("sponsors")
    .only(['body'])
    .fetch()
    this.filter_sponsors();
  },
  methods: {
    filter_sponsors() {
      // const vm = this;
      let pl = 0;
      let g = 0;
      let sl = 0;
      let sp = 0;
      let p = 0;
      for(let i=0;i < this.sponsors.body.length;i++){
        if(this.sponsors.body[i].sponsor_type === "platinum"){
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
        }else if(this.sponsors.body[i].sponsor_type === "patron"){
          this.patrons[p++] = this.sponsors.body[i];
        }
      }
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
  background-image: url("@/assets/images/section_bg_img_left_black.svg");
}
</style>
