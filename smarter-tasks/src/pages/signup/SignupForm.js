var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// src/pages/signup/SignupForm.tsx
import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';
var SignupForm = function () {
    var _a = useState(''), organisationName = _a[0], setOrganisationName = _a[1];
    var _b = useState(''), userName = _b[0], setUserName = _b[1];
    var _c = useState(''), userEmail = _c[0], setUserEmail = _c[1];
    var _d = useState(''), userPassword = _d[0], setUserPassword = _d[1];
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(API_ENDPOINT, "/organisations"), {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword }),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Sign-up failed');
                    }
                    console.log('Sign-up successful');
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    // if successful, save the token in localStorage
                    localStorage.setItem('authToken', data.token);
                    // Dialogue: After successful signup we have to redirect the user to the secured page. We will do that later.
                    // if successful, save the user info in localStorage
                    localStorage.setItem('userData', JSON.stringify(data.user));
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Sign-up failed:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("div", null,
            React.createElement("label", { className: "block text-gray-700 font-semibold mb-2" }, "Organisation Name:"),
            React.createElement("input", { type: "text", name: "organisationName", id: "organisationName", value: organisationName, onChange: function (e) { return setOrganisationName(e.target.value); }, className: "w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" })),
        React.createElement("div", null,
            React.createElement("label", { className: "block text-gray-700 font-semibold mb-2" }, "Your Name:"),
            React.createElement("input", { type: "text", name: "userName", id: "userName", value: userName, onChange: function (e) { return setUserName(e.target.value); }, className: "w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" })),
        React.createElement("div", null,
            React.createElement("label", { className: "block text-gray-700 font-semibold mb-2" }, "Email:"),
            React.createElement("input", { type: "email", name: "userEmail", id: "userEmail", value: userEmail, onChange: function (e) { return setUserEmail(e.target.value); }, className: "w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" })),
        React.createElement("div", null,
            React.createElement("label", { className: "block text-gray-700 font-semibold mb-2" }, "Password:"),
            React.createElement("input", { type: "password", name: "userPassword", id: "userPassword", value: userPassword, onChange: function (e) { return setUserPassword(e.target.value); }, className: "w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" })),
        React.createElement("button", { type: "submit", className: "w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4" }, "Sign up")));
};
export default SignupForm;
