// pages/home/home.js
Page({
  handleGetUserInfo(event){
    console.log(event);
    
  },
  data: {
    name: 'Coderwhy',
    age:18,
    students:[
      {id:110,name:'kobe',age:30},
      {id:111,name:'james',age:28},
      {id:112,name:'curry',age:32},
      {id:113,name:'why',age:18}
    ],
    counter:0
  },
  handleBtnClick(){
    // console.log('按钮发生了点击');
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  handleTabClick(event){
    console.log(event);
    
  },
  handleIncrementCpn(){
    //最终目的：修改my-sel中的counter
    //1.获取组件对象
    const my_sel=this.selectComponent('.sel-class')

    console.log(my_sel);
    //2.通过setData修改组件中的数据（不合理）
    // my_sel.setData({
    //   counter:my_sel.data.counter + 20
    // })

    // 3.通过方法对数据进行修改
    my_sel.incrementCounter(10)
  }
})