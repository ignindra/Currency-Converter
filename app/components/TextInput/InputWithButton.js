import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

import styles from './styles';

export default class InputWithButton extends React.Component {
    render() {
        const { onPress, buttonText, editable } = this.props;
        const containerStyles = editable ? styles.container : [styles.container, styles.containerDisabled];

        return (
            <View style={containerStyles}>
                <TouchableHighlight
                    underlayColor='#F0F0F0'
                    activeOpacity={0.2}
                    style={styles.buttonContainer}
                    onPress={onPress} >
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableHighlight>
                <View style={styles.border} />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    {...this.props} />
            </View>
        );
    }
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
};