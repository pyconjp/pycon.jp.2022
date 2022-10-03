<template>
  <div class="text-center component-border-top bg-secondary-400">
    <section-title main="FAQ" sub="よくある質問" class="mb-14" />
    <div
      class="w-11/12 mx-auto text-left bg-tertiary-50 lg:w-8/12 chipped-card lg:mb-4"
    >
      <div class="px-6 py-8 text-lg lg:py-16 lg:px-24">
        <div class="flex flex-col gap-5">
          <div v-for="(faq, index) in $t('faq')" :key="index" class="flex-1">
            <div
              class="pb-2 flex lg:flex-row flex-col gap-1 lg:gap-4 border-dashed border-b-[1px] border-tertiary-400"
            >
              <img
                src="~/assets/images/faq-question.svg"
                alt="faq-question-icon"
                class="w-[36px]"
              />
              <div class="flex-1 lg:my-auto">
                <i18n
                  :path="`faq.${index}.question.text`"
                  tag="span"
                  class="block lg:inline"
                >
                  <template #link>
                    <outer-link
                      :to="$t(`faq.${index}.question.url`).toString()"
                      class="inline underline text-primary-800"
                    >
                      {{ $t(`faq.${index}.question.link`) }}
                      <component
                        :is="$t(`faq.${index}.question.icon`).toString()"
                        class="inline w-4 h-4 mb-2"
                      />
                    </outer-link>
                  </template>
                </i18n>
              </div>
            </div>
            <div
              class="pt-2 pb-5 flex lg:flex-row flex-col gap-1 lg:gap-4 border-solid border-b-[1px] border-tertiary-400"
            >
              <img
                src="~/assets/images/faq-answer.svg"
                alt="faq-answer-icon"
                class="w-[36px]"
              />
              <div class="flex-1 lg:my-auto">
                <i18n
                  :path="`faq.${index}.answer.text`"
                  tag="span"
                  class="block lg:inline"
                >
                  <template #link>
                    <outer-link
                      :to="$t(`faq.${index}.answer.url`).toString()"
                      class="inline underline text-primary-800"
                    >
                      {{ $t(`faq.${index}.answer.link`) }}
                      <component
                        :is="$t(`faq.${index}.answer.icon`).toString()"
                        class="inline w-4 h-4 mb-2"
                      />
                    </outer-link>
                  </template>
                </i18n>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="snake-face-base">
      <div class="hidden snake-face lg:block" />
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon, MailIcon } from '@vue-hero-icons/outline'
import SectionTitle from '~/components/Elements/SectionTitle'
import OuterLink from '~/components/Elements/OuterLink'

export default {
  name: 'FaqSection',
  components: {
    OuterLink,
    SectionTitle,
    ExternalLinkIcon,
    MailIcon,
  },
}
</script>

<style scoped>
.snake-face-base {
  width: 100%;
  height: 36px;
  @media (min-width: 1024px) {
    height: 90px;
  }
}

.snake-face {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_orange.svg');
}
</style>

<i18n>
{
  "ja": {
    "faq": [
      {
        "question": {
          "text": "スポンサーの申込先を教えてください。",
          "link": "",
          "url": "",
          "icon": ""
        },
        "answer": {
          "text": "スポンサーの募集は終了しました。",
          "link": "こちら",
          "url": "https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship.html",
          "icon": "ExternalLinkIcon"
        }
      },
      {
        "question": {
          "text": "運営への問い合わせ先を教えてください。",
          "link": "",
          "url": "",
          "icon": ""
        },
        "answer": {
          "text": "{link}までお問合せください。",
          "link": "pyconjp@pycon.jp",
          "url": "mailto:pyconjp@pycon.jp",
          "icon": "MailIcon"
        }
      },
      {
        "question": {
          "text": "遠方参加者への支援制度について教えてください。",
          "link": "",
          "url": "",
          "icon": ""
        },
        "answer": {
          "text": "{link}をご参照ください。",
          "link": "PyCon JP 2022 遠方参加者の支援制度について",
          "url": "https://pyconjp.blogspot.com/2022/08/financial-aid-ja.html",
          "icon": "ExternalLinkIcon"
        }
      },
      {
        "question": {
          "text": "会場に託児所はありますか。",
          "link": "",
          "url": "",
          "icon": ""
        },
        "answer": {
          "text": "託児所は完全予約制となります。詳細は{link}をご確認ください。申し込みの締め切りは2022/10/07です。",
          "link": "こちら",
          "url": "https://drive.google.com/file/d/15y7XlA-QGSrHwacM1c6xbk8GYpCDAKKv/view",
          "icon": "ExternalLinkIcon"
        }
      }
    ]
  },
  "en": {
    "faq": [
      {
        "question": {
          "text": "Where can I apply for sponsorship?",
          "link": "",
          "url": "",
          "icon": ""
        },
        "answer": {
          "text": "It was over.",
          "link": "",
          "url": "",
          "icon": ""
        }
      },
      {
        "question": {
          "text": "Where can I contact the management?",
          "link": "",
          "url": "",
          "icon": ""
        },
        "answer": {
          "text": "Contact us at {link}.",
          "link": "pyconjp@pycon.jp",
          "url": "mailto:pyconjp@pycon.jp",
          "icon": "MailIcon"
        }
      },
      {
        "question": {
          "text": "Can I get financial support for travel expenses?",
          "link": "",
          "url": "",
          "icon": ""
        },
        "answer": {
          "text": "Please refer to {link}",
          "link": "PyCon JP 2022 Financial Aid for travel expenses",
          "url": "https://pyconjp.blogspot.com/2022/08/financial-aid-en.html",
          "icon": "ExternalLinkIcon"
        }
      },
      {
        "question": {
          "text": "Is there childcare available at the venue?",
          "link": "",
          "url": "",
          "icon": ""
        },
        "answer": {
          "text": "Child care is by appointment only. Please check {link} for more details. Deadline for registration is October 7 2022 (JST).",
          "link": "here",
          "url": "https://drive.google.com/file/d/15y7XlA-QGSrHwacM1c6xbk8GYpCDAKKv/view",
          "icon": "ExternalLinkIcon"
        }
      }
    ]
  }
}
</i18n>
