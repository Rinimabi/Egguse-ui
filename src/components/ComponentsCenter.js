import React from 'react';
import { Link } from 'dva/router';
import { Typography, Divider} from 'antd';
import { Layout,Menu,Breadcrumb,Icon} from 'antd';
import Logo from '../static/images/engineering.png'
import DVA from '../static/images/dva.jpg'
import { Router, Route, Switch } from 'dva/router';
import Products from '../routers/Products';
import Countor from '../routers/Countor';

const { Title, Paragraph, Text } = Typography;
const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;
var less = require('less');

const Main=()=>{return (
    <div style={{'textAlign':'center'}}>
        <h2>骚年，你渴望力量吗？不，我渴望D.VA.</h2>
        <img height='600px' width='800px' src={DVA} alt="D.VA"></img>
    </div>
)};

export default (props) => {
    const pageName = props.match.params.pageName;
    if(!pageName){
        return (
            <ComponentsCenter/>
        );
    }else{
        return (
            <ComponentsCenter Content={pageName}/>
        );
    }
}

class ComponentsCenter extends React.Component {
  
    render() {
        const contentName = this.props.Content;
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" ><img height={'40px'} src={Logo} alt="logo" style={{float:'left',position:'relative',marginTop:'10px',marginRight:'40px'}}/></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                        <Menu.Item key="2">组件中心</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>研究站</Breadcrumb.Item>
                        <Breadcrumb.Item>组件中心</Breadcrumb.Item>
                        <Breadcrumb.Item>{contentName}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="facebook" />官方Demo实现</span>}>
                                    <Menu.Item key="1"><Link to='/ComponentsCenter'>简介</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to='/ComponentsCenter/Countor'>计数器</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to='/ComponentsCenter/Products'>Products</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="deployment-unit" />组件</span>}>
                                    <Menu.Item key="5">Button</Menu.Item>
                                    <Menu.Item key="6">Icon</Menu.Item>
                                    <Menu.Item key="7">Table</Menu.Item>
                                    <Menu.Item key="8">CheckBox</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="gateway" />其他</span>}>
                                    <Menu.Item key="9">Apoc</Menu.Item>
                                    <Menu.Item key="10">Overload</Menu.Item>
                                    <Menu.Item key="11">IronPanel</Menu.Item>
                                    <Menu.Item key="12">TeslaTower</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            {(()=>{
                                switch(contentName){
                                    case "Products":return <Products/>; break;
                                    case "Countor":return <Countor/>; break;
                                    default:return <Main/>;
                                }
                            })()}
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