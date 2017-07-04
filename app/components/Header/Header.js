import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Header extends React.Component {
    render() {
        const { onPress } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Image resizeMode='contain' style={styles.icon} source={require('./images/gear.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

Header.propTypes = {
    onPress: PropTypes.func
};