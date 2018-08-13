import React from 'react';
import ReactDOM from 'react-dom';
// 导入 App 根组件
import App from '@/components/App';
// registerServiceWorker 必须 依赖于 HTTPS 协议；
// 当前项目，只是运行在 HTTP 协议中，所以 ，可以把 registerServiceWorker 禁用掉
// import registerServiceWorker from '@/registerServiceWorker';

// 导入路由相关的组件
import { HashRouter, Route } from 'react-router-dom'
// 导入全局配置
import './global'
import './setre'
ReactDOM.render(< HashRouter >
        <Route path="/"component={App} /> 
        </HashRouter>, document.getElementById('root'));
        // registerServiceWorker();