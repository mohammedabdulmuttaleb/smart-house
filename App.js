import React from 'react';
import {
    StyleSheet,
    StatusBar,
    Text,
    View,
} from 'react-native';

import {Font, AppLoading} from 'expo';
import {Examples, defaultThemeVariables, getTheme} from '@shoutem/ui';
import {StyleProvider} from '@shoutem/theme';



import Main from "./Screens/Main";
//import light from "./Screens/lights";

const nabazTheme = {...defaultThemeVariables};
nabazTheme.navBarBackground = '#ffcfe6';

export default class App extends React.Component {
    state = {
        fontsAreLoaded: false,
    };

    async componentWillMount() {
        await Font.loadAsync({
            'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
            'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
            'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
            'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
            'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
            'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
            'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
            'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
            'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
            'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
            'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({fontsAreLoaded: true});
    }

    render() {
        if (!this.state.fontsAreLoaded) {
            return <AppLoading/>;
        }

        return (
            <StyleProvider style={getTheme(nabazTheme)}>
                <View style={{flex: 1}}>
                    <Main/>

                    <StatusBar barStyle="dark-content" hidden={true}/>
                </View>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});