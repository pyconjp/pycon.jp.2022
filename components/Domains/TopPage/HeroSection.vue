<template>
  <div>
    <div
      class="py-9 lg:py-28 mx-auto lg:w-5/6 w-11/12 bg-hero bg-no-repeat bg-center bg-contain"
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
                  <div class="lg:inline-flex lg:gap-2">
                    <div class="text-tertiary-600">Conference:</div>
                    <div class="font-bold">{{ $t('conference_date') }}</div>
                  </div>
                </div>
                <div>
                  <div class="lg:inline-flex lg:gap-2">
                    <div class="text-tertiary-600">Sprint:</div>
                    <div class="font-bold">{{ $t('sprint_date') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <outer-link to="https://www.toc.co.jp/saiji/ariake/access/">
            <div
              class="font-noto font-bold mt-9 mb-3 bg-secondary-400 text-tertiary-900 text-2xl w-full text-center py-2 shadow-md rounded lg:hidden hover:opacity-75"
            >
              {{ $t('pages.hero.venue-info') }}
            </div>
          </outer-link>
          <outer-link to="https://connpass.com/event/255827">
            <div
              class="font-noto font-bold mt-1 bg-primary-700 text-tertiary-100 lg:text-xl text-2xl w-full text-center py-2 shadow-md rounded hover:opacity-75"
            >
              {{ $t('ticket.conference') }}
            </div>
          </outer-link>
          <outer-link to="https://connpass.com/event/261187">
            <div
              class="font-noto font-bold mt-1 bg-primary-700 text-tertiary-100 lg:text-xl text-2xl w-full text-center py-2 shadow-md rounded hover:opacity-75"
            >
              {{ $t('ticket.party') }}
            </div>
          </outer-link>
        </div>
        <div class="lg:w-96 w-full mt-10 lg:mt-0">
          <a
            class="twitter-timeline"
            data-height="400"
            data-theme="dark"
            href="https://twitter.com/pyconjapan?ref_src=twsrc%5Etfw"
          ></a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    LocationMarkerIcon,
    ExternalLinkIcon,
    CalendarIcon,
  },
}
</script>

<style scoped></style>

<i18n>
{
  "ja": {
    "conference_date": "2022.10.14(Fri)-15(Sat)",
    "sprint_date": "2022.10.16(Sun)",
    "ticket": {
      "conference": "カンファレンスチケット",
      "party": "Official Partyチケット"
    }
  },
  "en": {
    "conference_date": "OCTOBER 14 - 15, 2022",
    "sprint_date": "OCTOBER 16, 2022",
    "ticket": {
      "conference": "Conference Ticket",
      "party": "Official Party Ticket"
    }
  }
}

</i18n>
