import React from 'react'
import ReactDOM from 'react-dom'

import { SegmentedControl, PullToRefresh } from 'antd-mobile'

export default class MovieList extends React.Component {
  constructor() {
    super()
    this.state = {
      // 被选中的分段器的索引值
      selectedIndex: 0,
      // 是否正在刷新数据，默认为 false，表示当前数据未刷新
      refreshing: false,
      height: document.documentElement.clientHeight - 93,
      // 页面中要渲染的数据
      data: [],
      // 每页显示多少条数据
      pageSize: 10,
      // 当前处理第几页
      nowPage: 1,
      // 当前分类下电影的总数量
      total: 0
    }
  }

  componentWillMount() {
    this.getMovieList()
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
    }), 0);
  }

  render() {
    return <div>
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['正在热映', '即将上映', 'Top250']}
        style={{ margin: '20px 10px' }}
        onChange={(e) => this.indexChanged(e)} />

      {/* 滑动刷新组件 */}
      <PullToRefresh
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        // 指示器， 需要传递一个对象，其中 deactivate 表示滑动的时候，给用户什么样的提示
        indicator={{ deactivate: '上拉可以刷新' }}
        // 指定 滑动的方向 'down' 表示下拉刷新   'up' 表示 上拉加载更多
        direction={'up'}
        // refreshing 是布尔值，表示当前的刷新状态
        refreshing={this.state.refreshing}
        // 事件， 表示 如果触发了刷新，则应该执行什么操作
        onRefresh={() => {
          // 在此方法中，经常获取下一屏的数据
          console.log('ok')
          // 先判断是否还有下一页
          // 公式   nowPage * pageSize >= total  就证明没有下一页了
          if (this.state.nowPage * this.state.pageSize >= this.state.total) return
          // 只要触发了 onRefresh 就立即把 loading 效果展示出来
          this.setState({ refreshing: true, nowPage: this.state.nowPage + 1 });

          setTimeout(() => {
            // 获取电影数据
            this.getMovieList()
            // this.setState({ refreshing: false });
          }, 1000);
        }}
      >
        {/* 专门用来渲染页面上数据的 */}
        {this.state.data.map(item => (
          <div key={item.id} style={{ display: 'flex', borderTop: '1px solid #eee' }} onClick={() => this.goDetail(item.id)}>
            {/* 渲染每一个电影数据 */}
            <figure style={{ margin: 10 }}>
              <img src={item.images.small} alt="" style={{ width: 85, height: 120 }} />
            </figure>
            <div>
              <p>电影名称：{item.title}</p>
              <p>上映年份：{item.year}年</p>
              <p>电影类型：{item.genres.join('，')}</p>
              <p>豆瓣评分：{item.rating.average}分</p>
            </div>
          </div>
        ))}
      </PullToRefresh>
    </div>
  }

  // 每当分段器的选中项改变，都会触发这个处理函数
  indexChanged = (e) => {
    // console.log(e.nativeEvent.selectedSegmentIndex)
    // console.log(e.nativeEvent.value)
    this.setState({
      selectedIndex: e.nativeEvent.selectedSegmentIndex,
      total: 0,
      data: [],
      nowPage: 1
    }, function () {
      this.getMovieList()
    })
  }

  // 获取电影列表
  getMovieList = async () => {
    // 分类不能写死
    // 所有电影分类的数组
    const arr = ['in_theaters', 'coming_soon', 'top250']
    // 公式 ：   (当前页码 - 1) * 每页显示多少条数据
    const offset = (this.state.nowPage - 1) * this.state.pageSize
    const { data: res } = await this.$http.get(`/api/v2/movie/${arr[this.state.selectedIndex]}?count=${this.state.pageSize}&start=${offset}`)
    console.log(res)
    this.setState({
      total: res.total,
      // 没当数据获取完毕，因该让老电影数据，拼接上 新的电影数据
      data: [...this.state.data, ...res.subjects],
      // 隐藏loading效果
      refreshing: false
    })
  }

  // 点击跳转到电影详情页面
  goDetail = (id) => {
    // console.log(id)
    // console.log(this.props)
    this.props.history.push('/home/movieinfo/' + id)
  }
}