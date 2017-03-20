// Index.android.js - palce code in here for Anroid!

import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList></AlbumList>
        </View>
    );
};

AppRegistry.registerComponent('myapp', () => App);
