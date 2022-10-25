<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="w-11/12 modal-window font-noto lg:w-10/12 lg:max-w-[1600px]">
        <!-- ヘッダーエリア -->
        <div
          id="modal-content"
          class="px-3 py-10 modal-content text-py-black lg:py-2"
          :scrollable="true"
        >
          <div class="flex bg-white">
            <div class="flex justify-center w-full mt-6 ml-1 lg:w-11/12">
              <div class="w-11/12">
                <!-- セッションタイトル -->
                <div class="py-2 text-xl font-bold lg:text-2xl">
                  {{ sessionTitle }}
                </div>
                <div class="font-bold leading-7 lg:leading-8">
                  {{ speakerName }}
                </div>
                <div class="flex flex-col content-center mt-2 lg:flex-row">
                  <div class="flex flex-row lg:mr-8">
                    <img
                      class="self-center mr-2 lg:h-full h-4/5 filter-tartiary-600"
                      src="@/assets/images/icons/calendar.svg"
                      alt="calendar-icon"
                    />
                    <div class="lg:whitespace-nowrap">
                      {{ sessionStart }} - {{ sessionEnd }} (Asia/Tokyo)
                    </div>
                  </div>
                  <div class="flex flex-row">
                    <img
                      class="self-center mr-2 lg:h-full h-4/5 filter-tartiary-600"
                      src="@/assets/images/icons/location-marker.svg"
                      alt="location-icon"
                    />
                    <div>{{ sessionRoom }}</div>
                  </div>
                </div>
                <div class="mt-2">
                  <!-- 発表言語 -->
                  <div
                    v-if="langOfTalk === 'ja-JP'"
                    class="px-2 rounded-lg bg-primary-700 w-20 text-white text-[16px] flex justify-center items-center h-6 font-medium"
                  >
                    <p>日本語</p>
                  </div>
                  <div
                    v-else-if="langOfTalk === 'en'"
                    class="px-2 rounded-lg bg-secondary-400 w-14 text-tertiary-900 text-[16px] flex justify-center items-center h-6 font-medium"
                  >
                    <p>EN</p>
                  </div>
                </div>
                <div class="mt-4 abstract_line">
                  <!--概要-->
                  <div
                    class="ml-4 font-medium leading-7 lg:leading-8 list_styl"
                    v-html="$md.render(sessionAbstract)"
                  ></div>
                </div>
                <div class="flex flex-row content-center mt-4">
                  <!-- Youtube -->
                  <div v-if="showApprovalVideo">
                    <outer-link
                      :to="youtubeLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex mr-8 hover:opacity-70"
                      :class="{ 'pointer-events-none': youtubeLink === '' }"
                    >
                      <img
                        class="self-center lg:h-full h-4/5"
                        src="@/assets/images/icons/video.svg"
                        alt="video-icon"
                        :class="{
                          'filter-blue-green': youtubeLink !== '',
                          'filter-gray': youtubeLink === '',
                        }"
                      />
                      <p
                        class="ml-2 text-xl font-normal"
                        :class="{
                          'text-blue-green': youtubeLink !== '',
                          'text-gray-500': youtubeLink === '',
                        }"
                      >
                        Video
                      </p>
                    </outer-link>
                  </div>
                  <!--スライド-->
                  <div v-if="showApprovalDoc">
                    <outer-link
                      :to="documentLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex hover:opacity-70"
                      :class="{ 'pointer-events-none': documentLink === '' }"
                      ><img
                        class="self-center lg:h-full h-4/5 filter-gray"
                        src="@/assets/images/icons/documents.svg"
                        alt="documents-icon"
                        :class="{
                          'filter-blue-green': documentLink !== '',
                          'filter-gray': documentLink === '',
                        }"
                      />
                      <div
                        class="ml-2 text-xl font-normal whitespace-nowrap"
                        :class="{
                          'text-blue-green': documentLink !== '',
                          'text-gray-500': documentLink === '',
                        }"
                      >
                        Document (<span v-if="langOfSlide === 'Japanese only'"
                          >日本語</span
                        ><span v-else>English</span>)
                      </div>
                    </outer-link>
                  </div>
                </div>
              </div>
            </div>
            <!--閉じるボタン-->
            <div class="relative w-1/12" @click.stop="$emit('close')">
              <div
                class="cursor-pointer close hover:bg-gray-100 lg:top-6 top-1 -left-5 lg:left-2"
              >
                <img
                  class="h-3/5"
                  src="@/assets/images/icons/close.svg"
                  alt="close-icon"
                />
              </div>
            </div>
          </div>
          <!-- コンテンツエリア -->
          <div class="flex justify-center pb-8 bg-white">
            <div class="w-11/12 pt-2 mt-4 border-t lg:mb-4">
              <div class="mt-4">
                <div
                  v-show="!readMore"
                  class="flex flex-col items-center justify-center cursor-pointer"
                  @click.stop="readMore = true"
                >
                  <p class="mt-2 underline">Read more</p>
                  <img
                    class="lg:h-full h-4/5"
                    src="@/assets/images/icons/down-arrow.svg"
                    alt="down-arrow-icon"
                  />
                </div>
                <div v-show="readMore">
                  <div
                    v-if="
                      sessionDescription &&
                      sessionDescription != '' &&
                      sessionDescription !== 'N/A'
                    "
                  >
                    <div class="flex flex-row content-center">
                      <div class="self-center mr-1 section_icon" />
                      <p class="text-xl font-bold">トーク詳細 / Description</p>
                    </div>
                    <div
                      class="mt-4 text-base font-medium leading-7 lg:leading-8 list_style"
                      v-html="$md.render(sessionDescription)"
                    ></div>
                  </div>

                  <div
                    v-if="
                      sessionChoiceReason &&
                      sessionChoiceReason != '' &&
                      sessionChoiceReason !== 'N/A'
                    "
                    class="mt-4"
                  >
                    <div class="flex flex-row content-center">
                      <div class="self-center mr-1 section_icon" />
                      <p class="text-xl font-bold">
                        この題材を選んだ理由やきっかけ / Why did you chose this
                        topic?
                      </p>
                    </div>
                    <div
                      class="mt-4 text-base font-medium leading-7 lg:leading-8 list_style"
                      v-html="$md.render(sessionChoiceReason)"
                    ></div>
                  </div>
                  <div
                    v-if="
                      sessionRequiredKnowledge &&
                      sessionRequiredKnowledge != '' &&
                      sessionRequiredKnowledge !== 'N/A'
                    "
                    class="mt-4"
                  >
                    <div class="flex flex-row content-center">
                      <div class="self-center mr-1 section_icon" />
                      <p class="text-xl font-bold">
                        オーディエンスに求める前提知識 / Prior knowledges
                        speakers assume the audience to have
                      </p>
                    </div>
                    <div
                      class="mt-4 text-base font-medium leading-7 lg:leading-8 list_style"
                      v-html="$md.render(sessionRequiredKnowledge)"
                    ></div>
                  </div>
                  <div
                    v-if="
                      sessionRequiredKnowledge && sessionRequiredKnowledge != ''
                    "
                    class="mt-4"
                  >
                    <div class="flex flex-row content-center">
                      <div class="self-center mr-1 section_icon" />
                      <p class="text-xl font-bold">
                        オーディエンスのPythonレベル / Audience experiment
                      </p>
                    </div>
                    <outer-link
                      to="https://pyconjp.blogspot.com/2020/04/pyconjp-2020-proposal-audience-information.html"
                      class="mt-4 text-base font-medium"
                      >{{ sessionAudienceExperiment }}</outer-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 発表者の情報 -->
          <div class="flex justify-center pb-8 bg-white">
            <div class="w-11/12 pt-4 border-t lg:mb-4">
              <div class="flex flex-row mt-4">
                <div v-if="sessionAvatar" class="mr-8">
                  <!--avatar-->
                  <img
                    class="w-20 lg:w-32 lg:min-w-[128px] lg:max-w-[128px] min-w-[80px]"
                    :src="sessionAvatar"
                    alt="avatar"
                  />
                </div>
                <div>
                  <p
                    class="text-lg font-bold leading-7 underline lg:leading-8 text-primary-700"
                  >
                    {{ speakerName }}
                  </p>
                  <div
                    class="mt-4 font-medium leading-7 lg:leading-8 list_style"
                    v-html="$md.render(speakerProfile)"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import moment from 'moment/moment'
