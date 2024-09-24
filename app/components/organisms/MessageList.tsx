
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MessageItem from '../molecules/MessageItem';

interface MessageListProps {
  phoneNumbers: string[];
  sentMessages: string[];
  onSendMessage: (phoneNumber: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({ phoneNumbers, sentMessages, onSendMessage }) => {
  const renderItem = ({ item }: { item: string }) => {
    const hasSentMessage = sentMessages.includes(item);

    return (
      <MessageItem 
        phoneNumber={item} 
        hasSentMessage={hasSentMessage}
        onSendMessage={() => onSendMessage(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={phoneNumbers}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MessageList;
