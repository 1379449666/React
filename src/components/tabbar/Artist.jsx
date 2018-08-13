
import React from 'react'
// 按需导入 UI 组件
import { NavBar, Icon } from 'antd-mobile';
import List from '../artist/List'
export default class Artist extends React.Component {
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
          // this.props.history.go(-1)
        }}
        leftContent={[
          <span key="0" style={{fontSize:"18px"}}>1CM艺人</span>
        ]}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <i key="1" className="iconfont user-add icon-user-add" style={{fontSize:"20px"}}></i>,
        ]}
      >
        </NavBar>
        <List/>
    </div>
  }
}
