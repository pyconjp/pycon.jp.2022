<template>
  <div
    class="flex lg:p-4 bg-white rounded lg:min-h-[180px]"
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
    <!-- モーダル用ウィンドウ -->
    <!-- <SessionDetailModal
      v-if="isModal"
      :session-data="modalDisplaySessionData"
      @close="closeSessionModal"
    ></SessionDetailModal> -->
  </div>
</template>

<script>
import { TagIcon, ClockIcon, LocationMarkerIcon } from '@vue-hero-icons/solid'
// import SessionDetailModal from '@/components/Domains/TimeTable/SessionDetailModal'

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
  // watch: {
  //   $route() {
  //     location.reload()
  //   },
  // },
  // data() {
  //   return {
  //     isModal: false,
  //     modalDisplaySessionData: {},
  //   }
  // },
  // mounted() {
  //   // if (this.$route.query.id !== undefined) {
  //   //   // const targetSession = this.getTargetSessionDataById(this.$route.query.id)
  //   //   // this.isModal = true
  //   //   // this.modalDisplaySessionData = targetSession
  //   //   // this.openSessionModal(targetSession)
  //   //   // this.$refs.child.openSessionModal(this.$route.query.id)
  //   //   this.openSessionModal(talk)
  //   // }
  //   document.onkeydown = (evt) => {
  //     // キーボードを使っているユーザーは、Escapeキーでモーダルを閉じる
  //     evt = evt || window.event
  //     if (evt.key === 'Escape') {
  //       this.closeSessionModal()
  //       // this.$refs.child.closeSessionModal()
  //     }
  //   }
  // },
  methods: {
    clickSessionModal(talk) {
      // if (talk !== undefined) {
      //   // alert(talk.code)
      //   this.$emit('openSessionModal', talk)
      // }
      this.handleModal(talk)
    },
    // openSessionModal(talk) {
    //   if (talk !== undefined) {
    //     // Todo画面遷移
    //     this.$router.push({ path: `/timetable/?id=${talk.code}` })
    //     // this.$emit('openSessionModal', talk.code)
    //     this.isModal = true
    //     this.modalDisplaySessionData = talk
    //   }
    // },
    // closeSessionModal() {
    //   if (this.$route.query.id) {
    //     this.$router.replace({ query: null })
    //   }
    //   this.isModal = false
    // },
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
