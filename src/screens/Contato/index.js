import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Contato() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contato 📞</Text>

      <View style={styles.item}>
        <FontAwesome name="phone" size={20} />
        <Text style={styles.text}> (11) 99999-9999</Text>
      </View>

      <View style={styles.item}>
        <FontAwesome name="whatsapp" size={20} color="green" />
        <Text style={styles.text}> WhatsApp: (11) 98888-8888</Text>
      </View>

      <View style={styles.item}>
        <FontAwesome name="map-marker" size={20} color="red" />
        <Text style={styles.text}> Rua dos Bolos, 123</Text>
      </View>

      <View style={styles.item}>
        <FontAwesome name="building" size={20} />
        <Text style={styles.text}> CNPJ: 00.000.000/0001-00</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },

  text: {
    marginLeft: 10,
    fontSize: 16
  }
});