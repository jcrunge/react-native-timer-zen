import React, {useCallback, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
interface Props {
  elapsedTime: number;
  running: boolean;
  setRunning: (running: boolean) => void;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

const Chronometer: React.FC<Props> = ({
  elapsedTime,
  running,
  setRunning,
  setTimer,
  //incrementSecond,
}) => {
  useEffect(() => {
    let interval: number | undefined;
    if (running) {
      interval = setInterval(incrementSecond, 1000);
    } else if (!running && interval) {
      clearInterval(interval);
    }
    // @ts-ignore
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const incrementSecond = useCallback(() => {
    setTimer((time: number) => time + 1000);
  }, [setTimer]);

  const handleResetPress = () => {
    setTimer(0);
  };

  const handleStartPress = () => {
    setRunning(true);
  };

  const handlePausePress = () => {
    setRunning(false);
  };

  const handleStopPress = () => {
    setRunning(false);
    setTimer(0);
  };

  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <View>
      <View style={styles.timer}>
        <Text style={styles.textTimer}>
          {minutes}:{formattedSeconds}
        </Text>
      </View>
      {running ? (
        <Button title="Pause" onPress={handlePausePress} />
      ) : (
        <Button title="Start" onPress={handleStartPress} />
      )}
      <Button title="Stop" onPress={handleStopPress} />
      <Button title="Reset" onPress={handleResetPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 250,
    padding: 20,
    margin: 20,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textTimer: {
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
  },
});

export default Chronometer;
