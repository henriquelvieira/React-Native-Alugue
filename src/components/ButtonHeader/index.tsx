import React from 'react';
import { TouchableOpacity} from 'react-native';
import FeatherIcon from '../FeatherIcon';

export interface IButtonHeader {
    name: string;  
    size?: number;
    color?: string;
}


export default function ButtonHeader (props: IButtonHeader) {
    return (
        <TouchableOpacity style={{ marginRight: 15 }}>
            <FeatherIcon
                name={props.name}
                size={props.size}
                color={props.color}
                />
        </TouchableOpacity>
    )
}