import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./LoginForm.scss";
import { Form, Input, Button } from "antd";

const Login = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");
  const onChangeUser = (event) => {
    setUser(event.target.value);
  };
  const onChangePass = (event) => {
    setPass(event.target.value);
  };
  const onClickLogin = (event) => {
    event.preventDefault();
    if (user === "admin" && pass === "admin") {
      navigate(`/events`);
    } else {
      alert("Username or password invalid!");
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input value={user} onChange={onChangeUser} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password value={pass} onChange={onChangePass} />
      </Form.Item>
      <Form.Item
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      ></Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={onClickLogin}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
