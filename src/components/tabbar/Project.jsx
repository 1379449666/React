import React from 'react'
// 按需导入 UI 组件
import { NavBar, Icon } from 'antd-mobile';
// import Announcement from '../artist/Announcement'
export default class Project extends React.Component {
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
          <span key="0" style={{fontSize:"18px"}}>1CM项目</span>
        ]}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        </NavBar>
        <div style={{width: '1rem', height: '1rem', backgroundColor:'red'}}></div>
        <div style={{width: '100px', height: '100px', backgroundColor:'yellow'}}></div>
        {/* <Announcement/> */}
        
    </div>
  }
}
