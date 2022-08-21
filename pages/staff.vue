<template>
  <div>
    <chair-person-section />
    <staff-section />
    <day-staff-section />
    <contact-section />
  </div>
</template>

<script>
import ChairPersonSection from '@/components/Domains/StaffPage/ChairPersonSection'
import StaffSection from '@/components/Domains/StaffPage/StaffSection'
import DayStaffSection from '@/components/Domains/StaffPage/DayStaffSection'
import ContactSection from '@/components/Domains/StaffPage/ContactSection'

export default {
  name: 'StaffPage',
  components: {
    ChairPersonSection,
    StaffSection,
    DayStaffSection,
    ContactSection,
  },
}
</script>
