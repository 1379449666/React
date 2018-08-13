import React, { Component } from 'react'
export default class Cd extends Component {
    constructor() {
        super()
        this.state = {
            users : [
                {src :'/ponebook/logo.png', name:'李青', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'哈哈', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'到那时看', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'撒', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'打死', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'从v', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'彻底释放', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'方法', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'天天', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'流量', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'密码', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'版本', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'宝宝', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'李青', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'哈哈', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'到那时看', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'撒', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'打死', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'从v', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'彻底释放', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'方法', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'天天', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'流量', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'密码', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'版本', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
                {src :'/ponebook/logo.png', name:'宝宝', adr : '执行制片人', ade :'1CM领誉／制作中心／制片管理部' },
            ]
        }
    }
    render() {
        return <div style={{ width: '100%' }}>
            <div style={{
                width: '100%',
                height: '50px',
                backgroundColor: '#F5F5F5',
                padding: '16px',
            }}>
                <span style={{ color: '#777777' }}>当前条件筛选后共计：66人</span>
            </div>
            {
                this.state.users.map((val, i) => (
                    <div key={i} >
                        <div style={{ width: '100%', height: '63px', }}>
                            <div style={{ width: '30px', height: '43px', float: 'left', margin: '10px 15px', }}><img style={{ width: '43px', height: '43px', }} src={val.src} alt="" /></div>
                            <div style={{ width: '70%', height: '43px', float: 'left', margin: '10px', }}>
                                <span style={{ color: '#000', fontSize: '15px', fontWeight: 'bold ', }}>{val.name}</span>
                                <span style={{ fontSize: '13px', marginLeft: '10px', color: '#777777' }}>{val.adr}</span>
                                <p style={{ fontSize: '13px', color: '#777777', marginTop: '10px' }}>{val.ade}</p>
                            </div>
                        </div>
                        <div style={{ width: '80%', marginLeft: '15px', borderBottom: '1px solid #C2C2C2', }}></div>
                    </div>
                ))
            }
        </div>
    }
}