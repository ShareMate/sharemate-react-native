import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, StatusBar, View, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const STATUSBAR_HEIGHT = StatusBar.currentHeight;
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 500);
    } catch (e) {
      console.warn(e);
    }
  });
  return (
    <View style={{flex: 1}}>
      {Platform.OS === 'ios' ? (
        <LinearGradient
          useAngle={true}
          angle={90}
          colors={['#818cf8', '#d8b4fe', '#f9a8d4']}
          style={{height: 35}}>
          <StatusBar backgroundColor={'transparent'} translucent />
        </LinearGradient>
      ) : (
        <LinearGradient
          useAngle={true}
          angle={90}
          colors={['#818cf8', '#d8b4fe', '#f9a8d4']}
          style={{height: 25}}>
          <StatusBar backgroundColor={'transparent'} translucent />
        </LinearGradient>
      )}
      <WebView
        scrollEnabled={false}
        source={{uri: 'http://13.125.103.60/'}}
        // source={{uri: 'http://localhost:5173/'}}
        style={{height: '100%', width: '100%'}}
      />
    </View>
  );
};

export default App;
