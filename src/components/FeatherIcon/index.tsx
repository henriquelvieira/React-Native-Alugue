import React from 'react';
import { Feather } from '@expo/vector-icons';

export interface IFeatherIcon {
  name: string;
  size?: number;
  color?: string;
};

export default function FeatherIcon (props: IFeatherIcon) {
    return (
          <Feather
            name={props.name}
            size={props.size ? props.size : 24 }
            color={props.color ? props.color : 'black' }
          />
    );
};

