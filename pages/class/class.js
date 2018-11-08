
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "妈妈专区",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '母乳存储',
              image: "/assets/icons/b1.png"
            },
            {
              child_id: 2,
              name: '防溢乳垫',
              image: "/assets/icons/b1.png"
            },
            {
              child_id: 3,
              name: '吸奶器',
              image: "/assets/icons/b1.png"
            },
            {
              child_id: 4,
              name: '束缚带',
              image: "/assets/icons/b1.png"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "奶粉辅食",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '一段奶粉',
              image: "/assets/icons/b2.png"
            },
            {
              child_id: 2,
              name: '二段奶粉',
              image: "/assets/icons/b2.png"
            },
            {
              child_id: 3,
              name: '三段奶粉',
              image: "/assets/icons/b2.png"
            },
            {
              child_id: 4,
              name: '四段奶粉',
              image: "/assets/icons/b2.png"
            },
            {
              child_id: 5,
              name: '特配奶粉',
              image: "/assets/icons/b2.png"
            },
            {
              child_id: 6,
              name: '有机奶粉',
              image: "/assets/icons/b2.png"
            },
            {
              child_id: 7,
              name: '原装进口',
              image: "/assets/icons/b2.png"
            },
            {
              child_id: 8,
              name: '国产奶粉',
              image: "/assets/icons/b2.png"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "尿裤湿巾",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'NB新生儿',
              image: "/assets/icons/b3.png"
            },
            {
              child_id: 2,
              name: 'S号',
              image: "/assets/icons/b3.png"
            },
            {
              child_id: 3,
              name: 'M号',
              image: "/assets/icons/b3.png"
            },
            {
              child_id: 4,
              name: 'L号',
              image: "/assets/icons/b3.png"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "车床寝具",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
      console.log(id,index)
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})
