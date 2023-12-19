/*  Desafio: Cria uma lista e verifica seu nome da lista, está presente, se for possitivo, retorna o nome com a média, se não, uma mensagem  */

const alunos = [ "João" , "Juliana", "Ana" , "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){

    if(listaDeAlunosEMedias[0].includes(aluno)){

        const [alunos, medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`
        )

    } else{
        console.log(`Aluno ${aluno} não encontrado!`)
    }

}

exibeNomeENota("Caio");