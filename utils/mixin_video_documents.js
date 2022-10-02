export default {
  data() {
    return {
      timetables: [],
      approvalData: {},
    }
  },
  async fetch() {
    this.timetables = await this.$content('timetable').only(['body']).fetch()

    this.filter_timetables()
  },
  methods: {
    filter_timetables() {
      for (let i = 0; i < this.timetables.body.length; i++) {
        const timetableRow = this.timetables.body[i]
        const approvalList = []
        // Youtubeのリンク
        if (timetableRow.Video.length === 0) {
          approvalList.push('')
        } else {
          approvalList.push(timetableRow.Video)
        }
        // スライドのリンク
        if (timetableRow.Document.length === 0) {
          approvalList.push('')
        } else {
          approvalList.push(timetableRow.Document)
        }
        // Youtube掲載許可
        if (timetableRow.approval_video === 'OK') {
          approvalList.push(true)
        } else {
          approvalList.push(false)
        }
        // スライド掲載許可
        if (timetableRow.approval_doc === 'OK') {
          approvalList.push(true)
        } else {
          approvalList.push(false)
        }
        this.approvalData[timetableRow.code] = approvalList
      }
    },
  },
}
