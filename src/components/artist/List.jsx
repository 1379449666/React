import React, { Component } from 'react'
import Screena from './Screena'
// import ReactDOM from 'react-dom'
// import { Link , } from 'react-router-dom';
// import {hashHistory}         from 'React-router'
// import css from './list.less'
import {withRouter} from "react-router-dom";
require('./list.sass')
class Cd extends Component {
    circular = ()=>{
        this.props.history.push('/task/abc')
        console.log('====================================');
        console.log(this.props.history);
        console.log('====================================');
    }
    constructor() {
        super()
        this.state = {
            users: [
                { src: '/ponebook/logo.png', name: '李青', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '哈哈', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '到那时看', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '撒', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '打死', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '从v', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '彻底释放', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '方法', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '天天', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '流量', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '密码', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '版本', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '宝宝', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '李青', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '哈哈', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '到那时看', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '撒', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '打死', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '从v', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '彻底释放', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '方法', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '天天', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '流量', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '密码', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '版本', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
                { src: '/ponebook/logo.png', name: '宝宝', adr: 'Dylan', age: '26岁 | 06月06日 | 188cm | 双子座', place: '北京', state: '拍片中', contract: '全约' },
            ]
        }
    }
    render() {
        return <div>
            <div className='abc'></div>
            <Screena />
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
                    <div key={i}>
                        <div style={{ width: '100%', height: '87px', }} onClick={()=>this.circular()}  >
                            {/* <Link to='/artist/Announcement'>go</Link> */}
                            <div style={{ width: '30px', height: '67px', float: 'left', margin: '10px 15px', }}><img style={{ width: '67px', height: '67px', }} src={val.src} alt="" /></div>
                            <div style={{ width: '70%', height: '43px', float: 'left', margin: '10px 0px 10px 30px ', }}>
                                <span style={{ color: '#000', fontSize: '15px', fontWeight: 'bold ', }}>{val.name}</span>
                                <span style={{ fontSize: '13px', marginLeft: '10px', color: '#777777' }}>{val.adr}</span>
                                <p style={{ fontSize: '13px', color: '#777777', lineHeight: '31px' }}>{val.age}</p>
                                <p style={{ display: 'inline-block', backgroundColor: '#f5f5f5', margin: 0, padding: '0px 15px', height: '20px', lineHeight: '20px', textAlign: 'center', border: '1px solid #f5f5f5', borderRadius: '9px' }}>{val.contract}</p>
                                <p style={{ display: 'inline-block', backgroundColor: '#f5f5f5', margin: 0, padding: '0px 15px', height: '20px', lineHeight: '20px', textAlign: 'center', border: '1px solid #f5f5f5', borderRadius: '9px' }}>{val.state}</p>
                                <p style={{ display: 'inline-block', backgroundColor: '#f5f5f5', margin: 0, padding: '0px 15px', height: '20px', lineHeight: '20px', textAlign: 'center', border: '1px solid #f5f5f5', borderRadius: '9px' }}>{val.place}</p>
                            </div>
                        </div>
                        <div style={{ width: '80%', marginLeft: '15px', borderBottom: '1px solid #C2C2C2', }}></div>
                    </div>
                ))
            }

        </div>

    }
 
}
export default withRouter(Cd)
// export default Cd

