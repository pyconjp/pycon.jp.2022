<template>
  <div
    class="flex flex-col items-center justify-center w-11/12 mx-auto mt-10 mb-8 lg:flex-row lg:w-10/12"
  >
    <div class="flex flex-col items-center lg:mt-10 lg:flex-row lg:gap-5">
      <!-- left pane -->
      <div class="flex justify-center w-10/12 lg:flex-1 event-frame">
        <!-- event-frame -->
        <div class="relative w-full">
          <div
            class="absolute w-11/12 mt-5 border-solid border-1 event-clip bg-primary-700 h-5/6"
          />
          <img
            class="absolute object-cover w-11/12 h-5/6 left-4 event-clip"
            :src="require(`@/assets/images/event/${event.image}`)"
            :alt="event.title"
          />
        </div>
      </div>

      <!-- right pane -->
      <div class="flex flex-col w-11/12 mt-10 lg:flex-1 lg:mt-0">
        <div class="flex flex-row">
          <div class="mr-1 event-text-icon" />
          <div class="event-text-title text-tertiary-900 font-fira">
            {{ event.title }}
            <span class="text-primary-700">
              {{ event.subtitle }}
            </span>
          </div>
        </div>
        <div
          class="text-left whitespace-pre-line event-text-description text-tertiary-800 font-fira"
        >
          {{ event.description }}
        </div>
        <outer-link v-if="event.url" :to="event.url">
          <div
            class="py-2 mt-1 whitespace-nowrap text-center rounded shadow-md font-noto bg-primary-700 text-tertiary-100 w-1/2 mx-auto mt-6 font-bold"
          >
            {{ $t('details.link') }}
          </div>
        </outer-link>
        <div
          v-else
          class="py-2 mt-1 whitespace-nowrap text-center rounded shadow-md font-noto bg-primary-700 text-tertiary-100 w-1/2 mx-auto mt-6 font-bold opacity-75"
        >
          {{ $t('details.ended') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OuterLink from '~/components/Elements/OuterLink'

export default {
  name: 'EventTemplate',
  components: {
    OuterLink,
  },
  props: {
    event: {
      title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      type: Object,
      required: true,
    },
  },
}
</script>

<i18n>
{
  "ja": {
    "details": {
      "link": "詳しくはこちら",
      "ended": "終了しました"
    }
  },
  "en": {
    "details": {
      "link": "For more information...",
      "ended": "Closed"
    }
  }
}
</i18n>

<style scoped>
.event-frame {
  min-width: 375px;
  min-height: 600px;
}

.event-clip {
  clip-path: polygon(
    0% 0%,
    90% 0%,
    100% 10%,
    100% 90%,
    100% 100%,
    10% 100%,
    0% 90%
  );
}

.event-text-icon {
  width: 31px;
  height: 31px;
  background-image: url('@/assets/images/card_title_icon.svg');
}

.event-text-title {
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 100%;
  letter-spacing: 0.02em;
  @media screen(lg) {
    font-size: 36px;
  }
}

.event-text-description {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.03em;
}

.snake-face-base {
  width: 100%;
  height: 36px;
  @media (min-width: 1024px) {
    height: 90px;
  }
}
</style>
