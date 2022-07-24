<template>
  <div class="text-center component-border-top bg-tertiary-100">
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
        <div class="card_frame diamond_card bg-tertiary-50">
          <img :src="diamond_sponser.logo" class="object-none object-center w-full h-full" />
        </div>
        <!--会社名-->
        <outer-link :to="diamond_sponser.url">
            {{ diamond_sponser.name }}
          </outer-link>
        <!--<a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" :href="diamond_sponser.url">
          {{ diamond_sponser.name }}
          <ExternalLinkIcon class="w-5 h-5" />
        </a>-->
      </div>

      <div class="mt-10 mb-10 separator" />

      <!-- プラチナスポンサー -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PLATINUM</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">プラチナスポンサー</h4>
        </div>
        <div class="flex flex-row">
          <!-- プラチナスポンサー1 -->
          <div v-for="platinum_sponser in platinum_sponsers" :key="platinum_sponser.id" class="m-5">
            <!--ロゴ-->
            <div class="card_frame platinum_card bg-tertiary-50">
              <img :src="platinum_sponser.logo" class="object-none object-center w-full h-full" />
            </div>
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" :href="platinum_sponser.url">
              {{ platinum_sponser.name }}
              <ExternalLinkIcon class="w-5 h-5" />
            </a>
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
          <div v-for="gold_sponser in gold_sponsers" :key="gold_sponser.id" class="m-5">
            <!--ロゴ-->
            <div class="card_frame gold_card bg-tertiary-50">
              <img :src="gold_sponser.logo" class="object-none object-center w-full h-full" />
            </div>
            
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" :href="gold_sponser.url">
              {{ gold_sponser.name }}
              <ExternalLinkIcon class="w-5 h-5" />
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
          <div v-for="silver_sponser in silver_sponsers" :key="silver_sponser.id" class="m-5">
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" :href="silver_sponser.url">
              {{ silver_sponser.name }}
              <ExternalLinkIcon class="w-5 h-5" />
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
          <div v-for="special_sponser in special_sponsers" :key="special_sponser.id" class="m-5">
            <!--ロゴ-->
            <div class="card_frame gold_card bg-tertiary-50">
              <img :src="special_sponser.logo" class="object-none object-center w-full h-full" />
            </div>
            
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" :href="special_sponser.url">
              {{ special_sponser.name }}
              <ExternalLinkIcon class="w-5 h-5" />
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
            <img :src="patron.logo" class="object-none object-center w-full h-full" />
              {{ patron.name }}
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
import { ExternalLinkIcon } from '@vue-hero-icons/outline'
import SectionTitle from '@/components/Elements/SectionTitle'

export default {
  name: 'SponsorSection',
  components: {
    SectionTitle,
    ExternalLinkIcon,
  },
  data() {
    return {
      diamond_sponser:
        {id:1, name: "ダイヤモンドスポンサー", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
      platinum_sponsers:[
        {id:1, name: "プラチナスポンサー1", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:2, name: "プラチナスポンサー2", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:3, name: "プラチナスポンサー3", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
      ],
      gold_sponsers:[
        {id:1, name: "ゴールドスポンサー1", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:2, name: "ゴールドスポンサー2", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:3, name: "ゴールドスポンサー3", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:4, name: "ゴールドスポンサー4", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:5, name: "ゴールドスポンサー5", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:6, name: "ゴールドスポンサー6", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:7, name: "ゴールドスポンサー7", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:8, name: "ゴールドスポンサー8", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
      ],
      silver_sponsers:[
        {id:1, name: "シルバースポンサー", url: "https://pycon.jp"},
        {id:2, name: "シルバースポンサー", url: "https://pycon.jp"},
        {id:3, name: "シルバースポンサー", url: "https://pycon.jp"},
        {id:4, name: "シルバースポンサー", url: "https://pycon.jp"},
        {id:5, name: "シルバースポンサー", url: "https://pycon.jp"},
        {id:6, name: "シルバースポンサー", url: "https://pycon.jp"},
        {id:7, name: "シルバースポンサー", url: "https://pycon.jp"},
        {id:8, name: "シルバースポンサー", url: "https://pycon.jp"},
        {id:9, name: "シルバースポンサー", url: "https://pycon.jp"},
        {id:10, name: "シルバースポンサー", url: "https://pycon.jp"},
      ],
      special_sponsers:[
        {id:1, name: "特別スポンサー", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:2, name: "特別スポンサー", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:3, name: "特別スポンサー", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:4, name: "特別スポンサー", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:5, name: "特別スポンサー", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
        {id:6, name: "特別スポンサー", url: "https://pycon.jp", logo: require("@/assets/images/association-logo.svg")},
      ],
      patrons: [
        {id:1, name: "パトロン", url: "https://pycon.jp", logo: require("@/assets/images/separator.svg")},
        {id:2, name: "パトロン", url: "https://pycon.jp", logo: require("@/assets/images/separator.svg")},
        {id:3, name: "パトロン", url: "https://pycon.jp", logo: require("@/assets/images/separator.svg")},
        {id:4, name: "パトロン", url: "https://pycon.jp", logo: require("@/assets/images/separator.svg")},
        {id:5, name: "パトロン", url: "https://pycon.jp", logo: require("@/assets/images/separator.svg")},
      ],
    }
  }
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
