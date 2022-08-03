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
      </div><!-- ダイヤモンドスポンサー -->

      <div class="mt-10 mb-10 separator" /><!-- Separator -->
      
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
    SectionTitle,
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
.snake-base {
  @media (min-width: 1024px) {
    background-image: url('@/assets/images/section_bg_img_left_black.svg');
  }
}
</style>