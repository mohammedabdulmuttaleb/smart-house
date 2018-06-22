import React from 'react';
import {Text, View, Image} from 'react-native';
import MatrialIcons from 'react-native-vector-icons/MatrialIcons';
import {NavigationBar, Icon, Title, font, Examples, Button } from "@shoutem/ui";

export default class Home extends React.Component {
    static navigationOptions={
        tabBarLabel: 'screen1',
        drawerIcon: (tintColor) => {
            return(
                <MatrialIcons
                    name="star"
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

            <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="open drawnavigation"
            />
      </View>
    }
}
