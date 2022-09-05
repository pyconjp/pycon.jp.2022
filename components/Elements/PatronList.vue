<template>
  <div>
    <div v-if="sponsors && patrons && patrons.length > 0">
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div v-for="patron in patrons" :key="patron.id" class="flex-1 m-5">
          <div class="flex">
            <div
              class="sponsor-chipped-card bg-tertiary-50 w-[60px] h-[60px] mr-2"
            >
              <outer-link :to="patron[$i18n.locale].url">
                <img
                  v-if="patron[$i18n.locale].logo_file"
                  :src="
                    require(`@/assets/images/sponsors/patron/${
                      patron[$i18n.locale].logo_file
                    }`)
                  "
                  class="object-contain w-full h-full p-2"
                />
              </outer-link>
            </div>
            <div class="mt-2 underline">
              <outer-link
                :to="patron[$i18n.locale].url"
                class="inline text-2xl font-bold font-noto text-primary-700"
              >
                {{ patron[$i18n.locale].name }}
                <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
              </outer-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="m-20 text-2xl font-bold font-fira text-primary-900">
      Coming Soon !!
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from '@vue-hero-icons/outline'
import OuterLink from '@/components/Elements/OuterLink'
import sponsorsMixin from '@/utils/sponsors_mixin'

export default {
  name: 'PatronList',
  components: {
    OuterLink,
    ExternalLinkIcon,
  },
  mixins: [sponsorsMixin],
}
</script>
