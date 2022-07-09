<template>
  <div>
    <div class="relative">
      <img
        class="absolute top-12 left-0 right-0 mx-auto -z-50"
        src="@/assets/images/hero-bgimg.svg"
        alt="hero background image"
      />
    </div>
    <div class="hero-wrapper mx-auto w-5/6">
      <div class="flex justify-between items-center">
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
              <div class="text-primary-700 font-bold inline-flex items-center">
                {{ $t('pages.hero.venue-info') }}
                <ExternalLinkIcon class="w-5 h-5" />
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="inline-flex">
              <CalendarIcon class="text-primary-700 mx-4 my-auto w-8 h-8" />
              <div class="text-2xl">
                <div>
                  Conference:
                  <span class="font-bold">2022.10.14(Fri)-15(Sat)</span>
                </div>
                <div>
                  Sprint: <span class="font-bold">2022.10.16(Sun)</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-1 bg-primary-700 text-white text-2xl w-full text-center py-2 shadow-md rounded opacity-75"
          >
            {{ $t('pages.hero.ticket') }}
          </div>
        </div>
        <div>
          <Timeline
            id="pyconjapan"
            ref="tweet"
            source-type="profile"
            :options="{ width: '408', height: '411', theme: 'dark' }"
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

export default {
  name: 'HeroSection',
  components: {
    Timeline,
    LocationMarkerIcon,
    ExternalLinkIcon,
    CalendarIcon,
  },
}
</script>

<style scoped>
.hero-wrapper {
  padding: 70px 0 67px;
}
</style>
