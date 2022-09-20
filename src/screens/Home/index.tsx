import React, { useEffect, useState } from 'react'

import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export default function Home() {
    const [ participants, setParticipants ] = useState<string[]>([]);
    const [ participantName, setParticipantName ] = useState('');
    // const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro','Rodrigo2', 'Vini2', 'Diego2', 'Biro2','Vini3', 'Diego3', 'Biro3',]

    function handleParticipantAdd(name: string){
        if(participants.includes(participantName)){
            return Alert.alert('Participante existe','Já existe um participante na lista com este nome');
        }

        setParticipants(prevState => [ ...prevState, participantName])
        setParticipantName('')//limpando o estado
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name} ?`, [
            {
                text: 'Sim', 
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
                style: 'default'
            },
            {
                text: 'Não', 
                style: 'cancel'
            }
        ]);

    }

    function handleStates (value: string){
        setParticipantName(value)
        console.log(participantName)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento 
            </Text>

            
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor="#6b6b6b"
                    onChangeText={text => setParticipantName(text) }
                    // onChangeText={handleStates}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={e=>handleParticipantAdd(e)}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* <ScrollView showsVerticalScrollIndicator={false} >
                {
                    participants.map((participant) => (
                        <Participant 
                            key={participant} 
                            name={participant} 
                            onRemove={() => handleParticipantAdd('Tayse Rosa 2')} 
                        />
                    ))
                }
            </ScrollView> */}
            
            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant 
                    key={item} 
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)} 
                    />
                    )}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}> Ningém chegou no evento ainda? Adicione participantes a sua lista de presença. </Text>
                )}
            />
            
        </View>
    )
}