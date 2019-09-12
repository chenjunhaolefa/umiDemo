import React from 'react';
import {Layout} from 'antd';
import { Menu, Icon, Button } from 'antd';
import Link from 'umi/link';

const { SubMenu } = Menu;
const {Header, Footer, Sider, Content} = Layout;




class BasicLayout extends React.Component{

    state = {
        collapsed: false,
      };
    

    render() {
        return (
            <Layout>
                <Sider width={256} style={{minHeight:'100vh', color:'white'}}>
                    <div style={{ height:'32px', width: 256 }}>
                        <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="pie-chart" /><span>质量管理</span></span>}>
                                <Menu.Item key="1">
                                    <span>
                                        <Icon type="pie-chart" />
                                        <span><Link to="/qa/Achievements" style={{color:'white'}}>概览</Link></span>
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <span>
                                        <Icon type="pie-chart" />
                                        <span><Link to="/qa/UserList" style={{color:'white'}}>用户列表</Link></span>
                                    </span>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Sider>
                <Layout>
                    <Header style={{ background:'#fff', textAlign:'center', padding:0}}>Header</Header>
                    <Content style={{ margin:'24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight:360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign:'center'}}>Footer</Footer>
                </Layout>
            </Layout>
        )
    }

}

export default BasicLayout;

