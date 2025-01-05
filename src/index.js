import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainVideo from './assets/animated-video.mov';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div class="mobile-message">
      <span>반응형은 추후 적용 예정입니다.</span>
      <span>데스크탑 환경에서 확인해주세요.</span>
      <video className="animated-video" src={MainVideo} autoPlay loop muted playsInline></video>
    </div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
