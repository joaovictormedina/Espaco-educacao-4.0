import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Login.css';
var Login = function () {
    var _a = useState(''), email = _a[0], setEmail = _a[1];
    var _b = useState(''), password = _b[0], setPassword = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (_jsxs("div", { className: "login-container", children: [_jsx("h2", { children: "Login" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Email:" }), _jsx("input", { type: "email", id: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "password", children: "Senha:" }), _jsx("input", { type: "password", id: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, required: true })] }), _jsx("button", { type: "submit", className: "login-button", children: "Entrar" })] }), _jsx("div", { className: "register-link", children: _jsxs("p", { children: ["Ainda n\u00E3o tem uma conta? ", _jsx("a", { href: "/register", children: "Cadastre-se" })] }) })] }));
};
export default Login;
