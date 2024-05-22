import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
    
    gapFillContainer: {
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Center children horizontally within the container
        padding: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        width: '100%', // Use the full width available
    },
    gapFillQuestionText: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 16,
        flexShrink: 1, // Allows text to shrink to fit on the line
      },
      input: {
        width: '80%', // Or whatever width fits your design
        padding: 10,
        marginBottom: 10, // Adds space below the input
        borderColor: 'gray',
        borderWidth: 1,
    },
    // input: {
    //     width: 80, // You might want to adjust this based on your needs
    //     marginHorizontal: 2, // Minimal horizontal spacing
    //     borderBottomWidth: 1, // Style to make it look like a gap fill (underline)
    //     textAlign: 'center', 
    //     minWidth: 100, // Minimum width for the input
    //     flex: 1, // Allows the input to grow and fill available space
    //     borderWidth: 1,
    //     borderColor: "gray",
    //     padding: 10,
    //   },
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