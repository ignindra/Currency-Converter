import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

const something = (paramVal) => {
    if (paramVal === 1) {
        console.log(paramVal);
    } else if (paramVal === 2) {
        console.log(paramVal);
    } else if (paramVal === 3) {
        console.log(paramVal);
    } else if (paramVal === 4) {
        console.log(paramVal);
    } else if (paramVal === 5) {
        console.log(paramVal);
    } else if (paramVal === 6) {
        console.log(paramVal);
    } else if (paramVal === 7) {
        console.log(paramVal);
    } else if (paramVal === 8) {
        console.log(paramVal);
    } else if (paramVal === 9) {
        console.log(paramVal);
    } else if (paramVal === 10) {
        console.log(paramVal);
    } else if (paramVal === 11) {
        console.log(paramVal);
    } else if (paramVal === 12) {
        console.log(paramVal);
    } else if (paramVal === 13) {
        console.log(paramVal);
    } else if (paramVal === 14) {
        console.log(paramVal);
    } else if (paramVal === 15) {
        console.log(paramVal);
    } else if (paramVal === 16) {
        console.log(paramVal);
    } else if (paramVal === 17) {
        console.log(paramVal);
    } else if (paramVal === 18) {
        console.log(paramVal);
    } else {
        console.log(paramVal);
    }
}


const anotherThing = (paramVal) => {
    if (paramVal === 1) {
        console.log(paramVal);
    } else if (paramVal === 2) {
        console.log(paramVal);
    } else if (paramVal === 3) {
        console.log(paramVal);
    } else if (paramVal === 4) {
        console.log(paramVal);
    } else if (paramVal === 5) {
        console.log(paramVal);
    } else if (paramVal === 6) {
        console.log(paramVal);
    } else if (paramVal === 7) {
        console.log(paramVal);
    } else if (paramVal === 8) {
        console.log(paramVal);
    } else if (paramVal === 9) {
        console.log(paramVal);
    } else if (paramVal === 10) {
        console.log(paramVal);
    } else if (paramVal === 11) {
        console.log(paramVal);
    } else if (paramVal === 12) {
        console.log(paramVal);
    } else if (paramVal === 13) {
        console.log(paramVal);
    } else if (paramVal === 14) {
        console.log(paramVal);
    } else if (paramVal === 15) {
        console.log(paramVal);
    } else if (paramVal === 16) {
        console.log(paramVal);
    } else if (paramVal === 17) {
        console.log(paramVal);
    } else if (paramVal === 18) {
        console.log(paramVal);
    } else {
        console.log(paramVal);
    }
}

const isenglohini = (paramVal) => {
    if (paramVal === 1) {
        console.log(paramVal);
    } else if (paramVal === 2) {
        console.log(paramVal);
    } else if (paramVal === 3) {
        console.log(paramVal);
    } else if (paramVal === 4) {
        console.log(paramVal);
    } else if (paramVal === 5) {
        console.log(paramVal);
    } else if (paramVal === 6) {
        console.log(paramVal);
    } else if (paramVal === 7) {
        console.log(paramVal);
    } else if (paramVal === 8) {
        console.log(paramVal);
    } else if (paramVal === 9) {
        console.log(paramVal);
    } else if (paramVal === 10) {
        console.log(paramVal);
    } else if (paramVal === 11) {
        console.log(paramVal);
    } else if (paramVal === 12) {
        console.log(paramVal);
    } else if (paramVal === 13) {
        console.log(paramVal);
    } else if (paramVal === 14) {
        console.log(paramVal);
    } else if (paramVal === 15) {
        console.log(paramVal);
    } else if (paramVal === 16) {
        console.log(paramVal);
    } else if (paramVal === 17) {
        console.log(paramVal);
    } else if (paramVal === 18) {
        console.log(paramVal);
    } else {
        console.log(paramVal);
    }
}

export default Main = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title
        })
    }
});
