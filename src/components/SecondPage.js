import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Divider} from 'antd';
import { Layout,Menu,Breadcrumb,Icon} from 'antd';
import Logo from '../static/images/engineering.png'

const { Title, Paragraph, Text } = Typography;
const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;

export default class SecondPage extends React.Component {
    render() {
      return (
      <Layout>
        <Header className="header">
          <div className="logo" ><img height={'40px'} src={Logo} alt="logo" style={{float:'left',position:'relative',marginTop:'10px',marginRight:'40px'}}/></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2"><Link to='/ComponentsCenter'>组件中心</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div>
                
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design Demo ©2019 Created by Chris Wei
        </Footer>
      </Layout>
      )
    }
  }