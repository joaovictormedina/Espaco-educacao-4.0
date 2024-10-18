import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import logo from '../assets/img/logo.png';
import facebookIcon from '../assets/img/facebook.png';
import instagramIcon from '../assets/img/instagram.png';
var Header = function () {
    var _a = useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var toggleMenu = function () {
        setIsMenuOpen(!isMenuOpen);
    };
    return (_jsxs("header", { children: [_jsxs("div", { className: "header-container", children: [_jsx("div", { className: "logo-container", children: _jsx("a", { href: "/", children: _jsx("img", { src: logo, alt: "Logo", className: "logo" }) }) }), _jsxs("div", { className: "burger-menu", onClick: toggleMenu, children: [_jsx("div", { className: "line ".concat(isMenuOpen ? 'open' : '') }), _jsx("div", { className: "line ".concat(isMenuOpen ? 'open' : '') }), _jsx("div", { className: "line ".concat(isMenuOpen ? 'open' : '') })] }), _jsxs("div", { className: "header-actions ".concat(isMenuOpen ? '' : 'hidden'), children: [_jsx("a", { href: "/login", className: "login-button", children: "LOGIN" }), _jsx("a", { href: "/contato", className: "contact-button", children: "CONTATO" }), _jsx("div", { className: "search-container", children: _jsx("input", { type: "text", placeholder: "BUSCAR...", className: "search-input" }) }), _jsxs("div", { className: "social-medias", children: [_jsx("a", { href: "https://www.facebook.com/espacoeducacao4", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: facebookIcon, alt: "Facebook", className: "social-icon" }) }), _jsx("a", { href: "https://www.instagram.com/espacoeducacao4.0/", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: instagramIcon, alt: "Instagram", className: "social-icon" }) })] })] })] }), _jsxs("div", { className: "metodologia", children: ["Metodologia Inovadora ", _jsx("br", {}), "ao Ensinar."] })] }));
};
export default Header;
