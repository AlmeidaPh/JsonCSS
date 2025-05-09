document.addEventListener("DOMContentLoaded", () => {
    fetch("dados.json")
        .then(response => response.json())
        .then(dados => {
            const telaClaro = dados.modoClaro;
            const telaEscuro = dados.modoEscuro;
            const telaAmarelo = dados.modoAmarelo;
            const telaVermelho = dados.modoVermelho;
            console.log(telaEscuro);
            
            const card = document.getElementById("card1")
            const titulo = document.getElementById("titulo");
            const paragrafo = document.getElementById("paragrafo");
            const nome = document.getElementById("textoNome");
            const senha = document.getElementById("textoSenha");
            const BtnEnviar = document.getElementById("textoBtnEnviar");
            const fundo = document.getElementById("corpo");
            const btnRadio = document.getElementById("modos1")

            btnRadio.addEventListener("change", () => {
                console.log("funciona👍")
                const selecionado = document.querySelector('input[name="tela"]:checked');
                const filtro = selecionado ? selecionado.id : "mcClaro";

                if(filtro === "mdEscuro"){
                    titulo.style.color = json.corTitulo2;
                    paragrafo.style.color = json.corParagrafo2;
                    nome.style.color = json.corNome2;
                    senha.style.color = json.corSenha2;
                    fundo.style.color = json.corCorpo2;
                    card.style.color = json.corCard2;
                } else if(filtro === "mdVermelho"){
                    fundo.style.color = json.corCorpo4;
                }

            });

            
            
        }).catch(error => console.log("Erro ao carregar o JSON: ", error));
});