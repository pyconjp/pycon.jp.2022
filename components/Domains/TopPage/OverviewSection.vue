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
            <div class="overview-frame">
              <div class="mt-5 overview-card" />
              <div class="ml-5 overview-image" /><!-- image -->
              <!--</div>-->
            </div>
          </div>
          
          <!-- right text -->
          <div class="flex flex-col overview-text">
                <div class="flex flex-row">
                  <div class="mr-2 overview-text-icon">
                    <div class="overview-text-icon-inner" />
                  </div>
                  <div class="overview-text-title">What is <span style="color:#B32F0F">PyCon</span> ?</div>
                </div>
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
  width:100%;
  height: 736.64px;

  background: #EFEFF1;
}

.rectangle {
  width: 100%;
  height: 23px;
  background: #1A1623;
}

.overview-header {
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
  width: 650px;
  height: 400px;
  position: relative;
}

.overview-card {
  position: absolute;
  
  width: 590px;
  height: 370px;
  background-color: #B32F0F;
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 90%, 100% 100%, 10% 100%, 0% 90%);
}
.overview-image {
  position: absolute;
  /*width: 696.69px;
  height: 504.37px;*/
  width: 590px;
  height: 370px;

  background-image: url("@/assets/images/overview.jpg");
  /* secondary / secondary-50 */

  border: 1px solid #FEF9E6;
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 90%, 100% 100%, 10% 100%, 0% 90%);
}

.overview-text {
  padding: 0px 20px;
  gap: 20px;

  width: 590px;
  height: 360px;
}

.overview-text-icon {
  background-color: #1A1623;
  width: 31px;
  height: 31px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
  position: relative;
}
.overview-text-icon-inner {
  position: absolute;
  width: 15px;
  height: 15px;
  border-top: 7.5px solid #E84118;
  border-right: 7.5px solid #E84118;
  border-bottom: 7.5px solid #F3D34F;
  border-left: 7.5px solid #F3D34F;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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


