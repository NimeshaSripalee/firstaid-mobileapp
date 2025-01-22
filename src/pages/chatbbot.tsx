// ChatBot.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { sendChatMessage, startChat } from '../api';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [convoId, setConvoId] = useState<string>()


    const handleSend = async () => {
        if (input.trim().length === 0) return;

        const userMessage = { text: input, sender: 'user' };
        const botMessage =await getBotResponse(input);

        setMessages([...messages, userMessage, botMessage]);
        setInput("");
    };

    const getBotResponse =async (message:string) => {
        if(!convoId){
            const res = await startChat()
            const data = await res.json()
            setConvoId(data.convo_id)
        }

        const res = await sendChatMessage(convoId as string, message)
        const data = await res.json()

        return {
            text: data.response, 
            sender: "bot"
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.messagesContainer}>
                {messages.map((msg, index) => (
                    <View key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
                        <Text style={styles.messageText}>{msg.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    value={input}
                    onChangeText={setInput}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    messagesContainer: {
        flex: 1,
        padding: 10,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ECECEC',
    },
    input: {
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#007BFF',
        borderRadius: 20,
        padding: 10,
    },
    sendButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ChatBot;
