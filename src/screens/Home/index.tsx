import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Home() {
    function handleParticipantAdd(){
        console.log('clicou no button add')
    }

    return (
        <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do evento
        </Text>

        <Text style={styles.eventDate}>
            Sexta, 4 de Novembro de 2022.
        </Text>

        <TextInput 
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor="#6b6b6b"
            keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        </View>
    )
}