// import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import OuterLink from '@/components/Elements/OuterLink'

export default {
  name: 'SessionDetailModal',
  components: {
    OuterLink,
  },
  props: {
    sessionData: {
      type: Object,
      default() {
        return {
          code: '',
          title: '',
          name: '',
          profile: '',
          elevator_pitch: '',
          prerequisite_knowledge: '',
          audience_takeaway: '',
          track: '',
          language: '',
          languageOfPresentationMaterial: '',
          description: '',
          room: '',
          start: '',
          end: '',
          abstract: '',
          choiceReason: '',
          requiredKnowledge: '',
          audienceExperiment: '',
          avatar: '',
        }
      },
    },
    approvalData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      // セッション情報表示用
      sessionTitle: '',
      speakerName: '',
      speakerProfile: '',
      youtubeLink: '',
      documentLink: '',
      showApprovalVideo: false,
      showApprovalDoc: false,
      sessionAbstract: '',
      prerequisiteKnowledge: '',
      track: '',
      langOfTalk: '',
      langOfSlide: '',
      sessionDescription: '',
      readMore: false,
      sessionStart: '',
      sessionEnd: '',
      sessionRoom: '',
      sessionChoiceReason: '',
      sessionRequiredKnowledge: '',
      sessionAudienceExperiment: '',
      sessionAvatar: '',
    }
  },
  computed: {
    sessionLanguage() {
      if (this.langOfTalk === 'ja-JP') {
        return 'JA'
      } else if (this.langOfTalk === 'en') {
        return 'EN'
      } else {
        return ''
      }
    },
  },
  created() {
    this.sessionTitle = this.sessionData.title
    this.speakerName = this.sessionData.speakers[0].name
    this.speakerProfile = this.sessionData.speakers[0].biography
    this.sessionAvatar = this.sessionData.speakers[0].avatar
    this.sessionAbstract = this.sessionData.abstract
    this.prerequisiteKnowledge = this.sessionData.requiredKnowledge
    this.track = this.sessionData.track
    this.langOfTalk = this.sessionData.language
    this.langOfSlide = this.sessionData.languageOfPresentationMaterial
    this.sessionDescription = this.sessionData.description
    this.youtubeLink = this.approvalData[this.sessionData.code][0]
    this.documentLink = this.approvalData[this.sessionData.code][1]
    this.showApprovalVideo = this.approvalData[this.sessionData.code][2]
    this.showApprovalDoc = this.approvalData[this.sessionData.code][3]
    this.sessionStart = moment(this.sessionData.start).format('MMM DD h:mm a')
    this.sessionEnd = moment(this.sessionData.end).format('h:mm a')
    this.sessionRoom = this.sessionData.room
    this.sessionChoiceReason = this.sessionData.choiceReason
    this.sessionRequiredKnowledge = this.sessionData.requiredKnowledge
    this.sessionAudienceExperiment = this.sessionData.audienceExperiment
  },
  // mounted() {
  //   const modal = document.querySelector('.modal')
  //   disableBodyScroll(modal)
  // },
  // beforeDestroy() {
  //   clearAllBodyScrollLocks()
  // },
}
</script>

