import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { Layout, Menu, Divider } from 'antd';
import { connect } from 'dva';
import FunctionCard from '../components/commons/FunctionCard'
import Logo from '../assets/images/main/egguse.png'
import './index.less'

const { Title, Paragraph } = Typography;
const { Header, Footer, Content } = Layout;

@connect((props)=>{
  const {...main} = props;
  return main;
})
class MainPage extends React.Component {
  componentWillMount(){
    this.props.dispatch({
      type:'main/postHello',
      payload:{
        data:'fuck'
      }
    })
  }
  render() {
    return (
      <div>
        <Typography>
          <Title>有卵用系统</Title>
          <Paragraph>
            你可能不知道一个前端写了半年才出来是什么概念，我们把这种前端叫做，端怪！
        </Paragraph>
          <Divider></Divider>
          <div>
            <FunctionCard image={require('../assets/images/main/quartzImage.png')} title="Quartz试验" description="试验quartz功能的子系统。" />
            <FunctionCard image={require('../assets/images/main/antdImage.png')} title="AntDesigner试验场" description="试验AntDesigner功能的子系统。" />
          </div>
        </Typography>
      </div>
    )
  }
}
export default MainPage