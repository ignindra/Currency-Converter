import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this._handlePressBaseCurrency = this._handlePressBaseCurrency.bind(this);
        this._handlePressQuoteCurrency = this._handlePressQuoteCurrency.bind(this);
    }

    static propTypes = {
        navigation: PropTypes.object
    };

    _handlePressBaseCurrency() {
        console.log('press base');
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
    }

    _handlePressQuoteCurrency() {
        console.log('press quote');
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
    }

    _handleTextChange(text) {
        console.log('change text', text);
    }

    _handleSwapCurrency() {
        console.log('press swap currency');
    }

    _handleOptionsPress() {
        console.log('handle option press');
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' backgroundColor={'#364B54'} />
                <Header onPress={this._handleOptionsPress}/>

                    <Logo />
                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={this._handlePressBaseCurrency}
                        editable={true}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType='numeric'
                        onChangeText={this._handleTextChange} />
                    <InputWithButton
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={this._handlePressQuoteCurrency}
                        editable={false}
                        defaultValue={TEMP_QUOTE_PRICE} />
                    <LastConverted
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        date={TEMP_CONVERSION_DATE}
                        conversionRate={TEMP_CONVERSION_RATE} />
                    <ClearButton
                        text='Reverse Currencies'
                        onPress={this._handleSwapCurrency} />

            </Container>
        );
    }
}