<template>
  <div
    class="relative w-full rounded shadow-sm"
    :style="bgStyleObject"
    @click="clickSessionModal(dataInfo)"
  >
    <div class="flex items-center justify-center w-full h-12">
      <img
        class="w-6"
        src="~/assets/images/timetable-head-snake.svg"
        alt="timetable section snake"
      />
      <p class="ml-2 font-bold font-noto" :style="textStyleObject">
        {{ dataInfo.title }}
      </p>
    </div>
    <p
      class="absolute -top-8 left-0 lg:top-0 lg:-left-[42px] font-noto font-medium"
    >
      {{ dataInfo.startTime }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FullWidthRow',
  props: {
    backgroundColor: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    handleModal: {
      type: Function,
      required: true,
    },
    dataInfo: {
      type: Object,
      default() {
        return {
          title: '',
          startTime: '',
          speakers: [{ code: '', name: '', biography: '', avatar: '' }],
          track: '',
          start: '',
          room: '',
        }
      },
    },
  },
  data() {
    return {
      bgStyleObject: {
        backgroundColor: this.backgroundColor,
      },
      textStyleObject: {
        color: this.textColor,
      },
    }
  },
  methods: {
    clickSessionModal(dataInfo) {
      if (dataInfo.room) {
        this.handleModal(dataInfo)
      }
    },
  },
}
</script>

<style></style>
