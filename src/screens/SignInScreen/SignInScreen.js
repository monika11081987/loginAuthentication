import {View, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
const navigation = useNavigation();

  const onSignInPressed = () => {
    //validate user
    navigation.navigate('Home');
  };

  const onForgetPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

const onSignUpPressed = ()=>{
navigation.navigate('SignUp');
};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton
        text="Forget Password"
        onPress={onForgetPasswordPressed}
        type="TERTIARY"
      />

<SocialSignInButtons/>

<CustomButton
        text="Don't have an account? Create one"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
