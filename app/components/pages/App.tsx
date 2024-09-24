
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import MessageList from '../organisms/MessageList';

const App: React.FC = () => {
  const phoneNumbers: string[] = [
    '94710819319',
    '94779421354',
    '94766609008',
    '94712655834',
    '94712967843',
    '94712965934',
    '94712965584',
  ];

  const [sentMessages, setSentMessages] = useState<string[]>([]);

  const sendWhatsAppMessage = (phoneNumber: string) => {
    const message = "Your order is delivered!";
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url).then(() => {
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

  return (
    <View style={{ flex: 1 }}>
      <MessageList
        phoneNumbers={phoneNumbers}
        sentMessages={sentMessages}
        onSendMessage={sendWhatsAppMessage}
      />
    </View>
  );
};

export default App;
