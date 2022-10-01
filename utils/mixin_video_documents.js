export default {
  data() {
    return {
      timetables: [],
      approvalData: {},
      // videos: {},
      // documents: {},
      // approvalVideo: {},
      // approvalDoc: {},
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
          // this.videos[timetableRow.code] = ''
        } else {
          // this.videos[timetableRow.code] = timetableRow.Video
          approvalList.push(timetableRow.Video)
        }
        // スライドのリンク
        if (timetableRow.Document.length === 0) {
          // this.documents[timetableRow.code] = ''
          approvalList.push('')
        } else {
          // this.documents[timetableRow.code] = timetableRow.Document
          approvalList.push(timetableRow.Document)
        }
        // Youtube掲載許可
        if (timetableRow.approval_video === 'OK') {
          // this.approvalVideo[timetableRow.code] = true
          approvalList.push(true)
        } else {
          // this.approvalVideo[timetableRow.code] = false
          approvalList.push(false)
        }
        // スライド掲載許可
        if (timetableRow.approval_doc === 'OK') {
          // this.approvalDoc[timetableRow.code] = true
          approvalList.push(true)
        } else {
          // this.approvalDoc[timetableRow.code] = false
          approvalList.push(false)
        }
        this.approvalData[timetableRow.code] = approvalList
      }
    },
  },
}
