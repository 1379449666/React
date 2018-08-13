import React from 'react'

import Preview from 'react-img-preview'

export default class PhotoDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      // 图片的详细信息
      photoinfo: {},
      // 需要预览的图片数组
      previewImages: []
    }
  }

  componentWillMount() {
    this.getPhotoInfo()
    this.getPreviewImages()
  }

  render() {
    return <div style={{ padding: 3 }}>
      <h1 style={{ fontSize: 14, textAlign: 'center', color: '#108EE9' }}>{this.state.photoinfo.title}</h1>

      <p style={{ fontSize: 12, display: 'flex', justifyContent: 'space-between' }}>
        <span>发表时间：{this.dateFormat(this.state.photoinfo.add_time)}</span>
        <span>点击：{this.state.photoinfo.click}次</span>
      </p>

      <hr />

      {/* 将来，这个位置，需要放置一个 图片预览组件 */}
      {/* 固定用法：通过 imglist 属性指定 预览图片的数组 */}
      <Preview
        imglist={this.state.previewImages}
        previewBoxStyle={{ border: '1px solid #eee' }}
        thumbImgStyle={{ margin: 10, width: 100, height: 100, boxShadow: '0 0 10px #666' }}></Preview>

      <div dangerouslySetInnerHTML={{ __html: this.state.photoinfo.content }} style={{ textIndent: '2em', lineHeight: '30px' }}></div>
    </div>
  }

  // 根据Id获取图片的详情
  getPhotoInfo = async () => {
    const { data: res } = await this.$http.get('/api/getimageInfo/' + this.props.match.params.id)
    console.log(res)
    this.setState({
      photoinfo: res.message[0]
    })
  }

  // 获取缩略图数组
  getPreviewImages = async () => {
    const { data: res } = await this.$http.get('/api/getthumimages/' + this.props.match.params.id)
    console.log(res)
    // 通过 forEach 循环，补充完整 预览图片的 信息
    res.message.forEach(item => {
      item.w = 600
      item.h = 400
    })

    this.setState({
      previewImages: res.message
    })
  }
}