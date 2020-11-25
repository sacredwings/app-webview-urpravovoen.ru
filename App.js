import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


const YourApp = () => {
    const uri = 'https://urpravovoen.ru/';
    return (
      <WebView
        source={{
          uri: uri
        }}
        style={{ marginTop: 20 }}
      />
    );
}

export default YourApp;