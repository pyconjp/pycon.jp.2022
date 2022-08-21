<template>
  <nav
    class="sp-header"
    :class="{
      'sp-header-full': isSPHeaderOpen,
    }"
  >
    <div
      class="relative flex flex-row items-center w-full h-full"
      :class="isSPHeaderOpen ? 'justify-center' : 'justify-start'"
    >
      <div v-if="!isSPHeaderOpen" class="flex flex-row items-center">
        <img
          src="~/assets/images/sp-header-logo.svg"
          class="ml-6 sp-logo-img"
          alt="sp header log"
        />
        <p class="ml-4 text-xl font-bold font-fira">PyCon JP 2022</p>
      </div>
      <div class="absolute right-8 top-6">
        <div
          class="open-btn"
          :class="{ active: isSPHeaderOpen }"
          @click="isSPHeaderOpen = !isSPHeaderOpen"
        >
          <span></span><span></span><span></span>
        </div>
      </div>
      <div v-if="isSPHeaderOpen" class="flex flex-col items-center text-white">
        <div class="">
          <!--###############-->
          <!-- 概要セクション -->
          <!--###############-->
          <div class="sp-header-section">
            <div>
              <div class="arrow-right"></div>
              <p>{{ $t('common.menu.about.about') }}</p>
            </div>

            <div>
              <div class="sp-header-line"></div>
              <nuxt-link
                :to="localePath('/coc')"
                @click.native="isSPHeaderOpen = false"
              >
                <p class="ml-6 text-sm font-bold font-noto">
                  {{ $t('common.menu.about.coc') }}
                </p>
              </nuxt-link>
            </div>
            <!-- <div>
              <div class="sp-header-line"></div>
              <p>{{ $t('common.menu.about.venue') }}</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>{{ $t('common.menu.about.support') }}</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>{{ $t('common.menu.about.COVID-19Guidelines') }}</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>
                {{
                  $t('common.menu.about.infectionExpansionPreventionCheckSheet')
                }}
              </p>
            </div> -->
          </div>
          <!--###############-->
          <!-- イベントセクション -->
          <!--###############-->
          <div class="sp-header-section disable-color">
            <div>
              <div class="arrow-right"></div>
              <p>{{ $t('common.menu.event.event') }}</p>
            </div>
            <!-- <div>
              <div class="sp-header-line"></div>
              <p>{{ $t('common.menu.event.timetable') }}</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>{{ $t('common.menu.event.tutorial') }}</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>{{ $t('common.menu.event.sprint') }}</p>
            </div> -->
          </div>
          <!--###############-->
          <!-- スポンサーセクション -->
          <!--###############-->
          <div class="sp-header-section">
            <div>
              <div class="arrow-right"></div>
              <p>{{ $t('common.menu.sponsor.sponsor') }}</p>
            </div>
            <!-- <div>
              <div class="sp-header-line"></div>
              <p>{{ $t('common.menu.sponsor.sponsorList') }}</p>
            </div> -->
            <div>
              <div class="sp-header-line"></div>
              <a
                href="https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('common.menu.sponsor.sponsorApplicationInformation') }}
              </a>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <a
                href="https://drive.google.com/file/d/1EANBgiaURLUOuZ8HpWtXN8bgvUwMl-Wl/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('common.menu.sponsor.sponsorApplicationRequirements') }}
              </a>
            </div>
          </div>
          <!--###############-->
          <!-- コンテンツセクション -->
          <!--###############-->
          <div class="sp-header-section disable-color">
            <div>
              <div class="arrow-right"></div>
              <p>{{ $t('common.menu.contents.contents') }}</p>
            </div>
          </div>
          <!--###############-->
          <!-- スタッフセクション -->
          <!--###############-->
          <div class="sp-header-section disable-color">
            <div>
              <div class="arrow-right"></div>
              <p>{{ $t('common.menu.volunteer.volunteer') }}</p>
            </div>
          </div>
        </div>

        <!--###############-->
        <!-- 言語切り替えエリア -->
        <!--###############-->
        <div
          class="flex flex-row pr-6 my-3 font-bold leading-10 text-black  bg-secondary-400 whitespace-nowrap font-noto"
        >
          <img
            class="w-4 mx-4"
            src="~/assets/images/globe_alt.svg"
            alt="globe_alt"
          />
          <div v-if="$i18n.locale === 'ja'" class="flex flex-row text-ellipsis">
            <nuxt-link
              class="underline text-primary-700"
              :to="switchLocalePath('en')"
            >
              {{ $t('common.lang.en') }}
            </nuxt-link>
            <span class="mx-1.5"> / </span>
            <span> {{ $t('common.lang.ja') }} </span>
          </div>
          <div v-else class="flex flex-row text-ellipsis">
            <span> {{ $t('common.lang.en') }} </span>
            <span class="mx-1.5"> / </span>
            <nuxt-link
              class="underline text-primary-700"
              :to="switchLocalePath('ja')"
            >
              {{ $t('common.lang.ja') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
function stopScroll(event) {
  event.preventDefault()
}
export default {
  name: 'DefaultHeader',
  data() {
    return {
      isSPHeaderOpen: false,
    }
  },
  watch: {
    isSPHeaderOpen(newValue, oldValue) {
      if (newValue) {
        document.addEventListener('touchmove', stopScroll, { passive: false })
        document.addEventListener('mousewheel', stopScroll, { passive: false })
      } else {
        document.removeEventListener('touchmove', stopScroll)
        document.removeEventListener('mousewheel', stopScroll)
      }
    },
  },
}
</script>

<style scoped>
.sp-header {
  width: 100%;
  height: 89px;
  background: #fcfcfd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.sp-logo-img {
  width: 65px;
}
.sp-header-full {
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #1a1623;
}

.open-btn {
  position: relative;
  background: #952509;
  cursor: pointer;
  width: 44px;
  height: 36px;
  border-radius: 5px;
}
.open-btn.active {
  background: transparent;
}
.open-btn span {
  display: inline-block;
  transition: all 0.4s;
  position: absolute;
  left: 12px;
  height: 2px;
  background: #ffffff;
  width: 20px;
}

.open-btn span:nth-of-type(1) {
  top: 11px;
}
.open-btn span:nth-of-type(2) {
  top: 17px;
}
.open-btn span:nth-of-type(3) {
  top: 23px;
}
.open-btn.active span:nth-of-type(1) {
  width: 25px;
  top: 11px;
  left: 11px;
  transform: translateY(6px) rotate(-45deg);
}
.open-btn.active span:nth-of-type(2) {
  opacity: 0;
}
.open-btn.active span:nth-of-type(3) {
  width: 25px;
  top: 23px;
  left: 12px;
  transform: translateY(-6px) rotate(45deg);
}

.sp-header-section {
  margin-top: 20px;
}

.sp-header-section div {
  font-family: 'Noto Sans JP';
  font-size: 14px;
  font-weight: 500;
  margin-top: 14px;
  margin-left: 14px;
  display: flex;
  align-items: center;
}
.sp-header-section div p,
a {
  margin-left: 16px;
}

.sp-header-section div:nth-of-type(1) {
  font-family: 'Noto Sans JP';
  font-size: 14px;
  font-weight: 700;
  margin-top: 0px;
  margin-left: 0px;
}
.arrow-right {
  right: 0px;
  top: 5px;
  width: 8px;
  height: 8px;
  margin-left: 10px;
  margin-top: 8px;
  border-bottom: 3px solid #f77c5e;
  border-right: 3px solid #f77c5e;
  transform: rotate(315deg);
}
.sp-header-line {
  border-bottom: 1px solid #f77c5e;
  width: 20px;
  height: 1px;
}
.disable-color {
  opacity: 0.5;
}
</style>
