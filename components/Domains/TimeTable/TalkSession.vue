<template>
  <div
    class="flex lg:p-4 bg-white cursor-pointer rounded lg:min-h-[180px]"
    @click="clickSessionModal(talk)"
  >
    <div
      v-if="!$device.isDesktop"
      class="flex items-center justify-center w-1/3 bg-tertiary-200"
    >
      <div class="">
        <p class="text-sm font-bold font-noto text-tertiary-800">
          {{ $dayjs(talk.start).format('HH:mm') }}
        </p>
        <p class="text-sm font-bold font-noto text-tertiary-800">30min</p>
      </div>
    </div>
    <div class="w-full p-4 lg:p-0 lg:grid lg:grid-cols-1">
      <p class="text-sm font-bold lg:row-span-5 font-noto text-primary-800">
        {{ talk.title }}
      </p>

      <div>
        <p class="text-sm font-medium font-noto text-tertiary-700">
          {{ talk.speakers[0].name }}
        </p>
        <div class="flex items-center">
          <TagIcon
            size="10"
            class="fill-current text-[#3F3F46] mt-[2px]"
          ></TagIcon>
          <p class="text-[12px] font-normal font-noto text-tertiary-70 ml-1">
            {{ talk.track }}
          </p>
        </div>
        <div class="flex items-center">
          <div
            v-if="talk.language === 'ja-JP'"
            class="px-2 rounded-lg bg-primary-700 w-14 text-white text-[12px] flex justify-center items-center h-4"
          >
            <p>日本語</p>
          </div>
          <div
            v-else-if="talk.language === 'en'"
            class="px-2 rounded-lg bg-secondary-400 w-8 text-tertiary-900 text-[12px] flex justify-center items-center h-4"
          >
            <p>EN</p>
          </div>
          <div v-if="$device.isDesktop" class="flex items-center ml-2">
            <ClockIcon
              size="10"
              class="fill-current text-tertiary-500 mt-[2px]"
            ></ClockIcon>
            <p class="text-sm text-tertiary-400 text-[12px]">30min</p>
          </div>
          <div v-else class="flex items-center ml-2">
            <LocationMarkerIcon
              size="12"
              class="mt-1 fill-current text-tertiary-500"
            ></LocationMarkerIcon>
            <p class="text-sm text-tertiary-400 text-[12px]">{{ talk.room }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TagIcon, ClockIcon, LocationMarkerIcon } from '@vue-hero-icons/solid'

export default {
  components: { TagIcon, ClockIcon, LocationMarkerIcon },
  props: {
    talk: {
      type: Object,
      default() {
        return {
          title: '',
          speaker: '',
          track: '',
          start: '',
          room: '',
        }
      },
    },
    handleModal: {
      type: Function,
      required: true,
    },
  },
  methods: {
    clickSessionModal(talk) {
      this.handleModal(talk)
    },
  },
}
</script>

<style scoped>
.language-chips {
  background: linear-gradient(
    135deg,
    theme(colors.primary.700) 0%,
    theme(colors.primary.700) 60%,
    theme(colors.secondary.400) 60%,
    theme(colors.secondary.400) 100%
  );
}
</style>
