import {  SafeAreaView, StyleSheet } from 'react-native';
import MyEmoji from './components/MyEmoji'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <MyEmoji/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
