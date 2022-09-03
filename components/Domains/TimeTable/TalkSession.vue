<template>
  <div class="flex p-4 bg-white rounded lg:min-h-[180px]">
    <div v-if="!$device.isDesktop"></div>
    <div class="w-full lg:grid lg:grid-cols-1">
      <p class="text-sm font-bold lg:row-span-5 font-noto text-primary-800">
        {{ talk.title }}
      </p>

      <div>
        <p class="text-sm font-noto text-tertiary-700">
          {{ talk.speakers[0].name }}
        </p>
        <div class="flex items-center">
          <TagIcon size="10" class="fill-current text-[#3F3F46]"></TagIcon>
          <p class="text-[12px] font-normal font-noto text-tertiary-70 ml-1">
            {{ talk.track }}
          </p>
        </div>
        <div class="flex items-center">
          <div
            v-if="
              talk.languageOfPresentationMaterial === 'Japanese only' ||
              talk.languageOfPresentationMaterial === '日本語のみ'
            "
            class="px-2 rounded-lg bg-primary-700 w-14 text-white text-[12px] flex justify-center items-center h-4"
          >
            <p>日本語</p>
          </div>
          <div
            v-else-if="
              talk.languageOfPresentationMaterial === 'English only' ||
              talk.languageOfPresentationMaterial === '英語のみ'
            "
            class="px-2 rounded-lg bg-secondary-400 w-8 text-tertiary-900 text-[12px] flex justify-center items-center h-4"
          >
            <p>EN</p>
          </div>
          <div class="flex items-center ml-2">
            <ClockIcon
              size="10"
              class="fill-current text-tertiary-500"
            ></ClockIcon>
            <p class="text-sm text-tertiary-400 text-[12px]">30min</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TagIcon, ClockIcon } from '@vue-hero-icons/solid'

export default {
  components: { TagIcon, ClockIcon },
  props: {
    talk: {
      type: Object,
      default() {
        return { title: '', speaker: '', track: '' }
      },
    },
  },
}
</script>

<style></style>
