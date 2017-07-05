import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

export default class CurrencyList extends React.Component {
    constructor(props) {
        super(props);
        this._handlePress = this._handlePress.bind(this);
    }

    static propTypes = {
        navigation: PropTypes.object
    };

    _handlePress() {
        console.log('row press');
        this.props.navigation.goBack(null);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar translucent={false} barStyle='light-content' backgroundColor={'#364B54'} />
                <FlatList
                    data={currencies}
                    renderItem={({item}) => <ListItem
                                                text={item}
                                                selected={item === TEMP_CURRENT_CURRENCY}
                                                onPress={this._handlePress}
                                                checkmark={true}
                                                visible={true} />}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={Separator} />
            </View>
        );
    }
}