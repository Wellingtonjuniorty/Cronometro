import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#080808',
    },
    text: {
      fontSize: 50,
    },
    button: {
      backgroundColor: '#636df2',
      width: 100,
      height: 35,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 2
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
    },
    buttonArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

  const [tempo, setTempo] = useState('00:00:00');
  const [status, setStatus] = useState('Iniciar');
  
  function Iniciar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setStatus('Retomar')
    } else {
      timer = setInterval(() => {
        ss++;
        if (ss == 60) {
          ss = 0;
          mm++;
        }
        if (mm == 60) {
          mm = 0;
          hh++;
        }
        let format =
          (hh < 10 ? '0' + hh : hh) +
          ':' +
          (mm < 10 ? '0' + mm : mm) +
          ':' +
          (ss < 10 ? '0' + ss : ss);
        setTempo(format);
        setStatus('Pausar')
      }, 1000);
    }
  }

  function Reiniciar(){
      setTempo('00:00:00');
      setStatus('Iniciar');
      timer = null;
      ss = 0;
      mm = 0;
      hh = 0;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{tempo}</Text>
      <View style={styles.buttonArea}>
      <TouchableOpacity style={styles.button} onPress={Iniciar}>
        <Text style={styles.buttonText}>{status}</Text>
      </TouchableOpacity>
       
      <TouchableOpacity style={styles.button} onPress={Reiniciar}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}