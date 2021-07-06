import React from 'react';
import { Dimensions } from 'react-native';

class Functions {
    static getDimHeight = (number: number) => {
        return Dimensions.get('window').height / number;
    };
    static getDimWidth = (number: number) => {
        return Dimensions.get('window').width / number;
    };
}
export default Functions;
