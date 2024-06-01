//整個專案的路口 從這裡開始運行

//React必要的兩個核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

//導入我們專案的跟組件
import App from './App';

//把App根組件渲染到id為root的dom節點上(index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)


