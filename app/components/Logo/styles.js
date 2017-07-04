import { Dimensions, StyleSheet } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth
    },
    image: {
        width: imageWidth / 2
    },
    text: {
        fontWeight: '600',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        color: 'white'
    }
});