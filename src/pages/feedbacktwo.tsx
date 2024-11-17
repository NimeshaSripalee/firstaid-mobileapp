import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import BottomNavBar from '../components/bottomnav';
import { Rating } from 'react-native-ratings';
import { submitFeedback } from '../api';
import { AuthContext } from '../ctx/AuthContext';

function Feedback(): React.JSX.Element {
    const [selectedQ1, setSelectedQ1] = useState<string | null>(null);
    const [selectedQ2, setSelectedQ2] = useState<string | null>(null);
    const [suggestion, setSuggestions] = useState<string | null>(null);
    const [comments, setComments] = useState<string | null>(null);
    const [rating, setRating] = useState<number | null>(null);

    const handleQ1Select = (option:string) => {
        setSelectedQ1(option);
    };

    const handleQ2Select = (option:string) => {
        setSelectedQ2(option);
    };

    const onFeedbackSubmit = ()=>{
        submitFeedback({
            userid: contextValue.userid,
            q1:selectedQ1,
            q2:selectedQ2,
            suggestion,
            comments,
            rating
        }).then(()=>{
            console.log("Feedback saved");
        })
    }

    const { contextValue } = useContext(AuthContext)

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* Title */}
                <View style={{ flex: 1, backgroundColor: '#FFFFC6', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{
                        marginLeft: 20,
                        marginTop: 20,
                        width: 40,
                        height: 40
                    }} source={require('../../assets/images/Logo.png')} />

                    <Text style={{
                        marginTop: 20,
                        marginLeft: 20,
                        color: '#8C05D3',
                        fontSize: 40,
                        textAlign: 'center'
                    }}>Give Feedback </Text>
                </View>

                {/* Description */}
                <View style={{ flex: 1, backgroundColor: '#FFFFC6', paddingTop: 20 }}>
                    <Text style={{ color: 'black', fontSize: 20, paddingLeft: 20, flex: 1 }}>Your feedback matters!</Text>
                    <Text style={{ color: 'black', fontSize: 15, paddingLeft: 20, flex: 2 }}>Thank you for using our First Aid Advisor App. Your feedback
                        helps us improve our services to better meet your needs. Please
                        take a moment to share your thoughts with us.</Text>
                </View>

                {/* Q1 */}
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 20
                    }}>
                        1. Did our application help you in your time of need?
                    </Text>
                </View>

                {/* Q1 Answer */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: selectedQ1 === 'Yes' ? 'red' : '#8C05D3',
                            borderRadius: 20,
                            width: '40%',
                            alignItems: 'center',
                            padding: 10
                        }}
                        onPress={() => handleQ1Select('Yes')}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>
                            Yes
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: selectedQ1 === 'No' ? 'red' : '#8C05D3',
                            borderRadius: 20,
                            width: '40%',
                            alignItems: 'center',
                            padding: 10
                        }}
                        onPress={() => handleQ1Select('No')}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>
                            No
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Q2 */}
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 20,
                        paddingBottom: 10,
                    }}>
                        2. Did you find the app easy to navigate and use?
                    </Text>
                </View>

                {/* Q2 Answer */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: selectedQ2 === 'YesVeryEasy' ? 'red' : '#8C05D3',
                            borderRadius: 20,
                            width: '40%',
                            alignItems: 'center',
                            padding: 10
                        }}
                        onPress={() => handleQ2Select('YesVeryEasy')}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>
                            Yes, Very Easy
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: selectedQ2 === 'YesSomewhatEasy' ? 'red' : '#8C05D3',
                            borderRadius: 20,
                            width: '40%',
                            alignItems: 'center',
                            padding: 10
                        }}
                        onPress={() => handleQ2Select('YesSomewhatEasy')}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>
                            Yes, Somewhat Easy
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: selectedQ2 === 'NoSomewhatDifficult' ? 'red' : '#8C05D3',
                            borderRadius: 20,
                            width: '40%',
                            alignItems: 'center',
                            padding: 10
                        }}
                        onPress={() => handleQ2Select('NoSomewhatDifficult')}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>
                            No, Somewhat Difficult
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: selectedQ2 === 'NoVeryDifficult' ? 'red' : '#8C05D3',
                            borderRadius: 20,
                            width: '40%',
                            alignItems: 'center',
                            padding: 10
                        }}
                        onPress={() => handleQ2Select('NoVeryDifficult')}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>
                            No, Very Difficult
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Q3 */}
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 20,
                        paddingBottom: 10,
                    }}>
                        3. Do you have any suggestions for improving the app's functionality or user experience?
                    </Text>
                    <TextInput
                        style={{
                            backgroundColor: '#FFFFC6',
                            color: 'black',
                            width: '90%',
                            height: 70,
                            borderRadius: 20,
                            margin: 20,
                            paddingLeft: 20,
                            fontSize: 18,
                            alignSelf: 'center'
                        }}
                        onChangeText={setSuggestions}
                        placeholder='Type your suggestions here'
                        placeholderTextColor={'#444'}
                    />
                </View>

                {/* Q4 */}
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 20,
                        paddingBottom: 10,
                    }}>
                        4. What is the rate you can give about the app?
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
                        {/* Star Rating Placeholder */}
                        <Rating
                            type='heart'
                            ratingCount={3}
                            imageSize={60}
                            showRating
                            onFinishRating={setRating}
                            />
                    </View>
                </View>

                {/* Q5 */}
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 20,
                        paddingBottom: 10,
                    }}>
                        5. Do you have any additional comments or feedback?
                    </Text>
                    <TextInput
                        style={{
                            backgroundColor: '#FFFFC6',
                            color: 'black',
                            width: '90%',
                            height: 70,
                            borderRadius: 20,
                            margin: 20,
                            paddingLeft: 20,
                            fontSize: 18,
                            alignSelf: 'center'
                        }}
                        onChangeText={setComments}
                        placeholder='Type your comments here'
                        placeholderTextColor={'#444'}
                    />
                </View>

                {/* Save Button */}
                <View style={{ flex: 1, backgroundColor: 'white', paddingBottom: 40 }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#D21E5F',
                        borderRadius: 40,
                        margin: 40,
                        padding: 10,
                        alignItems: 'center'
                    }} onPress={onFeedbackSubmit}>
                        <Text>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default Feedback;
