import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Card from './Card';

export default function Movie() {
    const movie = [
        {
            id:"1",
            imagem: require("../assets/Movies/gardioes.jpg"),
            titulo: "Guardiões da Galáxia: Volume 3", 
            sinopse: "Peter Quill, que ainda está a recuperar da perda de Gamora, tem que reunir a sua equipa para defender o universo e proteger um dos seus. Uma missão que, se não for concluída com sucesso, pode levar ao fim dos Guardiões como os conhecemos.",
            lancamento: "04-05-2023 (BR)",
            age: "12",
            genero: "Ficção científica, Aventura, Ação, Comédia",
            duracao: "2h 30m",
            avaliacao: 1.0,
        },
        {
            id:"2",
            imagem: require("../assets/Movies/homemferro.jpg"),
            titulo: "Homem de Ferro",
            sinopse: "Tony Stark é um bilionário da indústria e génio da invenção que é raptado e forçado a construir uma arma devastadora. Em vez disso, e utilizando a sua inteligência e engenho, constrói uma armadura bem armada e consegue escapar. Ao desvendar uma perversa trama com implicações mundiais, ele assume a sua armadura e jura proteger o mundo como o Homem de Ferro.",
            lancamento: "30-04-2008 (BR)",
            age: "12",
            genero: "Ação, Ficção científica, Aventura",
            duracao: "2h 6m",
            avaliacao: 1.0,
        },
        {
            id:"3",
            imagem: require("../assets/Movies/007.jpg"),
            titulo: "007: Sem Tempo para Morrer",
            sinopse: "Bond deixou o serviço ativo e está desfrutando de uma vida tranquila na Jamaica. Sua paz é interrompida quando o seu velho amigo Felix Leiter, da CIA, aparece pedindo sua ajuda. A missão de resgatar um cientista sequestrado acaba sendo muito mais difícil do que o esperado, deixando Bond no caminho de um vilão misterioso e armado com uma nova tecnologia perigosa.",
            lancamento: "30/09/2021 (BR)",
            age: "14",
            genero: "Aventura, Ação, Thriller",
            duracao: "2h 43m",
            avaliacao: 1.0,
        },
        {
            id:"4",
            imagem: require("../assets/Movies/star.jpg"),
            titulo: "Star Wars: O Despertar da Força",
            sinopse: "A queda de Darth Vader e do Império levou ao surgimento de uma nova força sombria: a Primeira Ordem. Eles procuram o jedi Luke Skywalker, desaparecido. A resistência tenta desesperadamente encontrá-lo antes para salvar a galáxia.",
            lancamento: "18/12/2015 (BR)",
            age: "12",
            genero: "Aventura, Ação, Ficção científica, Fantasia ",
            duracao: "2h 16m",
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