export default function Adidas() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Tenis/Adidas/6.png"),
      modelo: "Adidas Coreracer Masculino",
      valor: "R$ 179,99",
    },
    {
      id:"2",
      imagem: require("../assets/Tenis/Adidas/7.png"),
      modelo: "Adidas Breaknet Masculino",
      valor:  "R$ 208,99",
    },
    {
      id:"3",
      imagem: require("../assets/Tenis/Adidas/8.png"),
      modelo: "Adidas Lite Racer Rebold 1",
      valor:  "R$ 379,99",
    },
    {
      id:"4",
      imagem: require("../assets/Tenis/Adidas/9.png"),
      modelo: "Adidas Lite Racer Rebold 2",
      valor:  "R$329,05",
    },
    {
      id:"5",
      imagem: require("../assets/Tenis/Adidas/10.png"),
      modelo: "Adidas Lite Racer Rebold 3",
      valor:  "R$ 218,49",
    }
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={produtos}
          renderItem={({item})=>
            <CardTenis 
                imagem={item.imagem}
                modelo={item.modelo}
                valor={item.valor}
            />
          }
          keyExtractor={item => item.id}
        />        
      </View>
    </ScrollView>
  );
}
