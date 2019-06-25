import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
export default class FunctionCard extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative', float: 'left' ,marginLeft:'30px'}}>
                <Card
                    hoverable
                    style={{ width: 240,height:240 }}
                    cover={<img alt="example" src={this.props.image} style={{height:'50%'}}/>}
                >
                    <Meta title={this.props.title} description={this.props.description} />
                </Card>
            </div>
        )
    }
}