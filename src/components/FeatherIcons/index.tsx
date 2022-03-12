import React from 'react';
import { Feather } from '@expo/vector-icons';

export default function FeatherIcon (props) {
    return (
          <Feather
            name={props.name}
            size={props.size ? props.size : 24 }
            color={props.color ? props.color : 'black' }
          />
    );
};

