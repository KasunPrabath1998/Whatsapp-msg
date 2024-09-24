
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface ButtonAtomProps {
  title: string;
  onPress: () => void;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
});

export default ButtonAtom;
