import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Alert } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const widthDevice = Dimensions.get('window').width;
const heighDevice = Dimensions.get('window').height;
const { } = StyleSheet.create({
  textInputStyle: {
    borderBottomWidth: 3,
    borderBottomColor: '#9999FF',
    width: widthDevice * 0.75,
    fontSize: 20,
    marginTop: '5%'
  },
  titleStyle: {
    fontSize: 50,

  }
})

export default class Login extends Component {
  state = {
    email: 'tranvantai0011@gmail.com',
    password: ''
  }
  handSubmit = () => {
    let { email, password } = this.state;
    if (email.toLocaleLowerCase() == 'admin' && password.toLocaleLowerCase() == 'admin') {
      Alert.alert('Thong Bao', "Dang Nhap Thanh Cong");
      navigation.navigate('home', { params: { email: email } })
    } else {
      Alert.alert('Thong Bao', "Email hoac mat khau khong dung");
    }
  }
  handleChangeText = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[titleStyle]}>Login </Text>
        <TextInput defaultValue={this.state.email} secureTextEntry={true} style={[textInputStyle]} placeholder='email' onChangeText={(value) => {
          this.handleChangeText('email',value)
        }} />
        <TextInput style={[textInputStyle]} placeholder='password' onChangeText={(value) => {
          this.setState({ password: value })
        }} />
        <TouchableOpacity>
          <View style={[buttonStyle]}>
            <Text style={[textButtonStyle]}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
