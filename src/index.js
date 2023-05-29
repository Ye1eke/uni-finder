import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import {Authenticator, Image, ThemeProvider, View, useTheme} from "@aws-amplify/ui-react";
import studioTheme from './ui-components/studioTheme';
Amplify.configure(awsconfig);



const root = ReactDOM.createRoot(document.getElementById('root'));

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src={require("./components/logo-no-background.png")} width="300px"
        />
      </View>
    );
  },
}
 
root.render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <Authenticator components={components}>
        <App />
      </Authenticator>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
