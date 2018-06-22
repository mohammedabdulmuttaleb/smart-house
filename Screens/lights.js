import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {NavigationBar, Icon,Title,Tile,Image,Button,ImageBackground,Caption} from "@shoutem/ui";
import {DrawerNavigator} from "react-navigation";
import GridView from 'react-native-super-grid';



export class lights extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos:
                [
                    {"source": {"uri": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"}},
                    {"source": {"uri": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"}},
                    {"source": {"uri": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"}}
                ]
        }
    }

    render() {
        return (
            <Screen>
                <ImageBackground
                    source=
                        style=
                >
                    <NavigationBar>
                        rightComponent={
                            <Button>
                                <Overlay styleName="rounded-small image-overlay">
                                    <Subtitle styleName="top">Map</Subtitle>
                                </Overlay>
                            </Button>
                        }
                        centerComponent={<Title>About us</Title>}>
                    </NavigationBar>
                </ImageBackground>
                <View
                    styleName="lg-gutter-top"
                >
                    <Tile>
                        <Image
                            styleName="large-wide"
                            source=
                        />
                        <View styleName="content">
                            <Title>MAUI BY AIR THE BEST WAY AROUND THE ISLAND</Title>
                            <View styleName="horizontal space-between">
                                <Caption>1 hour ago</Caption>
                                <Caption>15:34</Caption>
                            </View>
                        </View>
                    </Tile>
                </View>
            </Screen>
        );
    }
}