
import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextAtomProps {
  content: string;
  style?: object;
}

const TextAtom: React.FC<TextAtomProps> = ({ content, style }) => {
  return <Text style={[styles.text, style]}>{content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default TextAtom;
