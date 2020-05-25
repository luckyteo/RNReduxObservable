import React from 'react';
import {Button} from 'react-native-elements';

const ButtonComp = ({title, onPress, bgColor, textColor}) => (
    <Button
        style = {{marginBottom:100}}
        backgroundColor = {bgColor}
        title = {title}
        color = {textColor}
        onPress = {onPress}/>
);

export default ButtonComp;