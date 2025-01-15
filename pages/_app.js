import React from 'react';
import '../styles/globals.css'; // Global CSS file (you can add your CSS here)

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
