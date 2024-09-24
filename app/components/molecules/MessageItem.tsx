
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonAtom from '../atoms/ButtonAtom';
import TextAtom from '../atoms/TextAtom';

interface MessageItemProps {
  phoneNumber: string;
  hasSentMessage: boolean;
  onSendMessage: () => void;
}

const MessageItem: React.FC<MessageItemProps> = ({ phoneNumber, hasSentMessage, onSendMessage }) => {
  return (
    <View style={styles.container}>
      <TextAtom content={phoneNumber} />
      {!hasSentMessage ? (
        <ButtonAtom title="Send Message" onPress={onSendMessage} />
      ) : (
        <TextAtom content="Message Sent" style={styles.sentText} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
  },
  sentText: {
    color: 'green',
  },
});

export default MessageItem;
