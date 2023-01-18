import React, { useCallback } from "react";
import Timekeeper from './src/Chronometer';

import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  return (
    <SafeAreaView style={backgroundStyle}>
      <Timekeeper
        elapsedTime={elapsedTime}
        running={running}
        setRunning={setRunning}
        setTimer={setElapsedTime}
      />
    </SafeAreaView>
  );
}

export default App;
