import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

export default class LastConverted extends React.Component {
    render() {
        const {base, quote, conversionRate, date} = this.props;

        return (
            <Text style={styles.smallText}>1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}</Text>
        );
    }
}

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    rate: PropTypes.number,
};