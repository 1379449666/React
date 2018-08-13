import React from 'react'

export default class MovieDetail extends React.Component {
  constructor() {
    super()
    // this.state  相当于 Vue  中的 data
    this.state = {
      // 电影详情信息
      movieinfo: null
    }
  }

  //  相当于 Vue 中的 created 生命周期函数
  componentWillMount() {
    this.getMovieInfo()
  }

  render() {
    // 在 React 的路由中，所有路由参数、编程式导航，都在 this.props 中
    // console.log(this.props)
    console.log(this.state.movieinfo && this.state.movieinfo.images.large)
    return <div>
      <h1 style={{textAlign: 'center'}}>{this.state.movieinfo && this.state.movieinfo.title}</h1>

      <div style={{textAlign: 'center'}}>
        <img src={this.state.movieinfo && this.state.movieinfo.images.large} alt="" />
      </div>

      <div style={{lineHeight: '30px', padding: '5px'}}>{this.state.movieinfo && this.state.movieinfo.summary}</div>
    </div>
  }

  // 获取电影详情
  getMovieInfo = async () => {
    const { data: res } = await this.$http.get('/api/v2/movie/subject/' + this.props.match.params.id)
    console.log(res)
    this.setState({
      movieinfo: res
    })
  }
}