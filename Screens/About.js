import React from 'react';
import Expo from 'expo';
import {Text, View, Button, Image} from 'react-native';
import MatrialIcons from 'react-native-vector-icons/MatrialIcons';

export default class About extends React.Component {
    static navigationOptions={
        tabBarLabel: 'screen2',
        drawerIcon: (tintColor) => {
            return(
                <MatrialIcons
                    name="sim-card"
                    size={24}
                    style={{color: tintColor}}
                    >
                    </MatrialIcons>
            );
        }
    }
    render() {
        return <View style={{flex: 1}}>
        
        <StatusBar barStyle="default" hidden={false} />

      <NavigationBar
  leftComponent={<Button onPress={() => this.props.navigation.navigate('DrawerOpen')}>
    <Icon name="back" />
  </Button>}
  centerComponent={<Title>anything you wont</Title>}
/>
        
      </View>
    }
}