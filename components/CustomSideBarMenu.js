import React, {Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DrawerItems {...this.props} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("SignUpLogin");
            firebase.auth().signOut();
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    height: 30,
    width: "100%",
    justifyContent: "center",
    padding: 15,
  },
});