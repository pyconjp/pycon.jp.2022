<template>
  <!-- レビュースタッフ -->
  <div class="grid grid-cols-1 lg:grid-cols-5">
    <div v-for="staff in review_staff_list" :key="staff" class="flex-1 m-5">
      <!--会社名-->
      <div class="mt-2 underline">
        {{ staff }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewStaff',
  components: {},
  data: () => ({
    review_staff_list: [
      'masamori',
      'Soogie',
      'Yukio Okuda',
      'Jonas Obrist',
      'Iskandar Setiadi',
      'Jon Gaul',
      'Hiroya Akita(akky)',
      'Akihiro Nitta',
      'Siddharth Gupta',
      'jbking',
      '宵勇樹',
      'sk',
      'Cagil (チャール) Ulusahin Sonmez',
      'conao3',
      'kubo',
      'Ike Tohru',
      '武中 翔',
      '川松裕史',
      'dhesusan',
    ],
  }),
}
</script>
