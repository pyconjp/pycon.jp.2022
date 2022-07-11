<template>
  <div class="relative mt-20 overview">
    <!--<div class="overview-inner">-->
      <div class="flex flex-col items-center">
        <!-- 黒い線 -->
        <div class="rectangle" />
        <!-- 1行目 start -->
        <div class="flex flex-col items-center mt-10 overview-header">
            <div class="overview-title">OVERVIEW</div>
            <div class="overview-furi">概要</div>
        </div><!-- 1行目 end -->
        <div class="flex flex-row mt-10">
          <!-- left image -->
          <div>
            <div class="mb-10 mr-10 overview-frame">
              <!--<div class="overview-vector">-->
              <div class="overview-image" /><!-- image -->
              <!--</div>-->
            </div>
          </div>
          
          <!-- right text -->
          <div class="flex flex-col overview-text">
                <div class="overview-text-title">What is <span style="color:#B32F0F">PyCon</span> ?</div>
                <div class="overview-text-description">
                  {{ $t('pages.index.overviewDescription') }}
                </div>
          </div>
        </div>
      </div>
    <!--</div>-->
  </div>  
</template>

<script>
export default {
  name: 'OverviewSection',
}
</script>

<style scoped>
.overview {
  flex: none;
  order: 3;
  flex-grow: 0;
  width: 1440px;
  height: 736.64px;

  background: #EFEFF1;
}
/*
.overview-inner {
  top: 0;
  left: 0;
  background: #EFEFF1;
  width: 1440px;
  height: 713.64px;
}*/

.rectangle {
  width: 1440px;
  height: 23px;
  background: #1A1623;
}

.overview-header {
  /*width: 303px;
  height: 96.85px;
  left: 568px;*/
  top: 71px;
  text-align: center;
}

.overview-title{
  /* font */
  font-family: 'Bayon';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  color: #7B7887;
  letter-spacing: 0.02em;
  /* shadow / base */
  /*text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);*/
}

.overview-furi {
  /*width: 40px;*/
  /* text / ja / .text-xl.text-bold */
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  /* identical to box height, or 20px */
  /* tartiary / tartiary-900 */
  color: #1A1623;
}

.overview-frame {
  width: 595.55px;
  height: 370px;
  filter: drop-shadow(-16px 16px 0px #B32F0F);

  /*background:
    linear-gradient(45deg,  transparent 40px, #FCFCFD 40px),
    linear-gradient(225deg, transparent 40px, #FCFCFD 40px);
  background-position: bottom left, top right;
  background-size: 100% 50%;
  background-repeat: no-repeat;*/
}
.overview-image {
  /*width: 696.69px;
  height: 504.37px;*/
  width: 595.55px;
  height: 370px;

  background-image: url("@/assets/images/overview.jpg");
  /* secondary / secondary-50 */

  border: 1px solid #FEF9E6
}

.overview-text {
  padding: 0px 20px;
  gap: 20px;

  width: 590px;
  height: 360px;
}

.overview-text-title {
  /* text */
  width: 268px;
  height: 36px;

  /* text / en / .text-4xl.text-bold */

  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #1A1623;

  white-space:nowrap;
}

.overview-text-description {
  width: 550px;
  height: 192px;

  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  letter-spacing: 0.03em;

  /* tartiary-800 */

  color: #24222B;

}

</style>


