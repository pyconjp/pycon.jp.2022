<template>
  <div>
    <div class="flex flex-col items-center">
      <!-- Chair start -->
      <div class="flex flex-col w-10/12 mt-2 lg:w-7/12">
        <div :key="'talk_' + index" class="flex flex-col mt-10">
          <div class="flex flex-col items-center lg:flex-row">
            <!-- left image -->
            <div class="relative w-full lg:flex-1">
              <img
                class="relative object-cover w-full h-5/6 keynote-clip lg:flex-1"
                :src="require('@/assets/images/staff/selina.jpg')"
                :alt="'chair_img'"
              />
            </div>

            <!-- right text -->
            <div class="flex flex-col lg:mt-0 lg:ml-10 w-12/12 lg:flex-[2_2_0]">
              <div
                class="font-bold chair-name text-primary-900"
                v-html="'片寄 里菜 / Lina KATAYOSE(selina)'"
              ></div>
              <p
                class="mt-5 font-bold chair-description"
                v-html="$t('chair.description')"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChierPersonSection',
  components: {},
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
.chair-name {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  font-size: 24px;
}

.chair-description {
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #1a1623;
}
</style>

<!-- ↓JSONフォーマットです -->
<i18n>
{
  "ja": {
    "chair": {
      "name": "片寄 里菜",
      "description": "うさぎ大好き。PyConJP2022座長。車やDrone, Raspberry Piなどガジェットが好きです。ピアノ,バイオリン,ドラムを特訓中。プログラマー、エンジニアではなく科学者(Scientist)を目指す。Pyladies Tokyo Staff, 株式会社moegi代表、航空宇宙学修了。三アマ取得",
      "sns": {
        "twitter": "https://twitter.com/selina787b",
        "github": null,
        "facebook": "https://www.facebook.com/lina.katayose",
        "instagram": null
      }
    }
  },
  "en": {
    "chair": {
      "name": "片寄 里菜",
      "description": "うさぎ大好き。PyConJP2022座長。車やDrone, Raspberry Piなどガジェットが好きです。ピアノ,バイオリン,ドラムを特訓中。プログラマー、エンジニアではなく科学者(Scientist)を目指す。Pyladies Tokyo Staff, 株式会社moegi代表、航空宇宙学修了。三アマ取得",
      "sns": {
        "twitter": "https://twitter.com/selina787b",
        "github": null,
        "facebook": "https://www.facebook.com/lina.katayose",
        "instagram": null
      }
    }
  }
}
</i18n>
