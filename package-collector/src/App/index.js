import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const App = () => {
  const [message, setMessage] = useState('Click Me');

  return (
    <View style={styles.container}>
      <Text onPress={() => message === 'Click Me' ? setMessage('Clicked') : setMessage('Click Me')}>{message}</Text>
    </View>
  );
};

export default App;
