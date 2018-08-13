import React,{Component} from 'react'
const Xinxi = () =>(
    <div style={{height: '44px',width: '100%',display:'flex'}}>
        <div style={{flex:1, textAlign:'center', lineHeight:'44px',color:'#000'}}>
            <span style={{color:'#000'}}>司龄</span>
            <span ></span>
        </div>
        <div style={{flex:1, textAlign:'center', lineHeight:'44px',color:'#b3b3bb3'}}>
            <span style={{color:'#b3b3b3'}}>生日</span>
        </div>
        <div style={{flex:1, textAlign:'center', lineHeight:'44px',color:'#b3b3bb3'}}>
        <span style={{color:'#b3b3b3'}}>身高</span>
        </div>
        <div style={{flex:1, textAlign:'center', lineHeight:'44px',color:'#b3b3bb3'}}>
            <span style={{color:'#b3b3b3'}}>筛选</span>
        </div>
    </div>
)
export default class Information extends Component {
    render() {
        return <Xinxi/>
    }
}