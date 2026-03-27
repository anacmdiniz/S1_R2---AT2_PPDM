import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { useState } from "react";

export default function Produtos() {

  const [qtd, setQtd] = useState(1);

  function adicionarCarrinho() {
    alert("Produto adicionado ao carrinho!");
  }

  return (
    <ScrollView>
    <View style={styles.container}>

      <Text style={styles.title}>Nossos Bolos 🎂</Text>

      {/* bolo 1 */}
      <View style={styles.card}>
        <Image
          source={require("../../../assets/chocolate.png")}
          style={styles.img}
        />
        <Text>Bolo de Chocolate</Text>
        <Text>R$ 50,00</Text>
        <Text style={styles.pix}>PIX: R$ 45,00</Text>

        <View style={styles.qtd}>
          <Pressable onPress={() => setQtd(qtd > 1 ? qtd - 1 : 1)}>
            <Text style={styles.btnQtd}>-</Text>
          </Pressable>

          <Text>{qtd}</Text>

          <Pressable onPress={() => setQtd(qtd + 1)}>
            <Text style={styles.btnQtd}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={adicionarCarrinho}>
          <Text style={{ color: "#fff" }}>Adicionar</Text>
        </Pressable>
      </View>

      {/* bolo 2 */}
      <View style={styles.card}>
        <Image
          source={require("../../../assets/maracuja.png")}
          style={styles.img}
        />
        <Text>Bolo de Maracujá</Text>
        <Text>R$ 50,00</Text>
        <Text style={styles.pix}>PIX: R$ 45,00</Text>

        <View style={styles.qtd}>
          <Pressable onPress={() => setQtd(qtd > 1 ? qtd - 1 : 1)}>
            <Text style={styles.btnQtd}>-</Text>
          </Pressable>

          <Text>{qtd}</Text>

          <Pressable onPress={() => setQtd(qtd + 1)}>
            <Text style={styles.btnQtd}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={adicionarCarrinho}>
          <Text style={{ color: "#fff" }}>Adicionar</Text>
        </Pressable>
      </View>

      {/* bolo 3 */}
      <View style={styles.card}>
        <Image
          source={require("../../../assets/morango.png")}
          style={styles.img}
        />
        <Text>Bolo de Morango</Text>
        <Text>R$ 50,00</Text>
        <Text style={styles.pix}>PIX: R$ 45,00</Text>

        <View style={styles.qtd}>
          <Pressable onPress={() => setQtd(qtd > 1 ? qtd - 1 : 1)}>
            <Text style={styles.btnQtd}>-</Text>
          </Pressable>

          <Text>{qtd}</Text>

          <Pressable onPress={() => setQtd(qtd + 1)}>
            <Text style={styles.btnQtd}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={adicionarCarrinho}>
          <Text style={{ color: "#fff" }}>Adicionar</Text>
        </Pressable>
      </View>

      {/* bolo 4 */}
      <View style={styles.card}>
        <Image
          source={require("../../../assets/cenoura.png")}
          style={styles.img}
        />
        <Text>Bolo de Cenoura</Text>
        <Text>R$ 50,00</Text>
        <Text style={styles.pix}>PIX: R$ 45,00</Text>

        <View style={styles.qtd}>
          <Pressable onPress={() => setQtd(qtd > 1 ? qtd - 1 : 1)}>
            <Text style={styles.btnQtd}>-</Text>
          </Pressable>

          <Text>{qtd}</Text>

          <Pressable onPress={() => setQtd(qtd + 1)}>
            <Text style={styles.btnQtd}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={adicionarCarrinho}>
          <Text style={{ color: "#fff" }}>Adicionar</Text>
        </Pressable>
      </View>

      {/* bolo 5 */}
      <View style={styles.card}>
        <Image
          source={require("../../../assets/ninho.png")}
          style={styles.img}
        />
        <Text>Bolo de Ninho</Text>
        <Text>R$ 50,00</Text>
        <Text style={styles.pix}>PIX: R$ 45,00</Text>

        <View style={styles.qtd}>
          <Pressable onPress={() => setQtd(qtd > 1 ? qtd - 1 : 1)}>
            <Text style={styles.btnQtd}>-</Text>
          </Pressable>

          <Text>{qtd}</Text>

          <Pressable onPress={() => setQtd(qtd + 1)}>
            <Text style={styles.btnQtd}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={adicionarCarrinho}>
          <Text style={{ color: "#fff" }}>Adicionar</Text>
        </Pressable>
      </View>

      {/* Você pode copiar esse bloco e trocar nome/imagem */}
      
    </View>

    </ScrollView>
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
    marginBottom: 10
  },

  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15
  },

  img: {
    width: "100%",
    height: 120,
    borderRadius: 10
  },

  pix: {
    color: "green"
  },

  qtd: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    gap: 10
  },

  btnQtd: {
    fontSize: 20,
    padding: 5
  },

  button: {
    backgroundColor: "#b9105c",
    padding: 10,
    borderRadius: 8,
    alignItems: "center"
  }
});