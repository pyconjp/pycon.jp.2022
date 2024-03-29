export default {
  data() {
    return {
      staffs: [],
      core_staffs: [],
      day_staffs: []
    }
  },
  async fetch() {
    this.staffs = await this.$content('staffs').only(['body']).fetch()

    this.filter_staffs()
  },
  methods: {
    filter_staffs() {
      let coreStaff = 0
      let dayStaff = 0
      this.staffs.body.sort((a, b) => a.order - b.order)
      for (let i = 0; i < this.staffs.body.length; i++) {
        const sponsorRow = this.staffs.body[i]
        const hashi18n = this.split_i18n(sponsorRow)

        if (sponsorRow.staff_type === 'Core') {
          // スタッフ
          this.core_staffs[coreStaff++] = hashi18n
        } else if (sponsorRow.staff_type === 'Day') {
          // 当日スタッフ
          this.day_staffs[dayStaff++] = hashi18n
        }
      }
    },
    split_i18n(row) {
      // 言語別データ作成
      const hashJa = {}
      const hashEn = {}
      const hashi18n = {}

      // id
      hashJa.id = row.id
      hashEn.id = row.id
      // name
      hashJa.name = row.name_ja
      hashEn.name = row.name_en
      // url
      hashJa.twitter = row.twitter
      hashEn.twitter = row.twitter
      hashJa.facebook = row.facebook
      hashEn.facebook = row.facebook
      hashJa.github = row.github
      hashEn.github = row.github
      // img_file
      if (row.img_file && row.img_file.length > 0) {
        hashJa.img_file = row.img_file
        hashEn.img_file = row.img_file
      }
      // staff_type
      if (row.staff_type) {
        hashJa.staff_type = row.staff_type
        hashEn.staff_type = row.staff_type
      }
      // create hash
      hashi18n.ja = hashJa
      hashi18n.en = hashEn

      return hashi18n
    }
  }
}
