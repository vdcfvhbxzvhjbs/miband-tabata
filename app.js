App({
  globalData: {
    duration:0,
    interval_list:[]
  },
  onCreate(options) {
    console.log('app on create invoke')
  },

  onDestroy(options) {
    console.log('app on destroy invoke')
  }
})
