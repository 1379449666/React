// 全局的配置文件
import React from 'react'
// 导入 全局的样式表
import '@/css/global.css';
// 导入并配置 axios
import axios from 'axios'

// 配置 请求的根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
    // 挂载 axios 到每个组件中
React.Component.prototype.$http = axios

// 全局定义一个格式化时间的方法
React.Component.prototype.dateFormat = function(dtStr) {
    const dt = new Date(dtStr)

    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1).toString().padStart(2, '0')
    const d = dt.getDate().toString().padStart(2, '0')

    const hh = dt.getHours().toString().padStart(2, '0')
    const mm = dt.getMinutes().toString().padStart(2, '0')
    const ss = dt.getSeconds().toString().padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}