import React from 'react';

/**
 * TODO:获取系统当前的模式，自动跟随系统。
 * @author 大漠穷秋
 * @date 2023-08-10 20:52:27
 */
export const PreferencesContext = React.createContext({
    toggleTheme: () => { },
    isThemeDark: false,
});