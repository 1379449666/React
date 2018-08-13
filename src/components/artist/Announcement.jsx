import React from 'react'
import { NavBar, Icon, Tabs, WhiteSpace } from 'antd-mobile';
import Trip from './Trip'
require('./announcenment_css.css');
const tabs = [
    { title: '内容' },
    { title: '人员' },
    { title: '行程' },
    { title: '其他' },
];


const TabExample = () => (
    <div>
        <WhiteSpace />
        <div style={{ height: '100%' }}>
            <Tabs tabs={tabs}
                initalPage={'t3'}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff', }}>
                    {/* <OurCompany/> */}
                    内容
          </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                    {/* <Partners/> */}
                    人员
          </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                    {/* <Partners/> */}
                    <Trip />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                    {/* <Partners/> */}
                    其他
          </div>
            </Tabs>
        </div>
    </div>
);

export default class Artist extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return <div style={{ backgroundColor: '#f5f5f5' }}>
            {/* 头部导航条区域 */}
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                // 每当点击左侧的 返回按钮，会触发 onLeftClick
                onLeftClick={() => {
                    // 调用 路由提供的 历史记录API，后退
                    this.props.history.go(-1)
                }}
                leftContent={[
                    <span key="0" style={{ fontSize: "18px", marginLeft: '10px' }}>通告详情</span>
                ]}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <i key="1" className="iconfont user-add icon-user-add" style={{ fontSize: "20px" }}></i>,
                ]}
            >
            </NavBar>
            <div className='top'>
                <h4>美宝莲TVC广告拍摄</h4>
                <span>影视经纪部</span>
                <p>2018-08-24 ／ 北京市-朝阳区-百子湾东路东朝时代东区5号楼201室</p>
                <div>
                    <div >
                        <img src="/ponebook/logo.png" alt="" />
                        <p>赵尧坷</p>
                    </div>
                    <div >
                        <img src="/ponebook/logo.png" alt="" />
                        <p>赵尧坷</p>
                    </div>
                    <div >
                        <img src="/ponebook/logo.png" alt="" />
                        <p>赵尧坷</p>
                    </div>
                    <div >
                        <img src="/ponebook/logo.png" alt="" />
                        <p>赵尧坷</p>
                    </div>
                    <div >
                        <img src="/ponebook/logo.png" alt="" />
                        <p>赵尧坷</p>
                    </div>
                </div>
            </div>
            <TabExample />
        </div>
    }
}
