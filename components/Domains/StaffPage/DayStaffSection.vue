<template>
  <!-- 当日スタッフ -->
  <div class="font-medium font-noto">
    <div v-if="staffs && day_staffs && day_staffs.length > 0">
      <div class="grid grid-cols-3 lg:grid-cols-4 lg:mx-60">
        <div v-for="staff in day_staffs" :key="staff.id" class="flex-1 m-5">
          <div class="inline bg-tertiary-50 w-[60px] h-[60px] mr-1">
            <div v-if="staff[$i18n.locale].img_file">
              <img
                class="inline sponsor-chipped-card"
                width="60px"
                height="60px"
                :src="staff[$i18n.locale].img_file"
              />
            </div>
            <div v-else>
              <img
                class="inline sponsor-chipped-card"
                width="60px"
                height="60px"
                :src="require('@/assets/images/staff/staff_icon_default.png')"
              />
            </div>
          </div>
          {{ staff[$i18n.locale].name }}
          <div>
            <div v-if="staff[$i18n.locale].twitter" class="inline">
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
            </div>
            <div v-if="staff[$i18n.locale].facebook" class="inline">
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
            <div v-if="staff[$i18n.locale].github" class="inline">
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
  name: 'DayStaff',
  components: {
    OuterLink,
  },
  mixins: [staffsMixin],
}
</script>

<style lang="scss" scoped></style>
