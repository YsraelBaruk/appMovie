import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Card from './Card';

export default function Series() {
    const movie = [
        {
            id:"1",
            imagem: require("../assets/Series/walking.jpg"),
            titulo: "The Walking Dead",
            sinopse: "Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.",
            lancamento: "2010",
            age: "16",
            genero: "Action & Adventure, Drama, Sci-Fi & Fantasy",
            duracao: "42m",
            avaliacao: 1.0,
        },
        {
            id:"2",
            imagem: require("../assets/Series/wars.jpg"),
            titulo: "The Mandalorian",
            sinopse: "A saga de um guerreiro solitário, que também é um mercenário e pistoleiro, viajando pelos territórios esquecidos e marginais do espaço, logo após a queda do Império e antes da criação da temida Primeira Ordem.",
            lancamento: "2019",
            age: "14",
            genero: "Sci-Fi & Fantasy, Action & Adventure, Drama",
            duracao: "40m",
            avaliacao: 1.0,
        },
        {
            id:"3",
            imagem: require("../assets/Series/tlastofus.jpg"),
            titulo: "The Last of Us",
            sinopse: "Situado duas décadas após a implosão de nossa sociedade, o drama seguirá Joel, um sobrevivente difícil, que é contratado para contrabandear uma garota de 14 anos chamada Ellie para fora de uma zona de quarentena opressiva. O que começa como um pequeno trabalho logo se torna uma jornada brutal e de partir o coração, já que os dois precisam atravessar os Estados Unidos e dependem um do outro para sobreviver.",
            lancamento: "2023",
            age: "16",
            genero: "Drama",
            duracao: "59m",
            avaliacao: 1.0,
        },
        {
            id:"4",
            imagem: require("../assets/Series/flash.jpg"),
            titulo: "Flash",
            sinopse: "Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.",
            lancamento: "2014",
            age: "14",
            genero: "Drama, Sci-Fi & Fantasy",
            duracao: "44m",
            avaliacao: 1.0,
        },
        {
            id:"5",
            imagem: require("../assets/Series/gotham.jpg"),
            titulo: "Gotham Knights: A Série",
            sinopse: "No rescaldo do assassinato de Bruce Wayne, seu filho adotivo rebelde forja uma aliança improvável com os filhos dos inimigos de Batman quando todos eles são enquadrados por matar o Cruzado Encapuzado.",
            lancamento: "2023",
            age: "14",
            genero: "Action & Adventure, Drama",
            duracao: "42m",
            avaliacao: 1.0,
        },
        {
            id:"6",
            imagem: require("../assets/Series/halo.jpg"),
            titulo: "Halo",
            sinopse: "Uma épica batalha acontece no durante o século XXVI entre a raça humana e uma espécie alienígena conhecida como Covenant.",
            lancamento: "2022",
            age: "16",
            genero: "Action & Adventure, Sci-Fi & Fantasy",
            duracao: "40m",
            avaliacao: 4.6,
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