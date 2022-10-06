<template>
  <div v-if="sponsors">
    <!-- PSF -->
    <div class="mb-10">
      <h2 class="text-3xl font-bold text-tertiary-900 font-noto">PSF</h2>
    </div>
    <div v-if="psfs && psfs.length > 0" class="flex flex-col mb-12">
      <div v-for="psf in psfs" :key="psf.id" class="flex-1 my-5">
        <div class="flex flex-col items-center justify-center">
          <!--ロゴ-->
          <div
            class="sponsor-chipped-card bg-tertiary-50 w-[375px] h-[201px] lg:ml-5 lg:mr-5"
          >
            <outer-link :to="psf[$i18n.locale].url">
              <img
                v-if="psf[$i18n.locale].logo_file"
                :src="
                  require(`@/assets/images/sponsors/${
                    psf[$i18n.locale].logo_file
                  }`)
                "
                class="object-contain w-full h-full p-5"
              />
            </outer-link>
          </div>
          <!--会社名-->
          <div class="mt-2 underline">
            <outer-link
              :to="psf[$i18n.locale].url"
              class="text-2xl font-bold font-noto text-primary-700"
            >
              {{ psf[$i18n.locale].name }}
              <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
            </outer-link>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="mt-10 mb-10 separator" />
    </div>
    <!-- 特別スポンサー メディア -->
    <div v-if="medias && medias.length > 0">
      <div class="mb-10">
        <h2 class="text-3xl font-bold text-tertiary-900 font-noto">Media</h2>
        <h4 class="text-lg font-bold text-tertiary-800 font-noto">
          メディアスポンサー
        </h4>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div v-for="media in medias" :key="media.id" class="m-5">
          <div class="flex flex-col items-center justify-center">
            <!--ロゴ-->
            <div
              class="sponsor-chipped-card bg-tertiary-50 w-[284px] h-[147px]"
            >
              <outer-link :to="media[$i18n.locale].url">
                <img
                  v-if="media[$i18n.locale].logo_file"
                  :src="
                    require(`@/assets/images/sponsors/special/${
                      media[$i18n.locale].logo_file
                    }`)
                  "
                  class="object-contain w-full h-full p-5"
                />
              </outer-link>
            </div>
            <!--会社名-->
            <div class="mt-2 underline">
              <outer-link
                :to="media[$i18n.locale].url"
                class="text-2xl font-bold font-noto text-primary-700"
              >
                {{ media[$i18n.locale].name }}
                <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
              </outer-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="mt-10 mb-10 separator" />
    </div>
    <!-- 特別スポンサー 会場提供 -->
    <div v-if="venues && venues.length > 0">
      <div class="mb-10">
        <h2 class="text-3xl font-bold text-tertiary-900 font-noto">
          Conference Room
        </h2>
        <h4 class="text-lg font-bold text-tertiary-800 font-noto">
          会議室提供
        </h4>
      </div>
      <div class="grid grid-cols-1">
        <div v-for="venue in venues" :key="venue.id" class="m-5">
          <div class="flex flex-col items-center justify-center">
            <!--ロゴ-->
            <div
              class="sponsor-chipped-card bg-tertiary-50 w-[284px] h-[147px]"
            >
              <outer-link :to="venue[$i18n.locale].url">
                <img
                  v-if="venue[$i18n.locale].logo_file"
                  :src="
                    require(`@/assets/images/sponsors/special/${
                      venue[$i18n.locale].logo_file
                    }`)
                  "
                  class="object-contain w-full h-full p-5"
                />
              </outer-link>
            </div>
            <!--会社名-->
            <div class="mt-2 underline">
              <outer-link
                :to="venue[$i18n.locale].url"
                class="text-2xl font-bold font-noto text-primary-700"
              >
                {{ venue[$i18n.locale].name }}
                <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
              </outer-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from '@vue-hero-icons/outline'
import OuterLink from '@/components/Elements/OuterLink'
import sponsorsMixin from '@/utils/sponsors_mixin'

export default {
  name: 'SpecialList',
  components: {
    OuterLink,
    ExternalLinkIcon,
  },
  mixins: [sponsorsMixin],
  props: {
    needsIntroduction: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.separator {
  width: 59px;
  height: 23px;
  background-image: url('@/assets/images/separator.svg');
}
</style>
