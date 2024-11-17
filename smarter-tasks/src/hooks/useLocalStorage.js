import { useEffect, useState } from "react";
var getStoredValue = function (key, defaultValue) {
    var savedItem = localStorage.getItem(key);
    if (savedItem) {
        return JSON.parse(savedItem);
    }
    return defaultValue;
};
export var useLocalStorage = function (key, defaultValue) {
    var _a = useState(function () {
        return getStoredValue(key, defaultValue);
    }), value = _a[0], setValue = _a[1];
    useEffect(function () {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
};
