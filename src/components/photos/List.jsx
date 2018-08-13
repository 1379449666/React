import React from 'react'

// 导入 UI 组件
import { Tabs } from 'antd-mobile'

export default class PhotoList extends React.Component {
  constructor() {
    super()
    this.state = {
      // 所有图片分类的数组
      catelist: [],
      // 分类下所有图片的列表
      photolist: []
    }
  }

  componentWillMount() {
    this.getCateList()
    // 当页面首次渲染的时候，默认获取 分类Id为 0 的所有图片类别
    this.getPhotoList(0)
  }

  render() {
    return <div>
      {/* 顶部的分类列表区域 */}
      {/* tabs 用于指定，当前 Tabs 组件要渲染哪些列表 */}
      <Tabs swipeable={false} tabs={this.state.catelist} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />} onTabClick={(tab, index) => this.tabClicked(tab, index)}>
        {this.renderContent}
      </Tabs>
    </div>
  }

  // 方法，表示 如何渲染 每个 tab 栏所对应的 页面结构
  renderContent = tab =>
    (<div style={{ backgroundColor: '#fff' }}>
      <figure style={{ margin: 0 }}>
        {this.state.photolist.map((item, i) => {
          return <figure key={i} style={{ margin: 20, position: 'relative' }} onClick={() => this.goPhotoInfo(item.id)}>
            <img src={item.img_url} alt="" style={{ width: '100%', minHeight: 355 }} />
            <div style={{ position: 'absolute', bottom: 0, color: '#fff', backgroundColor: 'rgba(0,0,0, 0.4)', maxHeight: '83px' }}>
              <h1 style={{ fontSize: 13, textAlign: 'center' }}>{item.title}</h1>
              <p style={{ margin: 0, textIndent: '2em', lineHeight: '25px' }}>{item.zhaiyao}</p>
            </div>
          </figure>
        })}
      </figure>
    </div>);

  // 获取所有图片分类的列表
  getCateList = async () => {
    const { data: res } = await this.$http.get('/api/getimgcategory')
    console.log(res)
    // 手动向分类数组中，头部追加一个 “全部” 分类
    res.message.unshift({ title: '全部', id: 0 })
    this.setState({
      catelist: res.message
    })
  }

  // 根据指定的图片分类id, 获取分类下的图片列表
  getPhotoList = async (cateId) => {
    const { data: res } = await this.$http.get('/api/getimages/' + cateId)
    console.log(res)
    this.setState({
      photolist: res.message
    })
  }

  // tab 栏被点击了
  tabClicked = (tab, index) => {
    // console.log(tab)
    // console.log(index)
    this.getPhotoList(tab.id)
  }

  // 点击图片跳转到详情页面
  goPhotoInfo = (id) => {
    // console.log(id)
    this.props.history.push('/home/photoinfo/' + id)
  }
}