// create a svg icon component

import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export interface IPlayIcon {
  width?: number;
  height?: number;
}

// create a svg icon component
export const PlayIcon: React.FC<IPlayIcon> = ({ width = 20, height = 26 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 26" fill="none">
      <Path
        d="M3.80208 1.26536C3.03125 0.757633 2.0625 0.740895 1.27604 1.21514C0.489583 1.68939 0 2.58209 0 3.5529V23.1923C0 24.1631 0.489583 25.0558 1.27604 25.53C2.0625 26.0043 3.03125 25.982 3.80208 25.4798L18.8021 15.6601C19.5469 15.1747 20 14.3099 20 13.3726C20 12.4353 19.5469 11.576 18.8021 11.085L3.80208 1.26536Z"
        fill="black"
      />
    </Svg>
  );
};

export default PlayIcon;
