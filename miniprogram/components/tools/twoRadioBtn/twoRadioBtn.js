// components/tools/twoRadioBtn/twoRadioBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    feman: 0,
    man: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkedHandle(e) {
      if(e.currentTarget.dataset.num == 0) {
        this.setData({
          feman: 0,
          man: !this.data.man
        })
      } else {
        this.setData({
          feman: !this.data.feman,
          man: 0
        })
      }
    }
  }
})
