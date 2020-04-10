import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'
import { Form, Input, Icon, Button} from 'antd'

class Login extends Component {
    render() {
        return ( 
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>后台管理系统（React）</h1>
                </header>
                <section className="login-content">
                    <h2>登录</h2>
                    <Form className="login-form">
                        <Form.Item>
                            <Input 
                                prefix={<Icon type="user" style={{color:'rgba(0,0,0,0.25)'}} />}
                                type="text"
                                placrholder="用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                                type="password"
                                placrholder="密码" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
export default Login
