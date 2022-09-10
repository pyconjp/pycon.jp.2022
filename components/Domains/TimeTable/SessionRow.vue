<template>
  <div
    class="relative flex flex-col justify-between w-full mt-12 lg:flex-row lg:mt-2"
  >
    <TalkSession
      v-for="talk in talkList"
      :key="talk.code"
      class="w-full mt-2 lg:mt-0 lg:w-[calc((100%_-_16px)/5)]"
      :talk="talk"
      :handle-modal="openModal"
    ></TalkSession>
    <p
      class="absolute -top-8 left-0 lg:top-0 lg:-left-[42px] font-noto font-medium"
    >
      {{ startTime }}
    </p>
  </div>
</template>

<script>
import TalkSession from '@/components/Domains/TimeTable/TalkSession'
export default {
  components: { TalkSession },
  props: {
    talkList: {
      type: Array,
      default() {
        return []
      },
    },
    startTime: {
      type: String,
      default: '00:00',
    },
    handleOpenmodal: {
      type: Function,
      required: true,
    },
  },
  methods: {
    openModal(talk) {
      // alert(talk.code)
      // this.$emit('openSessionModal', talk)
      this.handleOpenmodal(talk)
    },
  },
}
</script>

<style></style>
