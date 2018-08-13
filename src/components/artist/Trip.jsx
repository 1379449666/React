import React from 'react'
require('./trip.css')
export default class Trip extends React.Component {
    render() {
        return <div style={{ width: '100%' }}>
            <div className="title"><span>往返交通信息</span></div>
            <div className='aaa'>
                <div className="left"><p>去程</p></div>
                <div className="center">
                    <h4>杭州南站 - 虹桥站</h4>
                    <span>7月6日 08:30 - 10:19</span>
                </div>
                <div className="right">
                    <span>G30</span>
                </div>
            </div>
            <div className='aaa'>
                <div className="left"><p>返程</p></div>
                <div className="center">
                    <h4>杭州南站 - 虹桥站</h4>
                    <span>7月6日 08:30 - 10:19</span>
                </div>
                <div className="right">
                    <span>G30</span>
                </div>
            </div>
            {/* ---------------------- */}
            <div className="title"><span>住宿情况</span></div>
            <div className='aaa'>
                <div className="left"><p>住宿</p></div>
                <div className="center">
                    <h4>快捷酒店-标准间</h4>
                    <span>朝阳区百子湾路1号中天假日酒店</span>
                </div>
                <div className="right">
                    {/* <span>G30</span> */}
                </div>
            </div>
            {/* ------------------------------------ */}
            <div className="title"><span>往返车辆信息</span></div>
            <div className='aaa'>
                <div className="left"><p>去程</p></div>
                <div className="center">
                    <h4>杭州南站 - 虹桥站</h4>
                    <span>7月6日 08:30 - 10:19</span>
                </div>
                <div className="right">
                    <span>G30</span>
                </div>
            </div>
            <div className='aaa'>
                <div className="left"><p>返程</p></div>
                <div className="center">
                    <h4>杭州南站 - 虹桥站</h4>
                    <span>7月6日 08:30 - 10:19</span>
                </div>
                <div className="right">
                    <span>G30</span>
                </div>
            </div>
        </div>
    }
}