import React from 'react'

import { List } from 'antd-mobile'
const Item = List.Item;
const Brief = Item.Brief;

export default class NewsList extends React.Component {
  constructor() {
    super()
    this.state = {
      // 所有的新闻列表
      newslist: [],
      info: '<h1>111</h1>'
    }
  }

  componentWillMount() {
    this.getNewsList()
  }

  render() {
    return <div>
      {/* 新闻资讯的列表 */}
      <List renderHeader={() => <p style={{ textAlign: 'center', margin: 0 }}>新闻资讯</p>}>
        {/* 循环生成每一个新闻的Item项 */}
        {this.state.newslist.map(item => {
          return <Item
            key={item.id}
            thumb={item.img_url}
            multipleLine
            onClick={() => { this.goNewsDetail(item.id) }}
          >
            {item.title}
            <Brief>
              <span>发表时间：{this.dateFormat(item.add_time)}</span>
              <span>点击：{item.click}次</span>
            </Brief>
          </Item>
        })}
      </List>
    </div>
  }

  // 获取新闻列表数据
  getNewsList = async () => {
    const { data: res } = await this.$http.get('/api/getnewslist')
    console.log(res)
    this.setState({
      newslist: res.message
    })
  }

  // 点击跳转到新闻详情
  goNewsDetail = (id) => {
    // console.log('====================================');
    // console.log(this.props.history);
    // console.log('====================================');
    // this.props.history.push('/home/newsdetail/' + id)
  }
}