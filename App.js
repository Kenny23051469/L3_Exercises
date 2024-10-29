import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText, placeholder}) => {
  return (
      <View>
        <Text>{label}</Text>
        <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} placeholder={placeholder} />
      </View>
  )
}

export default function App() {
  const [usertype, setUserType] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Text>User Type:</Text>
      <RNPickerSelect onValueChange={ (text) => setUserType(text) }
        items={[
          {label: 'Admin', value: 'Admin'},
          {label: 'Guest', value: 'Guest'},
        ]}
      />
        <InputBox label="Username:" placeholder="Enter your username." onValueChange={ (text) => setUsername(text) }/>

        <InputBox label="Password:" placeholder="Enter your password."/>
      <View>
        <TouchableOpacity onPress={ () => ToastAndroid.show(`Welcome! ${usertype} ${username}`, ToastAndroid.SHORT) }>
          <Text>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'right',
    justifyContent: 'center',
  },
});
