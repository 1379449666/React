import React, { Component } from 'react';
import '@/css/App.css';

// 按需导入 UI 组件
import {  TabBar } from 'antd-mobile';

// 导入路由组件
import { Route, Redirect } from 'react-router-dom'

// 导入 路由相关的组件页面
import Task from '@/components/tabbar/Task'
import Project from '@/components/tabbar/Project'
import Artist from '@/components/tabbar/Artist'
import PhoneBook from '@/components/tabbar/PhoneBook'
// import NewsList from '@/components/news/List'
// import NewsDetail from '@/components/news/Detail'
// import PhotoList from '@/components/photos/List'
// import PhotoDetail from '@/components/photos/Detail'
// import MovieList from '@/components/movies/List'
// import MovieDetail from '@/components/movies/Detail'
import Announcement from '@/components/artist/Announcement'
class App extends Component {
  constructor(props) {
    super()
    this.state = {
      // 是否隐藏 tabbar
      hidden: false,
      // 被选中的 TabBar.Item 的名称， 默认让首页 被高亮选中
      selectedTab: ''
    }
  }

  // 组件将要被挂载
  componentWillMount() {
    console.log('重新执行 了 constructor， App组件被重新创建了！')
    // 在构造函数中，如果想访问 props， 不能直接使用 this.porps; 需要通过 constructor 的形参来接收并使用
    // console.log(this.props)
    console.log(this.props.location)
    const arr = this.props.location.pathname.split('/')
    this.setState({
      selectedTab: arr[1]
    })
  }

  // 组件将要接收新的 props 数据
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.history.location.pathname)
    const arr = nextProps.history.location.pathname.split('/')
    // console.log(arr)
    this.setState({
      selectedTab: arr[1]
    })
  }

  render() {
    return (
      <div className="App">



        {/* 底部的 Tabbar 区域 */}
        <TabBar
          // unselectedTintColor 设置 未被选中时候 TabBar.Item 项的文字颜色
          unselectedTintColor="#949494"
          // tintColor 设置被选中的 TabBar.Item 项的文字颜色
          tintColor="#000"
          // barTintColor 设置 整个导航条的 背景色
          barTintColor="white"
          // hidden 表示是否隐藏当前的 tab 栏
          hidden={this.state.hidden}
        >
          {/* 第1个Item项 任务 */}
          <TabBar.Item
            // title 设置 当前Item项显示的文字
            title="任务"
            // icon 用于指定未选中时候，当前 Item 项展示的小图标
            icon={{ uri: '/icons/task.svg' }}
            // selectedIcon 用于指定当前Item项被选中以后，要展示的图标
            selectedIcon={{ uri: '/icons/task-active.svg' }}
            // selected 是一个属性，接收一个bool值，true表示当前Item项应该被高亮选中；false 表示应该被高亮选中
            selected={this.state.selectedTab === 'Task'}
            // 一般，selected 选中项 都要和 onPress 事件配合使用
            // 只要点击了 当前的 Item 项，就会触发 当前 Item 项的 onPress 事件
            onPress={() => {
              this.setState({
                selectedTab: 'Task',
              });
              this.props.history.push('/Task')
            }}
          >
            {/* 当用户访问的是 / 根路径，那么显示出 App.jsx 根组件以后，要立即重定向到 /Task 地址，默认显示 Task 组件 */}
            <Route exact path="/" render={() => <Redirect to="/Task" />} />
            {/* /Task/newslist */}
            <Route exact path="/Task" component={Task} />
            <Route path="/task/abc" component={Announcement} />
            {/* <Route path="/home/newslist" component={NewsList} />
            <Route path="/home/newsdetail/:id" component={NewsDetail} />
            <Route path="/home/photos" component={PhotoList} />
            <Route path="/home/photoinfo/:id" component={PhotoDetail} />
            <Route path="/home/movies" component={Announcement} />
            <Route path="/home/movieinfo/:id" component={MovieDetail} /> */}
          </TabBar.Item>

          {/* 第2个Item项 项目 */}
          <TabBar.Item
            // title 设置 当前Item项显示的文字
            title="项目"
            // icon 用于指定未选中时候，当前 Item 项展示的小图标
            icon={{ uri: '/icons/project.svg' }}
            // selectedIcon 用于指定当前Item项被选中以后，要展示的图标
            selectedIcon={{ uri: '/icons/project-active.svg' }}
            // selected 是一个属性，接收一个bool值，true表示当前Item项应该被高亮选中；false 表示应该被高亮选中
            selected={this.state.selectedTab === 'Project'}
            // 一般，selected 选中项 都要和 onPress 事件配合使用
            // 只要点击了 当前的 Item 项，就会触发 当前 Item 项的 onPress 事件
            onPress={() => {
              this.setState({
                selectedTab: 'Project',
              });
              this.props.history.push('/Project')
            }}
          >
            <Route path="/Project" component={Project} />
            
          </TabBar.Item>

          {/* 第3个Item项 艺人 */}
          <TabBar.Item
            // title 设置 当前Item项显示的文字
            title="艺人"
            // icon 用于指定未选中时候，当前 Item 项展示的小图标
            icon={{ uri: '/icons/artist.svg' }}
            // selectedIcon 用于指定当前Item项被选中以后，要展示的图标
            selectedIcon={{ uri: '/icons/artist-active.svg' }}
            // selected 是一个属性，接收一个bool值，true表示当前Item项应该被高亮选中；false 表示应该被高亮选中
            selected={this.state.selectedTab === 'Artist'}
            // 一般，selected 选中项 都要和 onPress 事件配合使用
            // 只要点击了 当前的 Item 项，就会触发 当前 Item 项的 onPress 事件
            onPress={() => {
              this.setState({
                selectedTab: 'Artist',  
              });
              this.props.history.push('/Artist')
            }}
            // badge 表示徽标
            // badge={'0'}
          >
            <Route exact path="/Artist" component={Artist} />
          </TabBar.Item>

          {/* 第4个Item项 通讯录 */}
          <TabBar.Item
            // title 设置 当前Item项显示的文字
            title="通讯录"
            // icon 用于指定未选中时候，当前 Item 项展示的小图标
            icon={{ uri: '/icons/phoneBook.svg' }}
            // selectedIcon 用于指定当前Item项被选中以后，要展示的图标
            selectedIcon={{ uri: '/icons/phoneBook-active.svg' }}
            // selected 是一个属性，接收一个bool值，true表示当前Item项应该被高亮选中；false 表示应该被高亮选中
            selected={this.state.selectedTab === 'PhoneBook'}
            // 一般，selected 选中项 都要和 onPress 事件配合使用
            // 只要点击了 当前的 Item 项，就会触发 当前 Item 项的 onPress 事件
            onPress={() => {
              this.setState({
                selectedTab: 'PhoneBook',
              });
              this.props.history.push('/PhoneBook')
            }}
          >
            <Route path="/PhoneBook" component={PhoneBook} />
          </TabBar.Item>
        </TabBar>

      </div>
    );
  }
}

export default App;
