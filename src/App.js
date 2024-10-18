import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Courses from './components/Courses';
import Events from './components/Events';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Contact from './components/Contact';
import Contato from './pages/Contacts/Contato';
import './style.css';
function App() {
    return (_jsxs(Router, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Courses, {}), _jsx(Events, {}), _jsx(Contact, {})] }) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/contato", element: _jsx(Contato, {}) })] }), _jsx(Footer, {})] }));
}
export default App;
