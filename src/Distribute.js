import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Foodclass from './dataRender';


export default class DistributeClass extends React.Component{
    render(){
        return(
            <View >
                <ScrollView>
                    <Foodclass/>
                </ScrollView>
            </View>
        )
    }
}
