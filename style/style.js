import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#009DDC',
        flex: '1',
        padding: '20px',
    },

    tittle: {
        fontSize: '30px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        color: '#fff',
        fontWeight: 'bold',
    },

    input: {
        backgroundColor: '#FFF',
        borderRadius: '5px',
        color: '#2F48D4',
        fontSize: '16px',
        marginTop: '20px',
        width: '100%',
        height: '35px',
        padding: '10px',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#FED41D',
        borderRadius: '5px',
        marginTop: '20px',
        padding: '8px',
        width: '100%',
    },

    buttonText: {
        color: '#fff',
        fontSize: '18px',
        fontSeight: 'bold',
        textTransform: 'uppercase',
    },

    textResponse: {
        color: '#fff',
        fontSize: '20px',
        marginTop: '1%',
    },

    nomeText: {
        fontWeight: 'bold',
        color: '#FED41D',
        fontSize: '20px',
        marginTop: '1%',
    },

    addressarea: {
        alignItems: 'left',
        marginTop: '5%',
    },

    personagemImage: {
        width: 300,
        height: 300,
        marginTop: '2%',
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode: "contain",
    },
});

export default styles;