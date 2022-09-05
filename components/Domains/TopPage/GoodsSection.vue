<template>
  <div
    class="flex flex-col items-center text-center component-border-top bg-tertiary-100"
  >
    <section-title main="GOODS" sub="グッズ" :primary="false" />
    <div
      class="flex flex-col items-center justify-center w-11/12 mt-10 mb-8 lg:flex-row lg:w-10/12"
    >
      <div class="flex flex-col items-center lg:mt-10 lg:flex-row">
        <!-- left pane -->
        <div class="flex justify-center w-10/12 lg:flex-1 goods-frame">
          <!-- goods-frame -->
          <div class="relative w-full">
            <div
              class="absolute w-11/12 mt-5 border-solid border-1 goods-clip bg-primary-700 h-5/6"
            />
            <img
              class="absolute object-cover w-11/12 h-5/6 left-4 goods-clip"
              src="~/assets/images/goods.jpg"
              alt="goods_img"
            />
          </div>
        </div>

        <!-- right pane -->
        <div class="flex flex-col w-11/12 mt-10 lg:ml-10 lg:flex-1 lg:mt-0">
          <div class="flex flex-row">
            <div class="mr-1 goods-text-icon" />
            <div class="goods-text-title text-tertiary-900 font-fira">
              Official <span class="text-primary-700">GOODS</span>
            </div>
          </div>
          <div
            class="pl-5 text-left goods-text-description text-tertiary-800 font-fira"
          >
            {{ $t('pages.index.goodsDescription') }}
            <br />
            <div class="font-bold text-primary-700">
              <outer-link :to="$t('pages.index.goodsBlogLink').toString()">
                {{ $t('pages.index.goodsBlog') }}
              </outer-link>
            </div>
          </div>
          <div class="mt-28">
            <outer-link to="https://suzuri.jp/goods_pyconjp">
              <div
                class="w-full py-2 mt-1 text-2xl font-bold text-center rounded shadow-md font-noto bg-primary-700 text-tertiary-100"
              >
                {{ $t('pages.index.goodsSuzuri') }}
              </div>
            </outer-link>
          </div>
        </div>
      </div>
    </div>
    <div class="snake-face-base">
      <div class="self-end hidden snake-face lg:block" />
    </div>
  </div>
</template>

<script>
import OuterLink from '@/components/Elements/OuterLink'
import SectionTitle from '@/components/Elements/SectionTitle'

export default {
  name: 'GoodsSection',
  components: {
    OuterLink,
    SectionTitle,
  },
}
</script>

<style scoped>
.goods-frame {
  min-width: 375px;
  min-height: 600px;
}

.goods-clip {
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

.goods-text-icon {
  width: 31px;
  height: 31px;
  background-image: url('@/assets/images/card_title_icon.svg');
}
.goods-text-title {
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 100%;
  letter-spacing: 0.02em;
  @media screen(lg) {
    font-size: 36px;
  }
}

.goods-text-description {
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

.snake-face {
  position: absolute;
  width: 150px;
  height: 90px;
  left: 85px;
  background-image: url('@/assets/images/section_bg_img_right_yellow.svg');
}
</style>
