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
        <div class="bg-center bg-no-repeat card_frame diamond_card bg-tertiary-50 diamond_logo" />
        <!--会社名-->
        <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
          ダイヤモンドスポンサー会社名
          <ExternalLinkIcon class="w-5 h-5" />
        </a>
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
          <div class="m-5">
            <!--ロゴ-->
            <div class="bg-center bg-no-repeat card_frame platinum_card bg-tertiary-50 platinum_logo_1" />
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              プラチナスポンサー1
              <ExternalLinkIcon class="w-5 h-5" />
            </a>
          </div>
          <!-- プラチナスポンサー2-->
          <div class="m-5">
            <!--ロゴ-->
            <div class="bg-center bg-no-repeat card_frame platinum_card bg-tertiary-50 platinum_logo_2" />
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              プラチナスポンサー2
              <ExternalLinkIcon class="w-5 h-5" />
            </a>
          </div>
          <!-- プラチナスポンサー3 -->
          <div class="m-5">
            <!--ロゴ-->
            <div class="bg-center bg-no-repeat card_frame platinum_card bg-tertiary-50 platinum_logo_3" />
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              プラチナスポンサー3
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
          <div class="m-5">
            <!--ロゴ-->
            <div class="bg-center bg-no-repeat card_frame gold_card bg-tertiary-50 platinum_logo_3" />
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              ゴールドスポンサー
              <ExternalLinkIcon class="w-5 h-5" />
            </a>
          </div>
          <!-- ゴールドスポンサー -->
          <div>ゴールドスポンサー</div>
          <!-- ゴールドスポンサー -->
          <div>ゴールドスポンサー</div>
          <!-- ゴールドスポンサー -->
          <div>ゴールドスポンサー</div>
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
          <div class="m-5">
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              シルバースポンサー1
              <ExternalLinkIcon class="w-5 h-5" />
            </a>
          </div>
          <!-- シルバースポンサー -->
          <div class="m-5">
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              シルバースポンサー2
              <ExternalLinkIcon class="w-5 h-5" />
            </a>
          </div>
          <!-- シルバースポンサー -->
          <div class="m-5">
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              シルバースポンサー3
              <ExternalLinkIcon class="w-5 h-5" />
            </a>
          </div>
          <!-- シルバースポンサー -->
          <div class="m-5">
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              シルバースポンサー4
              <ExternalLinkIcon class="w-5 h-5" />
            </a>
          </div>
          <!-- シルバースポンサー -->
          <div class="m-5">
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              シルバースポンサー
              <ExternalLinkIcon class="w-5 h-5" />
            </a>
          </div>
          <!-- シルバースポンサー -->
          <div class="m-5">
            <!--会社名-->
            <a class="inline-flex items-center font-bold font-noto text-primary-700"   target="_blank" href="https://pycon.jp">
              シルバースポンサー
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
        <div>
          <!-- 特別スポンサー -->
          <div>特別スポンサー</div>
          <!-- 特別スポンサー -->
          <div>特別スポンサー</div>
          <!-- 特別スポンサー -->
          <div>特別スポンサー</div>
          <!-- 特別スポンサー -->
          <div>特別スポンサー</div>
        </div>
      </div>

      <div class="mt-10 mb-10 separator" />


      <!-- パトロン -->
      <div>
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PATRON</h2>
          <h4 class="text-lg font-bold text-tertiary-800 font-noto">パトロン</h4>
        </div>
        <div>
          <!-- パトロン -->
          <div>パトロン</div>
          <!-- パトロン -->
          <div>パトロン</div>
          <!-- パトロン -->
          <div>パトロン</div>
          <!-- パトロン -->
          <div>パトロン</div>
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

/* スポンサーロゴ */
/* ダイヤモンドスポンサー */
.diamond_logo {
  background-image: url("@/assets/images/association-logo.svg");
}
/* プラチナスポンサー */
.platinum_logo_1 {
  background-image: url("@/assets/images/association-logo.svg");
}
.platinum_logo_2 {
  background-image: url("@/assets/images/association-logo.svg");
}
.platinum_logo_3 {
  background-image: url("@/assets/images/association-logo.svg");
}
</style>
