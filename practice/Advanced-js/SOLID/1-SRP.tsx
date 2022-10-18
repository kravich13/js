import React from 'react';
import { Button, View } from 'react-native';

const MyComponent = () => {
  const getDataForAdmin = () => {
    fetch('.../admin');
  };

  const getDataForUser = () => {
    fetch('.../user');
  };

  return (
    <View>
      <Button title="Get admin data" onPress={getDataForAdmin} />

      <Button title="Get user data" onPress={getDataForUser} />
    </View>
  );
};
