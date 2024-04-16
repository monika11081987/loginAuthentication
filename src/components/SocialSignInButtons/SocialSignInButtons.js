import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {

    const onSignInFacebook = () => {
        console.warn('facebook in');
      };
      const onSignInGoogle = () => {
        console.warn('google in');
      };
      const onSignInApple = () => {
        console.warn('apple in');
      };
  return (
    <>
         <CustomButton
      text="Sign In with Facebook"
      onPress={onSignInFacebook}
      bgColor="#E7EAF4"
      fgColor="#4765A9"
      />

      <CustomButton
      text="Sign In with Google"
      onPress={onSignInGoogle}
      bgColor="#FAE9EA"
      fgColor="#DD4044"
      />

      <CustomButton
      text="Sign In with Apple"
      onPress={onSignInApple}
      bgColor="#e3e3e3"
      fgColor="#363636"
      />

    </>
  );
};

export default SocialSignInButtons;
