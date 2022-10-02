<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="mt-10">
        <img
          src="@/assets/images/conference_vector.svg"
          alt="Keynote vector"
          class="mid-vector"
        />
      </div>

      <div class="mt-16 section-title font-noto">NOC</div>
      <div class="font-medium font-noto">
        <div v-if="staffs && noc && noc.length > 0">
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <div v-for="staff in noc" :key="staff.id" class="flex-1 m-5">
              <!--会社名-->
              <div class="mt-2">
                <img
                  class="inline"
                  width="60px"
                  height="60px"
                  :src="staff[$i18n.locale].img_file"
                />
                {{ staff[$i18n.locale].name }}
                <outer-link
                  :to="staff[$i18n.locale].twitter"
                  class="text-2xl font-bold font-noto text-primary-700"
                >
                  <img
                    class="inline w-6 h-6"
                    data-v-bf323f94=""
                    :src="require('@/assets/images/sns/twitter.svg')"
                  />
                </outer-link>
                <outer-link
                  :to="staff[$i18n.locale].github"
                  class="text-2xl font-bold font-noto text-primary-700"
                >
                  <img
                    class="inline w-6 h-6"
                    data-v-bf323f94=""
                    :src="require('@/assets/images/sns/github.svg')"
                  />
                </outer-link>
                <outer-link
                  :to="staff[$i18n.locale].facebook"
                  class="text-2xl font-bold font-noto text-primary-700"
                >
                  <img
                    class="inline w-6 h-6"
                    data-v-bf323f94=""
                    :src="require('@/assets/images/sns/facebook.svg')"
                  />
                </outer-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 section-title font-noto">NOC</div>
      <div class="font-medium font-noto">
        <div v-if="staffs && noc && noc.length > 0">
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <div v-for="staff in noc" :key="staff.id" class="flex-1 m-5">
              <!--会社名-->
              <div class="mt-2">
                <img
                  class="inline"
                  width="60px"
                  height="60px"
                  :src="staff[$i18n.locale].img_file"
                />
                {{ staff[$i18n.locale].name }}
                <outer-link
                  :to="staff[$i18n.locale].twitter"
                  class="text-2xl font-bold font-noto text-primary-700"
                >
                  <img
                    class="inline w-6 h-6"
                    data-v-bf323f94=""
                    :src="require('@/assets/images/sns/twitter.svg')"
                  />
                </outer-link>
                <outer-link
                  :to="staff[$i18n.locale].github"
                  class="text-2xl font-bold font-noto text-primary-700"
                >
                  <img
                    class="inline w-6 h-6"
                    data-v-bf323f94=""
                    :src="require('@/assets/images/sns/github.svg')"
                  />
                </outer-link>
                <outer-link
                  :to="staff[$i18n.locale].facebook"
                  class="text-2xl font-bold font-noto text-primary-700"
                >
                  <img
                    class="inline w-6 h-6"
                    data-v-bf323f94=""
                    :src="require('@/assets/images/sns/facebook.svg')"
                  />
                </outer-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OuterLink from '@/components/Elements/OuterLink'
import staffsMixin from '@/utils/staffs_mixin'

export default {
  name: 'StaffSection',
  components: {
    OuterLink,
  },
  mixins: [staffsMixin],
}
</script>

<style scoped>
.mid-vector {
  /* width: 72.28px; */
  height: 23.01px;
  text-align: center;
}

.section-title {
  height: 30px;
  left: calc(50% - 143.58px / 2 - 0.42px);
  top: 71.01px;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  text-align: center;
  color: #1a1623;
}

.coc-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1023px) {
  .coc-content {
    margin-top: 60px;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .sp-width {
    width: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .coc-content {
    width: 100%;
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

li {
  list-style-type: none;
  position: relative;
  padding-left: 12px;
}
li:before {
  border-radius: 50%;
  width: 6px;
  height: 6px;
  display: block;
  position: absolute;
  left: 0;
  top: 0.6em;
  content: '';
  background: #e84118;
}
</style>
