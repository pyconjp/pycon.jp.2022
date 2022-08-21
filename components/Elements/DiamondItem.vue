<template>
  <div
    v-if="sponsors && diamond && diamond.length > 0 && diamond[0][$i18n.locale]"
  >
    <div class="flex flex-col items-center justify-center">
      <!--ロゴ-->
      <div
        class="lg:w-[590px] lg:h-[370px] chipped-card bg-tertiary-50 w-[375px] h-[201px]"
      >
        <outer-link :to="diamond[0][$i18n.locale].url">
          <img
            v-if="diamond[0][$i18n.locale].logo_file"
            :src="
              require(`@/assets/images/sponsors/diamond/${
                diamond[0][$i18n.locale].logo_file
              }`)
            "
            class="object-contain w-full h-full p-5"
          />
        </outer-link>
      </div>
      <!--会社名-->
      <div class="mt-2 underline">
        <outer-link
          :to="diamond[0][$i18n.locale].url"
          class="text-2xl font-bold font-noto text-primary-700"
        >
          {{ diamond[0][$i18n.locale].name }}
          <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
        </outer-link>
      </div>
      <!-- 紹介文 -->
      <div
        v-if="needsIntroduction"
        class="mt-8 ml-4 mr-4 text-center lg:w-6/12"
      >
        {{ diamond[0][$i18n.locale].introduction }}
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from '@vue-hero-icons/outline'
import OuterLink from '@/components/Elements/OuterLink'
import sponsorsMixin from '@/utils/sponsors_mixin'

export default {
  name: 'DiamondItem',
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
