export default {
  data() {
    return {
      staffs: [],
      day_staffs: [],
      noc: [],
    }
  },
  async fetch() {
    this.staffs = await this.$content('staffs').only(['body']).fetch()

    this.filter_staffs()
  },
  methods: {
    filter_staffs() {
      let noc = 0
      let day = 0
      this.staffs.body.sort((a, b) => a.order - b.order)
      for (let i = 0; i < this.staffs.body.length; i++) {
        const sponsorRow = this.staffs.body[i]
        const hashi18n = this.split_i18n(sponsorRow)

        if (sponsorRow.staff_type === 'NOC') {
          // ダイアモンドスポンサー
          this.noc[noc++] = hashi18n
        } else if (sponsorRow.staff_type === 'Day') {
          // シルバースポンサー
          this.day_staffs[day++] = hashi18n
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
    },
  },
}
