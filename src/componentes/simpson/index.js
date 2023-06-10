import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import styles from '../../../style/style';

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
                    <Text style={styles.textResponse}>
                        <Text style={styles.nomeText}>Nome: </Text>
                        {personagem.character}
                    </Text>

                    <Text style={styles.textResponse}>
                        <Text style={styles.nomeText}>Citação: </Text>
                        {personagem.quote}
                    </Text>

                    <Image
                        style={styles.personagemImage}
                        source={{
                            uri: `${personagemImage}`,
                        }}
                    />
                </View>
            )}

        </View>
    );

}