<style lang="scss" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  &-window {
    overflow: scroll;
    max-height: 80%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  &-content {
    display: flex;
    flex-direction: column;
  }
}
// オーバーレイのトランジション
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}
// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
.close {
  position: absolute;
  display: flex;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
}
.filter-gray {
  filter: invert(49%) sepia(15%) saturate(16%) hue-rotate(314deg)
    brightness(100%) contrast(89%);
}
.filter-blue-green {
  filter: invert(53%) sepia(35%) saturate(7231%) hue-rotate(157deg)
    brightness(90%) contrast(87%);
}
ul {
  list-style-type: disc;
}
.list_style {
  ::v-deep() {
    ul {
      list-style-type: disc;
      padding-left: 1rem;
    }
    h1 {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 1.3rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    ol {
      list-style-type: decimal;
      padding-left: 1rem;
    }
    p {
      a {
        text-decoration: underline;
        color: #1097aa;
      }
    }
    pre {
      font-family: Fira Code;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 32px;
      color: #3d3b45;
      background: #efeff1;
      padding: 16px;
      margin: 8px;
    }
  }
}
.section_icon {
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-image: url('@/assets/images/icons/title-point.svg');
}

.abstract_line {
  border-left: 2px solid #e5bc10;
}
</style>

<i18n>
  {  }
</i18n>
