import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    questionText: {
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    exampleText: {
        marginBottom: 20,
        fontSize: 16,
    },
    factText: {
        marginBottom: 20,
        fontSize: 16,
    },
    answerButton: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#c0c0f0',
    },
    answerText: {
        fontSize: 16,
    },
});