import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import api from '../../services/api';

export default function Simpson() {
    const [simpsonInput, setSimpson] = useState('');
    const [personagemImage, setPersonagemImage] = useState("");
    const [personagem, setPersonagem] = useState(null);

    async function handleBuscar() {
        const response = await api.get(`quotes?count=1&character=${simpsonInput}`);
        console.log(response);
        setPersonagem(response.data[0]);
        setPersonagemImage(response.data[0].image);
    };

    async function handleLimpar() {
        setSimpson('');
        setPersonagem(null);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.tittle}>
                Busque um Simpson
            </Text>

            {!personagem &&
                <TextInput
                    style={styles.input}
                    onChangeText={setSimpson}
                    onSubmitEditing={handleBuscar}
                    placeholder="Digite o Nome de algum personagem"
                    placeholderTextColor="#2F48D4"
                    value={simpsonInput}
                />}

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={personagem ? handleLimpar : handleBuscar}>

                <Text style={styles.buttonText}>
                    {personagem ? 'Limpar' : 'Buscar'}
                </Text>
            </TouchableOpacity>

            {personagem && (
                <View style={styles.addressarea}>
                    <Text>
                        <Text style={styles.boldText}>Nome: </Text>
                        {personagem.character}
                    </Text>

                    <Text>
                        <Text style={styles.boldText}>Citação: </Text>
                        {personagem.quote}
                    </Text>

                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                        }}
                        source={{
                            uri: `${personagemImage}`,
                        }}
                    />
                </View>
            )}

        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#009DDC',
        flex: '1',
        padding: '20px',
    },

    tittle: {
        fontSize: '20px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    input: {
        backgroundColor: '#FFF',
        borderRadius: '5px',
        color: '#2F48D4',
        fontSize: '16px',
        marginTop: '20px',
        width: '100%',
        height: '35px',
        padding: '10px',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#FED41D',
        borderRadius: '5px',
        marginTop: '20px',
        padding: '8px',
        width: '100%',
    },

    buttonText: {
        color: '#fff',
        fontSize: '18px',
        fontSeight: 'bold',
        textTransform: 'uppercase',
    },

    boldText: {
        fontWeight: 'bold',
    },

    addressarea: {
        alignItems: 'left',
        marginTop: '15px',
    },
});