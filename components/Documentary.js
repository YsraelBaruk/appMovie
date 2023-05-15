import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Card from './Card';
export default function Documentary() {
    const movie = [
        {
            id:"1",
            imagem: require("../assets/Documentary/senna.jpg"),
            titulo: "Senna",
            sinopse: "Um documentário sobre Ayrton Senna e sua carreira na Fórmula 1, mostrando sua jornada física e espiritual, tanto na pista quanto fora dela; sua busca pela perfeição e sua transformação definitiva de um novato extremamente talentoso, que explodiu na F1 em 1984, ao mito, após o trágico acontecimento de Ímola, em 1994. Produzido com a cooperação da família Senna e da Fórmula One Management, é o primeiro documentário oficial sobre a vida do piloto, com material de arquivo surpreendente e, em grande parte, inédito.",
            lancamento: "12-11- (BR)",
            age: "L",
            genero: "Documentário, História",
            duracao: " 1h 45m",
            avaliacao: 1.0,
        },
        {
            id:"2",
            imagem: require("../assets/Documentary/time.jpg"),
            titulo: "O Time da Redenção",
            sinopse: "Após o fiasco nos Jogos Olímpicos de 2004, o time de basquete masculino dos EUA busca a redenção e parte para a briga pelo ouro nos Jogos de Pequim de 2008.",
            lancamento: "2022",
            age: "10",
            genero: "Documentário",
            duracao: "1h 38m",
            avaliacao: 1.0,
        },
        {
            id:"3",
            imagem: require("../assets/Documentary/pele.jpg"),
            titulo: "Pelé",
            sinopse: "Documentário que retrata a vida de Pelé, da busca pela perfeição à condição de mito. Abrangendo um extraordinário período de 12 anos, a produção mostra como o único jogador a vencer três Copas do Mundo passou de astro do futebol em 1958 a herói nacional em 1970, uma época radical e turbulenta no Brasil.",
            lancamento: "23-02-2021 (BR)",
            age: "10",
            genero: "Documentário",
            duracao: "1h 48m",
            avaliacao: 1.0,
        },
        {
            id:"4",
            imagem: require("../assets/Documentary/pepsi.jpg"),
            titulo: "Pepsi, Cadê Meu Avião?",
            sinopse: "Em 1996, a Pepsi anunciou um caça militar como o grande prêmio de uma promoção e o universitário John Leonard bancou o desafio. Mas a Pepsi afirmou que era tudo brincadeira. Até hoje esta batalha legal fascina consumidores e acadêmicos do Direito.",
            lancamento: "2022",
            age: "12",
            genero: "Documentário",
            duracao: "1 Season 4 Episodes",
            avaliacao: 1.0,
        },
];

return (
    <ScrollView>
        <View style={estilo.container2}>
            <FlatList
                data={movie}
                renderItem={({item})=>
                    <Card
                        imagem={item.imagem}
                        titulo={item.titulo}
                        sinopse={item.sinopse}
                        lancamento={item.lancamento}
                        age={item.age}
                        genero={item.genero}
                        duracao={item.duracao}
                        avaliacao={item.avaliacao}
                    />
                }
                keyExtractor={item => item.id}
            />
        </View>
    </ScrollView>
);
}