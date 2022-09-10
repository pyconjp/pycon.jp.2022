<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="w-11/12 modal-window font-noto lg:w-3/4">
        <!-- ヘッダーエリア -->
        <div
          id="modal-content"
          class="px-3 py-10 modal-content text-py-black lg:py-2"
          :scrollable="true"
        >
          <div class="flex bg-white">
            <div class="flex justify-center w-full mt-6 ml-1 lg:w-11/12"></div>
            <div class="relative w-1/12" @click.stop="$emit('close')">
              <div
                class="cursor-pointer close hover:bg-gray-100 lg:top-6 -top-12 -left-5 lg:left-2"
              >
                <img
                  class="h-3/5"
                  src="@/assets/images/icons/close.svg"
                  alt="close-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>sessionData{{ sessionData }}</div>
    </div>
  </transition>
</template>

<script>
// import OuterLink from '@/components/Elements/OuterLink'

export default {
  name: 'SessionDetailModal',
  // components: { OuterLink },
  props: {
    sessionData: {
      type: Object,
      default() {
        return {
          code: '',
          title: '',
          name: '',
          speakers: [{ code: '', name: '', biography: '', avatar: '' }],
          language: '',
          track: '',
          abstract: '',
          description: '',
          durationMinutes: '',
          room: '',
          start: '',
          end: '',
          notes: '',
          audienceExperiment: '',
          choiceReason: '',
          languageOfPresentationMaterial: '',
          knowledge: '',
          requiredKnowledge: '',
        }
      },
    },
  },
  // data() {
  //   return {
  //     // セッション情報表示用
  //     sessionTitle: '',
  //     speakerName: '',
  //     speakerProfile: '',
  //     youtubeLink: '',
  //     documentLink: '',
  //     elevatorPitch: '',
  //     prerequisiteKnowledge: '',
  //     audienceTakeaway: '',
  //     track: '',
  //     audiencePythonLevel: '',
  //     langOfTalk: '',
  //     langOfSlide: '',
  //     description: '',

  //     // Read more表示しているかどうか
  //     readMore: false,
  //   }
  // },

  computed: {
    sessionLanguage() {
      if (this.langOfTalk === 'Japanese') {
        return 'JA'
      } else if (this.langOfTalk === 'English') {
        return 'EN'
      } else {
        return ''
      }
    },
  },
  // created() {
  //   this.sessionTitle = this.sessionData.title
  //   this.speakerName = this.sessionData.name
  //   this.speakerProfile = this.sessionData.profile
  //   this.elevatorPitch = this.sessionData.elevator_pitch
  //   this.prerequisiteKnowledge = this.sessionData.prerequisite_knowledge
  //   this.audienceTakeaway = this.sessionData.audience_takeaway
  //   this.track = this.sessionData.track
  //   this.audiencePythonLevel = this.sessionData.audience_python_level
  //   this.langOfTalk = this.sessionData.lang_of_talk
  //   this.langOfSlide = this.sessionData.lang_of_slide
  //   this.description = this.sessionData.description
  //   this.description = this.sessionData.description.replace(/\n/g, '\n\n')
  //   this.youtubeLink = this.sessionData.recording_url
  //   this.documentLink = this.sessionData.slide_url
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
  ::v-deep {
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
  }
}
</style>
<!--
<i18n>
{
  "en": {
    "elevatorPitch": "Elevator Pitch",
    "requiredKnowledge": "Prerequisite knowledge required from the audience",
    "knowledgeGained": "Knowledge that the audience can take home"
  },
  "ja": {
    "elevatorPitch": "エレベーターピッチ",
    "requiredKnowledge": "聴衆に求める前提知識",
    "knowledgeGained": "聴衆が持ち帰ることができるもの"
  }
}
</i18n> -->
