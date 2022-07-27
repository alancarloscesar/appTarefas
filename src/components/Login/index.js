import React,{useState} from 'react';
import { View, Text, SafeAreaView,StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import firebase from '../../../src/services/firebaseConnection.js';

console.disableYellowBox=true;

export default function Login({changeStatus}) {

    const [type, setType] = useState('login')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        if(type === 'login'){
            //aqui fazermos o login
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                changeStatus(user.user.uid);
            }).catch((error)=>{
                console.log(error)
                alert('Ops deu algo errado....')
                return;
            })
        }else{
            //aqui cadastro de usuarios
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user)=>{
                changeStatus(user.user.uid);
            }).catch((error)=>{
                console.log(error)
                alert('Ops parece que deu algo errado....')
                return;
            })
        }
    }

 return (
   <SafeAreaView style={styles.container}>
       <TextInput
       style={styles.input}
       placeholder="Seu E-mail..."
       value={email}
       onChangeText={(text) => setEmail(text)}
       />

       <TextInput
       style={styles.input}
       placeholder="*********"
       value={password}
       onChangeText={(text) => setPassword(text)}
       secureTextEntry={true}
       />

    <TouchableOpacity
    style={[styles.handleLogin, {backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'}]}
    onPress={handleLogin}
    >
        <Text style={styles.textBtn}>
            { type === 'login' ? 'Acessar' : 'Cadastrar' }
        </Text>
    </TouchableOpacity>

    <TouchableOpacity>
        <Text style={{textAlign:'right', paddingRight:15}}
        onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')}
        >
            {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </Text>
    </TouchableOpacity>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 75,
        backgroundColor:'#f2f6fc',
        paddingHorizontal: 10
    },
    input:{
        marginBottom:20,
        backgroundColor:'#fff',
        borderRadius:4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: "#141414"
    },
    handleLogin:{
        height: 45,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 25
    },
    textBtn:{
        color:'#fff',
        fontSize: 17,
        fontWeight:'bold'
    }
})