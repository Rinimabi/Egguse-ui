import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Logo from '../src/assets/images/main/egguse.png'

const { Title, Paragraph } = Typography;
const { Header, Footer, Content } = Layout;

const routeConfig = [
  {
    path: '/',
    component: dynamic({
      // models: () => [appModel],
      component: () => import('./main/MainPage'),
    })
  }
];
// routeConfig.push(...route1);
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Header className="header">
          <div className="logo" ><img height={'40px'} src={Logo} alt="logo" style={{ float: 'left', position: 'relative', marginTop: '10px', marginRight: '40px' }} /></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/functionCenter'>功能中心</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px',minHeight:800 }}> 
          <Switch>
            {routeConfig.map(route => {
              return (<Route path={route.path} exact component={route.component} />)
            })}
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Egguse System ©2019 Created by Chris Wei & Amitābha Zfp
    </Footer>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
