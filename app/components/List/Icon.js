import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

export default class Icon extends React.Component {
    render() {
        const {checkmark, visible} = this.props;
        const iconStyles = visible ? [styles.icon, styles.iconVisible] : styles.icon;

        return (
            <View style={iconStyles}>
                {checkmark ? <Image style={styles.checkIcon} resizeMode='contain' source={require('./images/check.png')} /> : null}
            </View>
        );
    }
}

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool
};