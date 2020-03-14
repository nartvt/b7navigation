import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { buttonStyle, textButtonStyle } = StyleSheet.create({
  buttonStyle: {
    width: Dimensions.get('window').height / 3,
    height: 50,
    padding: '5%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    borderRadius: 5
  },
  textButtonStyle: {
    clor: '#ffffff',
    fontSize: 20
  }
})


export default class Home extends Component {
  redirectHomeScreen = () => {
    let { navigation } = this.props;
    navigation.navgate('login');
  }
  componentDidMount() {
    let { navigation, route } = this.props;
    let { email } = route.params;
    this.setState({
      email
    })
  }
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.redirectHomeScreen}>
          <View style={buttonStyle}>
            <Text style={[textButtonStyle]}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => (this.props.navigation.navigate('register'))}>
          <View style={buttonStyle}>
            <Text style={[textButtonStyle]}>Register</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => (this.props.navigation.openDrawer())}>
          <View style={buttonStyle}>
            <IconAnd name="menufold" size={30} />
            <Text style={[textButtonStyle]}></Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
