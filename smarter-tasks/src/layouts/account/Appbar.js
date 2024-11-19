import React, { Fragment, useState, useContext } from 'react';
import { Disclosure, Menu, Switch, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
var userNavigation = [
    { name: 'Profile', href: '#' },
    { name: 'Sign out', href: '/logout' },
];
var classNames = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
};
var Appbar = function () {
    var pathname = useLocation().pathname;
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var _b = useState(theme === 'dark'), enabled = _b[0], setEnabled = _b[1];
    var toggleTheme = function () {
        var newTheme = '';
        if (theme === 'light') {
            newTheme = 'dark';
        }
        else {
            newTheme = 'light';
        }
        setEnabled(!enabled);
        setTheme(newTheme);
    };
    var navigation = [
        { name: 'Projects', href: '/account/projects', current: false },
        { name: 'Members', href: '/account/members', current: false },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(Disclosure, { as: "nav", className: "border-b border-slate-200" }, function (_a) {
            var open = _a.open;
            return (React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "flex h-16 items-center justify-between" },
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement("div", { className: "flex-shrink-0" },
                            React.createElement("img", { className: "h-8", src: Logo, alt: "Smarter Tasks" })),
                        React.createElement("div", { className: "hidden md:block" },
                            React.createElement("div", { className: "ml-10 flex items-baseline space-x-4" }, navigation.map(function (item) {
                                var isCurrent = pathname.includes(item.href);
                                return (React.createElement(Link, { key: item.name, to: item.href, className: classNames(isCurrent
                                        ? 'bg-slate-50 text-blue-700'
                                        : 'text-slate-500 hover:text-blue-600', 'rounded-md px-3 py-2 text-sm font-medium'), "aria-current": isCurrent ? 'page' : undefined }, item.name));
                            })))),
                    React.createElement("div", { className: "hidden md:block" },
                        React.createElement("div", { className: "ml-4 flex items-center md:ml-6" },
                            React.createElement(Switch, { checked: enabled, onChange: setEnabled, className: "".concat(enabled ? 'bg-slate-400' : 'bg-slate-700', "\n              relative inline-flex h-[24px] w-[100px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75") },
                                React.createElement("span", { "aria-hidden": "true", className: "".concat(enabled ? 'translate-x-9' : 'translate-x-0', "\n                pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out") })),
                            React.createElement(Menu, { as: "div", className: "relative ml-3" },
                                React.createElement("div", null,
                                    React.createElement(Menu.Button, { className: "rounded-full bg-white p-1 text-gray-400 hover:text-blue-600" },
                                        React.createElement(UserCircleIcon, { className: "h-6 w-6", "aria-hidden": "true" }))),
                                React.createElement(Transition, { as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                                    React.createElement(Menu.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, userNavigation.map(function (item) { return (React.createElement(Menu.Item, { key: item.name }, function (_a) {
                                        var active = _a.active;
                                        return (React.createElement("a", { href: item.href, className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, item.name));
                                    })); })))))))));
        })));
};
export default Appbar;