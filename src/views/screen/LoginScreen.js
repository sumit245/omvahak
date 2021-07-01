import React, { Component } from 'react'
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native'
import { TextInput, Checkbox, Button, Divider } from 'react-native-paper'
import { Primary_Accent_Color, Primary_Accent_Light, Primary_Text, Secondary_Accent_Color, Secondary_Accent_Dark, Secondary_Text } from '../../utils/color'
import { screen_width } from '../../utils/dimens'

export default function LoginScreen({ navigation }) {
    const [checked, setChecked] = React.useState(false);
    const [userId, setUserId] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={styles.logincontainer}>
            <ImageBackground source={require('../../assets/Bglogin.jpg')} style={styles.imagebackground}>
                <View style={styles.internalcontainer}>
                    <Image source={require('../../assets/Logo10.png')}
                        style={styles.logo} />

                    <View style={{ position: 'relative', top: 100 }}>
                        <TextInput
                            placeholder="Enter User Id"
                            placeholderTextColor={Secondary_Text}
                            style={styles.input}
                            value={userId}
                            onChangeText={setUserId}
                        />
                        <TextInput
                            placeholder="Enter Password"
                            placeholderTextColor={Secondary_Text}
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 2 }}>
                            <Checkbox
                                uncheckedColor="#FFFFFF"
                                color={Primary_Accent_Light}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={{ color: Primary_Text, fontWeight: 'bold', fontSize: 14 }}>Show Password</Text>
                        </View>
                        <Text style={{ color: Primary_Text, fontWeight: 'bold', fontSize: 14, padding: 4, marginLeft: 6 }}>Don't Have Account?
                            <Text style={{ marginLeft: 6, fontStyle: "italic", textDecorationLine: 'underline' }}
                                accessibilityRole="link"
                                onPress={() => {
                                    navigation.navigate("Register")
                                }}
                            >
                                Create a new
                                {/* create hyperlink of registration */}
                            </Text>
                        </Text>
                        <Button style={{ margin: 10 }}
                            color={Primary_Accent_Light}
                            icon="lock" mode="contained"
                            onPress={() => console.log('Pressed')}>
                            Sign In
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    imagebackground: {
        resizeMode: 'cover',
        flex: 1,
        width: screen_width,
        justifyContent: 'center'
    },
    logincontainer: {
        flex: 1,
        flexDirection: "column"
    },
    internalcontainer: {
        backgroundColor: "#9a0007a0",
        flex: 1
    },
    logo: {
        height: 180,
        width: screen_width - 20,
        position: 'relative',
        top: screen_width / 2 - 140,
        left: 10,
        borderRadius: 10,
    },
    input: {
        height: 44,
        padding: 0,
        marginHorizontal: 10,
        marginVertical: 6,
        backgroundColor: '#ffffff',
        elevation: 5,
        borderColor: Secondary_Accent_Dark
    }
})