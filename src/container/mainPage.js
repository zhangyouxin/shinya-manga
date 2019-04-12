import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Imgs from '../component/Imgs'

const { Header, Content, Footer } = Layout;

class MainPage extends Component {
    imgs = []
    constructor (props) {
        super(props)
        this.onChangePage = this.onChangePage.bind(this)
    }
    componentWillMount() {
        this.imgs = [1,2,3,4]
    }
    onChangePage(page, size) {
        console.log(page, size)
    }
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Imgs imgs={this.imgs} onChange={this.onChangePage}/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Manga Shinya ©2019 powered by antd
                </Footer>
            </Layout>
        )
    }
}

export default MainPage;