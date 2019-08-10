import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);;

import '~/config/ReactotronConfig';

import Routes from '~/routes';

export default function App() {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Routes />
    </>
  );
}
