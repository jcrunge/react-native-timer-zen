import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import PlayIcon from './Assets/svg/PlayIcon';

export interface IButton {
  onPress: () => void;
  size?: number;
}

export const PlayButton: React.FC<IButton> = ({ onPress, size = 20 }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.5}
      underlayColor="#ff00ff"
      style={{
        margin: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View
        style={{
          width: size * 2,
          height: size * 2,
          borderRadius: (size * 2) / 2,
          backgroundColor: '#EEEEEE',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PlayIcon width={size} height={size} />
      </View>
    </TouchableHighlight>
  );
};
