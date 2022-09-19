
<h1 align="center"> Project React Native - Rocketseat Ignite </h1>

# Demo
<img src="readme.jpeg" style="width: 50%; ">
<!-- <img src="readme.gif" style="width: 50%; "> -->

---

#Índice
- [Demo](#demo)
- [About the project](#about-the-project)
- [Step to step for create the project in Expo](#step-to-step-for-create-the-project-in-expo)
  - [FlatList](#flatlist)
  - [ScrollView](#scrollview)
  - [Alert.alert](#alertalert)
- [🚀 Technologies used in this project](#-technologies-used-in-this-project)
- [📥 How to use](#-how-to-use)
- [🚀 Developer](#-developer)
- [📞 Contact me](#-contact-me)

---

# About the project
This is a project developed at the Rocketseat Ignite  - React Native - updated trail

---

# Step to step for create the project in Expo 

Create a folder for your project named nlw/server.
```js
npx expo init [projectName] 
cd [projectName]
```

## FlatList
```js
const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro','Rodrigo2', 'Vini2', 'Diego2', 'Biro2','Vini3', 'Diego3', 'Biro3',]

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
```

## ScrollView
```js
const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro','Rodrigo2', 'Vini2', 'Diego2', 'Biro2','Vini3', 'Diego3', 'Biro3',]

<ScrollView showsVerticalScrollIndicator={false} >
    {
        participants.map((participant) => (
            <Participant 
                key={participant} 
                name={participant} 
                onRemove={() => handleParticipantAdd('Tayse Rosa 2')} 
            />
        ))
    }
</ScrollView>
```

## Alert.alert
```js
Alert.alert("Remover", `Remover o participante ${name} ?`, [
            {
                text: 'Sim', 
                onPress: () => Alert.alert('Deletado!', `o participante ${name}`),
                style: 'default'
            },
            {
                text: 'Não', 
                style: 'cancel'
            }
        ]);
    }
```

useState:
```js
const [ participants, setParticipants ] = useState(['João']);

setParticipants(prevState => [ ...prevState, 'Ana'])
```

TextInput (ver no console cada letra sendo alterada):
```js
<TextInput 
    style={styles.input}
    placeholder='Nome do participante'
    placeholderTextColor="#6b6b6b"
    onChangeText={text => setParticipantName(text) }
/>
```

---

# 🚀 Technologies used in this project
The project was developed using the following technologies:

- [x] React Native CLI
- [x] React Native EXPO
- [x] Typescript
- [x] Componentização
- [x] Props (propriedades)
- [x] Passar funções por parâmetros para o component
- [x] ScrollView
- [x] FlatList (mais performática)
- [x] Hooks (useState, useEffect etc...)
- [x] Imutabilidade
- [x] map
- [x] includes, push etc..
- [x] Alert.alert

# 📥 How to use
```js

    //Clone the repository
    $ git clone https://github.com/TayseRosa/rocketseat-ignite-reactnative-trilha-atualizada.git
    
    //Enter directory
    $ cd rocketseat-ignite-reactnative-trilha-atualizada

    //Install dependencies
    $ npm install 

    //Start the project
    $ expo start
    

``` 

# 🚀 Developer

<a href="https://www.tayserosa.dev">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/31596454?v=4" width="100px;" alt="Tayse Rosa" style="border-radius:50%"/>
 <br />
 <sub><b>Tayse Rosa</b></sub></a> <a href="https://www.tayserosa.dev" title="Tayse Rosa">🚀</a>


<hr />

# 📞 Contact me

👋🏽 Entre em contato!


<a href="https://www.linkedin.com/in/tayse-rosa-3b683151/" target="_blank">
<img src="https://img.shields.io/static/v1?label=LinkedIn&message=Tayse Rosa&color=blue&style=for-the-badge&logo=linkedin"/>
</a>
<br/>
<br/>

<a href="https://github.com/TayseRosa/" target="_blank">
<img src="https://img.shields.io/static/v1?label=GitHub&message=Tayse Rosa&color=black&style=for-the-badge&logo=github"/>
</a>
<br/>
<br/>

<a href="https://api.whatsapp.com/send?phone=5551982368077" target="_blank">
<img src="https://img.shields.io/static/v1?label=whatsapp&message=Tayse Rosa&color=green&style=for-the-badge&logo=whatsapp"/>
</a>
<br/>
<br/>


<a href="https://www.tayserosa.dev" target="_blank">
<img src="https://img.shields.io/static/v1?label=Portfólio&message=Tayse Rosa&color=pink&style=for-the-badge&logo=portfolio"/>
</a>
<br/>
<br/>

<p style="text-align: center">Developer with ❤️ by Tayse Rosa</p>
