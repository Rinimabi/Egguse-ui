import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { Layout, Menu ,Divider,Icon} from 'antd';
import FunctionCard from '../components/commons/FunctionCard'
import Logo from '../static/images/egguse.png'
import '../static/lesses/test.less'

const { Title, Paragraph, Text } = Typography;
const { Header, Footer, Content } = Layout;

export default class MainPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" ><img height={'40px'} src={Logo} alt="logo" style={{ float: 'left', position: 'relative', marginTop: '10px', marginRight: '40px' }} /></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2"><Link to='/ComponentsCenter'>功能中心</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div>
                <Typography>
                  <Title>有卵用系统</Title>
                  <Paragraph>
                    你可能不知道一个前端写了半年才出来是什么概念，我们把这种前端叫做，端怪！
                  </Paragraph>
                </Typography>
                <Divider></Divider>
                {/* <center><Icon type="appstore" /><span>功能大厅</span></center>
                <br/><br/><br/> */}
                <div>
                  <FunctionCard image={require('../static/images/quartzImage.png')} title="Quartz试验" description="试验quartz功能的子系统。"/>
                  <FunctionCard image={require('../static/images/antdImage.png')} title="AntDesigner试验场" description="试验AntDesigner功能的子系统。"/>
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Egguse System ©2019 Created by Chris Wei
        </Footer>
      </Layout>
    )
  }
}