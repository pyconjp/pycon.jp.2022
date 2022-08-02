<template>
  <div>
    <div
      class="py-28 mx-auto lg:w-5/6 w-11/12 bg-hero bg-no-repeat bg-center bg-contain"
    >
      <div
        class="flex flex-col lg:flex-row justify-center items-center gap-x-24"
      >
        <div>
          <img src="@/assets/images/hero-logo.svg" alt="hero logo" />
          <div class="mt-10">
            <div class="inline-flex items-center">
              <LocationMarkerIcon
                class="text-primary-700 mx-4 my-auto w-8 h-8"
              />
              <span class="text-2xl font-bold mr-4">
                {{ $t('pages.hero.venue') }}
              </span>
              <outer-link
                to="https://www.toc.co.jp/saiji/ariake/access/"
                class="text-primary-700 font-bold hidden lg:inline-flex items-center"
              >
                {{ $t('pages.hero.venue-info') }}
                <ExternalLinkIcon class="w-5 h-5" />
              </outer-link>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex flex-row align-top">
              <CalendarIcon class="text-primary-700 mx-4 w-8 h-8" />
              <div class="text-2xl">
                <div>
                  <div class="lg:inline-flex">
                    <div class="text-tertiary-600">Conference:</div>
                    <div class="font-bold">2022.10.14(Fri)-15(Sat)</div>
                  </div>
                </div>
                <div>
                  <div class="lg:inline-flex">
                    <div class="text-tertiary-600">Sprint:</div>
                    <div class="font-bold">2022.10.16(Sun)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <outer-link to="https://www.toc.co.jp/saiji/ariake/access/">
            <div
              class="font-noto font-bold mt-9 mb-3 bg-secondary-400 text-tertiary-900 text-2xl w-full text-center py-2 shadow-md rounded lg:hidden"
            >
              {{ $t('pages.hero.venue-info') }}
            </div>
          </outer-link>
          <div
            class="font-noto font-bold mt-1 bg-primary-700 text-tertiary-100 text-2xl w-full text-center py-2 shadow-md rounded opacity-75"
          >
            {{ $t('pages.hero.ticket') }}
          </div>
        </div>
        <div class="lg:w-96 w-full mt-10 lg:mt-0">
          <div v-if="!isReady"></div>
          <Timeline
            v-else
            id="pyconjapan"
            ref="tweet"
            source-type="profile"
            :lang="$i18n.locale"
            :options="{ width: '100%', height: '410', theme: 'dark' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
import {
  LocationMarkerIcon,
  ExternalLinkIcon,
  CalendarIcon,
} from '@vue-hero-icons/outline'
import OuterLink from '@/components/Elements/OuterLink'

export default {
  name: 'HeroSection',
  components: {
    OuterLink,
    Timeline,
    LocationMarkerIcon,
    ExternalLinkIcon,
    CalendarIcon,
  },
  data() {
    return {
      isReady: {
        type: Boolean,
        default: false,
      },
    }
  },
  mounted() {
    this.isReady = true
  },
}
</script>

<style scoped></style>
