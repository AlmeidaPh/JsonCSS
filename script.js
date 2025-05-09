document.addEventListener("DOMContentLoaded", () => {
    fetch("dados.json")
        .then(response => response.json())
        .then(dados => {
            const card = document.getElementById("card1");
            const titulo = document.getElementById("titulo");
            const paragrafo = document.getElementById("paragrafo");
            const nome = document.getElementById("textoNome");
            const senha = document.getElementById("textoSenha");
            const fundo = document.getElementById("corpo");

            document.getElementById("modos1").addEventListener("change", (event) => {
                const selecionado = event.target.id;
                let modo;

                if (selecionado === "mdClaro") {
                    modo = dados.modoClaro[0];
                } 
                else if (selecionado === "mdAmarelo") {
                    modo = dados.modoAmarelo[0];
                }
                else if (selecionado === "mdVermelho") {
                    modo = dados.modoVermelho[0];
                } 
                else if(selecionado === "mdAzul"){
                    modo = dados.modoAzul[0];
                }
                else {
                    modo = dados.modoEscuro[0];
                }

                titulo.style.color = modo.corTitulo;
                paragrafo.style.color = modo.corParagrafo;
                nome.style.color = modo.corNome;
                senha.style.color = modo.corSenha;
                card.style.backgroundColor = modo.corCard;
                fundo.style.backgroundColor = modo.corCorpo;


                console.log("modo selecionado: ", modo);
            });
        })
        .catch(error => console.log("Erro ao carregar o JSON: ", error));
});

