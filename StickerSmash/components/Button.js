import { Pressable, StyleSheeet, View } from 'react-native';

export default function Button({ label }) {
    return (
        <Pressable style={styles.button} onPress={() => console.log('Pressed')}>
        </Pressable>
    );
}