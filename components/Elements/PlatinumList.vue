<template>
  <div v-if="sponsors">
    <div
      v-if="platinums && platinums.length > 0"
      class="flex flex-col lg:flex-row"
    >
      <div v-for="platinum in platinums" :key="platinum.id" class="flex-1 my-5">
        <div class="flex flex-col items-center justify-center">
          <!--ロゴ-->
          <div
            class="sponsor-chipped-card bg-tertiary-50 w-[375px] h-[201px] lg:ml-5 lg:mr-5"
          >
            <outer-link :to="platinum[$i18n.locale].url">
              <img
                v-if="platinum[$i18n.locale].logo_file"
                :src="
                  require(`@/assets/images/sponsors/platinum/${
                    platinum[$i18n.locale].logo_file
                  }`)
                "
                class="object-contain w-full h-full p-5"
              />
            </outer-link>
          </div>
          <!--会社名-->
          <div class="mt-2 underline">
            <outer-link
              :to="platinum[$i18n.locale].url"
              class="text-2xl font-bold font-noto text-primary-700"
            >
              {{ platinum[$i18n.locale].name }}
              <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
            </outer-link>
          </div>
          <!-- 紹介文 -->
          <div
            v-if="needsIntroduction"
            class="px-5 mt-8 text-center lg:w-10/12"
          >
            {{ platinum[$i18n.locale].introduction }}
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
  name: 'PlatinumList',
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
