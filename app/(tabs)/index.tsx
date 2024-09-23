import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, FlatList, Text } from 'react-native';
import * as Linking from 'expo-linking';

export default function App() {
  const phoneNumbers: string[] = [
    '94710819319',  // ( numbers)
    '94712965583',

  ];

  // State to track sent messages
  const [sentMessages, setSentMessages] = useState<string[]>([]);

  const sendWhatsAppMessage = (phoneNumber: string, message: string) => {
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url).then(() => {
            // Update state to include sent message
            setSentMessages((prev) => [...prev, phoneNumber]);
          });
        } else {
          Alert.alert("WhatsApp is not installed on your device");
        }
      })
      .catch((error) => {
        console.error('Error opening WhatsApp', error);
      });
  };

  const renderItem = ({ item }: { item: string }) => {
    const message = "Your order is delivered!";  // message
    const hasSentMessage = sentMessages.includes(item);

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.phoneNumber}>{item}</Text>
        {!hasSentMessage ? (
          <Button title="Send Message" onPress={() => sendWhatsAppMessage(item, message)} />
        ) : (
          <Text style={styles.sentText}>Message Sent</Text>
        )}
      </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
  },
  phoneNumber: {
    fontSize: 16,
    marginRight: 10,
  },
  sentText: {
    color: 'green',
    fontSize: 16,
  },
});
