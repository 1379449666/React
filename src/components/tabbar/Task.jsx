import React from 'react'
// 按需导入 UI 组件
import { NavBar, Icon } from 'antd-mobile';
export default class Task extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <div>
      {/* 头部导航条区域 */}
      <NavBar
        mode="dark"
        // icon={<Icon type="left" />}
        // 每当点击左侧的 返回按钮，会触发 onLeftClick
        onLeftClick={() => {
          // 调用 路由提供的 历史记录API，后退
          this.props.history.go(-1)
        }}
        leftContent={[
          <span key="0" style={{fontSize:"18px"}}>1CM任务</span>
        ]}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        </NavBar>
    </div>
  }
}

// import React from 'react'

// // 导入 UI 组件
// import { Carousel, WingBlank, Grid } from 'antd-mobile';

// export default class Home extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       // 轮播图的数据
//       data: [],
//       imgHeight: 176,
//       // 九宫格的数据
//       gridlist: [{
//         icon: '/menus/menu1.png',
//         text: `新闻资讯`,
//         // 自定义一个新属性 path，表示点击 这一个 Grid 格子的时候，跳转到哪个路由中去
//         path: '/home/newslist'
//       }, {
//         icon: '/menus/menu2.png',
//         text: `图片分享`,
//         // 指定图片分享按钮，点击时候要跳转到了URL地址
//         path: '/home/photos'
//       }, {
//         icon: '/menus/menu3.png',
//         text: `商品购买`
//       }, {
//         icon: '/menus/menu4.png',
//         text: `留言反馈`
//       }, {
//         icon: '/menus/menu5.png',
//         text: `视频专区`,
//         path: '/home/movies'
//       }, {
//         icon: '/menus/menu6.png',
//         text: `联系我们`
//       }]
//     }
//   }

//   componentWillMount() {
//     this.getSwiperList()
//   }

//   render() {
//     return <div>
//       {/* 轮播图组件 */}
//       <WingBlank>
//         <Carousel
//           autoplay={false}
//           infinite
//           beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//           afterChange={index => console.log('slide to', index)}
//         >
//           {this.state.data.map(val => (
//             <a
//               key={val.id}
//               href={val.url}
//               style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
//             >
//               <img
//                 src={val.img}
//                 alt=""
//                 style={{ width: '100%', verticalAlign: 'top' }}
//                 onLoad={() => {
//                   // fire window resize event to change height
//                   window.dispatchEvent(new Event('resize'));
//                   this.setState({ imgHeight: 'auto' });
//                 }}
//               />
//             </a>
//           ))}
//         </Carousel>
//       </WingBlank>

//       {/* 六宫格区域 */}
//       {/* data 指定了要渲染的数据 */}
//       {/* columnNum 指定了每一行显示几个格子 */}
//       <Grid data={this.state.gridlist} columnNum={3} onClick={(el, index) => this.goSubMenu(el, index)} />
//     </div>
//   }

//   // 获取轮播图的方法
//   getSwiperList = async () => {
//     const { data: res } = await this.$http.get('/api/getlunbo')
//     this.setState({
//       data: res.message
//     })
//   }

//   // 点击跳转到子菜单
//   goSubMenu = (el, index) => {
//     // console.log(el)
//     // console.log(index)
//     this.props.history.push('/aaa')
//   }
// }  