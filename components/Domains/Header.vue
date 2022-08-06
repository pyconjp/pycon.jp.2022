<template>
  <nav class="sticky top-0 z-50 px-5 py-3 bg-white shadow-md header">
    <div class="flex flex-nowrap">
      <div class="my-auto">
        <nuxt-link to="/">
          <img
            src="@/assets/images/header-2022-logo.svg"
            alt="header_logo"
            class="header-logo"
          />
        </nuxt-link>
      </div>
      <div
        class="flex flex-row items-center justify-around w-full mx-10 text-xl font-bold font-fira whitespace-nowrap menu"
      >
        <!--###############-->
        <!-- 概要セクション -->
        <!--###############-->
        <div class="relative flex flex-row group">
          <p class="relative">
            {{ $t('common.menu.about.about') }}
          </p>
          <div class="arrow-bottom"></div>
          <div
            class="invisible rounded-md shadow-md child-menu top-7 group-hover:visible"
          >
            <a
              class="child-menu-record"
              href="https://drive.google.com/file/d/1iNF7VvDCd_gWDsSn2i5U8FB1IQWkWOM9/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <p class="ml-6">{{ $t('common.menu.about.coc') }}</p>
              </div>
            </a>
            <!-- <div class="child-menu-record">
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <p class="ml-6">{{ $t('common.menu.about.venue') }}</p>
              </div>
            </div>
            <div class="child-menu-record">
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <p class="ml-6">{{ $t('common.menu.about.support') }}</p>
              </div>
            </div> -->
            <!-- TODO: リンクは仮置きのため、修正すること
            <a
              class="child-menu-record"
              href="https://pyconjp.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <p class="ml-6">
                  {{ $t('common.menu.about.COVID-19Guidelines') }}
                </p>
              </div>
            </a> -->
            <!-- TODO: リンクは仮置きのため、修正すること
            <a
              class="child-menu-record"
              href="https://pyconjp.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <p class="ml-6">
                  {{
                    $t(
                      'common.menu.about.infectionExpansionPreventionCheckSheet'
                    )
                  }}
                </p>
              </div>
            </a> -->
          </div>
        </div>
        <!--###############-->
        <!-- イベントセクション -->
        <!--###############-->
        <div class="relative flex flex-row group disable-color">
          <p>{{ $t('common.menu.event.event') }}</p>
          <div class="arrow-bottom"></div>
          <div
            class="invisible rounded-md shadow-md child-menu top-7 group-hover:visible"
          >
            <!-- <div class="child-menu-record">
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <p class="ml-6">{{ $t('common.menu.event.timetable') }}</p>
              </div>
            </div>
            <div class="child-menu-record">
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <p class="ml-6">{{ $t('common.menu.event.tutorial') }}</p>
              </div>
            </div>
            <div class="child-menu-record">
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <p class="ml-6">{{ $t('common.menu.event.sprint') }}</p>
              </div>
            </div> -->
          </div>
        </div>
        <!--###############-->
        <!-- スポンサーセクション -->
        <!--###############-->
        <div class="relative flex flex-row group">
          <p>{{ $t('common.menu.sponsor.sponsor') }}</p>
          <div class="arrow-bottom"></div>
          <div
            class="invisible rounded-md shadow-md child-menu top-7 group-hover:visible"
          >
            <!-- <div class="child-menu-record">
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <a class="ml-6">{{ $t('common.menu.sponsor.sponsorList') }}</a>
              </div>
            </div> -->
            <a
              class="child-menu-record"
              href="https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <a class="ml-6">{{
                  $t('common.menu.sponsor.sponsorApplicationInformation')
                }}</a>
              </div>
            </a>
            <a
              class="child-menu-record"
              href="https://drive.google.com/file/d/1EANBgiaURLUOuZ8HpWtXN8bgvUwMl-Wl/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex w-full pt-2 pb-2 ml-6">
                <div class="arrow-right"></div>
                <a class="ml-6">{{
                  $t('common.menu.sponsor.sponsorApplicationRequirements')
                }}</a>
              </div>
            </a>
          </div>
        </div>
        <!--###############-->
        <!-- コンテンツセクション -->
        <!--###############-->
        <div class="flex flex-row disable-color">
          <p>{{ $t('common.menu.contents.contents') }}</p>
          <!-- 外部へリンクする場合は以下の画像を有効化する -->
          <!-- <img
            class="inline h-4 mt-1 ml-2"
            src="@/assets/images/link-icon.svg"
            alt="content"
          /> -->
        </div>
        <!--###############-->
        <!-- スタッフセクション -->
        <!--###############-->
        <div class="disable-color">
          <p>{{ $t('common.menu.volunteer.volunteer') }}</p>
        </div>
      </div>

      <!--###############-->
      <!-- 言語切り替えエリア -->
      <!--###############-->
      <div
        class="flex flex-row pr-6 my-3 font-bold leading-10 bg-secondary-400 whitespace-nowrap font-noto"
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
  </nav>
</template>

<script>
export default {
  name: 'DefaultHeader',
  data() {
    return {
      isAboutMenuOpen: false,
    }
  },
}
</script>

<style scoped>
.header {
  height: 89px;
}

.menu {
  /* overflow-x: scroll; */
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none; /* Firefox 対応 */
}

.menu::-webkit-scrollbar {
  /* Chrome, Safari 対応 */
  display: none;
}

.header-logo {
  width: 200px;
}

.arrow-bottom {
  right: 0px;
  top: 5px;
  width: 10px;
  height: 10px;
  margin-left: 10px;
  margin-top: 5px;
  border-bottom: 3px solid #b32f0f;
  border-right: 3px solid #b32f0f;
  transform: rotate(45deg);
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

.child-menu {
  background: #1a1623;
  position: absolute;
  border-radius: 2px;
  width: 270px;
  color: white;
  font-size: 15px;
  font-family: 'Noto Sans JP';
  white-space: normal;
}

.child-menu-record {
  display: block;
}
.child-menu-record:hover {
  background: #f3d34f;
  color: black;
}

.disable-color {
  opacity: 0.5;
}
</style>
