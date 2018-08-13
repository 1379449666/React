import React from 'react'

export default class NewsDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      // 新闻详情
      newsinfo: {}
    }
  }

  componentWillMount() {
    this.getNewsInfo()
  }

  render() {
    const news = this.state.newsinfo
    return <div style={{ padding: '0 3px' }}>
      <h1 style={{ color: '#108EE9', fontSize: 14, textAlign: 'center' }}>{news.title}</h1>
      <p style={{ display: 'flex', justifyContent: 'space-between', color: '#108EE9' }}>
        <span>发表时间：{this.dateFormat(news.add_time)}</span>
        <span>点击：{news.click}次</span>
      </p>
      <hr />
      {/* 注意：React中，使用 dangerouslySetInnerHTML 渲染 带有 HTML 标签的内容 */}
      <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
    </div>
  }

  // 获取新闻详情
  getNewsInfo = async () => {
    const { data: res } = await this.$http.get('/api/getnew/' + this.props.match.params.id)
    this.setState({
      newsinfo: res.message[0]
    })
  }
}