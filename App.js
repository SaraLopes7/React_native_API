import { StatusBar } from 'expo-status-bar';
/* import { Text, View } from 'react-native'; */
import Simpson from './src/componentes/simpson';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#2F48D4" barStyle="light-content" />
      <Simpson />
    </>
  );
}

