import { NativeBaseProvider, Text, extendTheme } from 'native-base';
import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Todo from './src/components/todo';
import { persistor, store } from './src/redux/store';
function App() {
  const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };
  const theme = extendTheme({colors: newColorTheme});
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <Todo />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
