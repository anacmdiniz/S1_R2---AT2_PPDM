import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={styles.container}>

                    {/* logo da loja de boloss */}
                    <Image
                        source={require("../../../assets/anadinizbolos.png")}
                        style={styles.logo}
                    />

                    {/* empresa */}
                    <Text style={styles.title}>Ana Diniz | Bolos Artesanais</Text>

                    {/* descricao da loja */}
                    <Text style={styles.description}>
                        Onde o sabor encontra o afeto. Bolos feitos à mão, com ingredientes selecionados e o cuidado que sua celebração merece. Do clássico ao sofisticado, transformamos açúcar em memórias inesquecíveis.
                    </Text>

                    {/* nome */}
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome..."
                    />

                    {/* botao de enviar dados */}
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Enviar dados</Text>
                    </Pressable>

                    {/* navegacao */}
                    <Pressable
                        style={styles.buttonSecondary}
                        onPress={() => navigation.navigate('Produtos')}
                    >
                        <Text style={styles.buttonText}>Ver Produtos</Text>
                    </Pressable>

                    <Pressable
                        style={styles.buttonSecondary}
                        onPress={() => navigation.navigate('Contato')}
                    >
                        <Text style={styles.buttonText}>Contato</Text>
                    </Pressable>

                    {/* icones */}
                    <Text style={styles.subtitle}>Nossas redes</Text>

                    <View style={styles.alinharEmLinha}>
                        <TouchableOpacity style={styles.socialMedia}>
                            <FontAwesome name='instagram' size={28} color='#98513b' />
                            <Text style={styles.socialMediaText}>instagram</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialMedia}>
                            <FontAwesome name='whatsapp' size={28} color='#98513b' />
                            <Text style={styles.socialMediaText}>WhatsApp</Text>
                        </TouchableOpacity>
                    </View>


                    <StatusBar style="auto" />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f4f6f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    logo: {
        width: 300,
        height: 300,
        marginBottom: 10
    },

    title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#8a441e'
    },

    description: {
        textAlign: 'center',
        marginVertical: 15,
        color: '#1e1e1e'
    },

    subtitle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        width: '100%',
        marginTop: 15
    },

    button: {
        backgroundColor: '#6e5e45',
        marginTop: 20,
        borderRadius: 10,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonSecondary: {
        backgroundColor: '#b9105c',
        marginTop: 10,
        borderRadius: 10,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    alinharEmLinha: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10
    },

    socialMedia: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    socialMediaText: {
        marginLeft: 5
    }
});
