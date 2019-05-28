import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Divider} from 'antd';
import { Layout,Menu,Breadcrumb,Icon} from 'antd';
import Logo from '../static/images/engineering.png'
import '../static/lesses/test.less'

const { Title, Paragraph, Text } = Typography;
const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;

export default class MainPage extends React.Component {
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
                <Typography>
                  <Title>About AntDesign</Title>
                  <Paragraph>
                    In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and 
                    developers difficulties and duplication and reduce the efficiency of development.
                  </Paragraph>
                  <Paragraph>
                    After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to 
                    <Text strong>uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of 
                    design and front-end development</Text>.
                  </Paragraph>
                </Typography>
                <Title level={2}>Let us try those god damn shit and what it can do.</Title>
                <Paragraph>
                  Now we will see all the look of Components.<Text code>AntDesign</Text><Text code>React.Dva</Text>
                </Paragraph>
                <Paragraph>
                  <ul>
                    <li><a href='https://reactjs.org/'>React</a></li>
                    <li><a href='https://dvajs.com/guide/'>DVAjs</a></li>
                    <li><a href='https://ant.design/index-cn'>AntDesign</a></li>
                  </ul>
                </Paragraph>
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