
import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import {NavigationBar, Icon,Title,Image,Button,Text,Examples} from "@shoutem/ui";
import {DrawerNavigator} from "react-navigation";
import GridView from 'react-native-super-grid';
import Example from "./Grid";



export class  Main extends Component {

    B1=<Icon   name={'search'}
               onPress={() => this.props.navigation.navigate()}
    />
    B2=<Icon style={styles.itemName} name={'sidebar'}
               onPress={() => this.props.navigation.navigate('DrawerOpen')}
    />
    B3=<Icon style={styles.itemName} name={'checkbox-on'}
             onPress={() => this.props.navigation.navigate('DrawerOpen')}
    />
    B4=<Icon style={styles.itemName} name={'turn-off'}
             onPress={() => this.props.navigation.navigate('DrawerOpen')}
    />
    B5=<Icon style={styles.itemName} name={'checkbox-on'}
             onPress={() => this.props.navigation.navigate('DrawerOpen')}
    />
    B6=<Icon style={styles.itemName} name={'checkbox-on'}
             onPress={() => this.props.navigation.navigate('DrawerOpen')}
    />
    mainicon=<Icon style={styles.itemicon} name={'search'}
                   />
    state = {

    };


    render() {
        // Taken from https://flatuicolors.com/
        const items = [
            { name: 'LIGHT', name2: '2 Lights are on', code: '#3498db', b1:this.B1}, { name: 'EMERALD', code: '#2ecc71',b4:this.B4 },
            { name: 'PETER RIVER',  name2: 'Automation is off', code: '#3498db', b2:this.B2 }, { name: 'AMETHYST', code: '#9b59b6',b5:this.B5 },
            { name: 'WET ASPHALT', code: '#34495e',b3:this.B3 }, { name: 'GREEN SEA', code: '#16a085',b6:this.B6 },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];

        return (



            <GridView

                itemDimension={130}
                items={items}
                style={styles.gridView}
                renderItem={item => (
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>

                        <Button>{item.b1}</Button>
                        <Button>{item.b2}</Button>
                        <Button>{item.b3}</Button>
                        <Button>{item.b4}</Button>
                        <Button>{item.b5}</Button>
                        <Button>{item.b6}</Button>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCode}>{item.name2}</Text>
                    </View>


                )}
            />



        );
    }
}


export class Settings extends React.Component {
    state = {

    };

    render() {
        return (
            <View style={this.props.style}>
                <NavigationBar
                    leftComponent={
                        <Icon name={'sidebar'}
                              onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        />
                    }
                    centerComponent={<Image
                        styleName="small"
                        source={{ uri: './Screens/Untitled-1.png'}}
                    />}>

                </NavigationBar>
            </View>
        );
    }
}

export class About_us extends React.Component {

    render() {
        return (
            <View style={this.props.style}>
                <NavigationBar
                    leftComponent={
                        <Icon name={'sidebar'}
                              onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        />
                    }
                    centerComponent={<Title>About us</Title>}>

                </NavigationBar>
            </View>
        );
    }
}
export class Examples1 extends React.Component {

    render() {
        return (
            <View style={this.props.style}>
               <Examples/>
            </View>
        );
    }
}


export default DrawerNavigator({
    Home: {
        path: '/main', screen: Main
    },
    Settings: {
        path: '/settings', screen: Settings
    },
    About_us: {
        path: '/about', screen: About_us
    },
   example: {
    path: '/aboutq', screen: Examples1
           },
}, {
    initialRouteName: 'Home',
    drawerPosition: 'left'
});
const styles = StyleSheet.create({
    gridView: {
        paddingTop: 50,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    itemicon: {
        backgroundColor:'#fff',

    },
});