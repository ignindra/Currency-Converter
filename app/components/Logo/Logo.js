import React from 'react';
import { View, Text, Image, Keyboard, Animated, Dimensions } from 'react-native';

import styles from './styles';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);

        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);

        let widthModifier = Dimensions.get('window').width / 2;
        this.containerImageWidth = new Animated.Value(widthModifier);
        this.imageWidth = new Animated.Value(widthModifier / 2);
        this.largeContainerSize = widthModifier;
        this.largeImageSize = widthModifier / 2;
        this.smallContainerSize = widthModifier / 2;
        this.smallImageSize = widthModifier / 4;
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    _keyboardDidShow() {
        Animated.parallel([
            Animated.timing(
                this.containerImageWidth,
                { toValue: this.smallContainerSize,
                  duration: 250
                }
            ),
            Animated.timing(
                this.imageWidth,
                { toValue: this.smallImageSize,
                  duration: 250
                }
            )
        ]).start();
    }
    
    _keyboardDidHide() {
        Animated.parallel([
            Animated.timing(
                this.containerImageWidth,
                { toValue: this.largeContainerSize,
                  duration: 250
                }
            ),
            Animated.timing(
                this.imageWidth,
                { toValue: this.largeImageSize,
                  duration: 250
                }
            )
        ]).start();
    }

    render() {
        const containerImageStyle = [
            styles.containerImage,
            {width: this.containerImageWidth, height: this.containerImageWidth}
        ];

        const imageStyle = [
            styles.image,
            {width: this.imageWidth}
        ];
        return (
            <View style={styles.container}>
                <Animated.Image resizeMode='contain' style={containerImageStyle} source={require('./images/background.png')}>
                    <Animated.Image resizeMode='contain' style={imageStyle} source={require('./images/logo.png')} />
                </Animated.Image>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}