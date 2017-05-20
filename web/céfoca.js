var usuario = JSON.parse(localStorage.getItem("usuário"));
var atividades = JSON.parse(localStorage.getItem("atividades"));

var atualizar_nome = function() {
    var p_nome = document.querySelector("p#nome");
    if (usuario.nome.length > 0) {
        p_nome.textContent = usuario.nome;
    } else {
        p_nome.textContent = usuario.chave.slice(100, 108);
    };
};

window.addEventListener("load", function() {
    window.location = "#Atividades";
    if (usuario == null) {
        usuario = {
            nome: "",
            chave: KEYUTIL.getPEM(KEYUTIL.generateKeypair("RSA", 2048).prvKeyObj, "PKCS1PRV"),
        };
        localStorage.setItem("usuário", JSON.stringify(usuario));
    };
    atualizar_nome();
    if (atividades == null) {
        atividades = new Array();
        localStorage.setItem("atividades", JSON.stringify(atividades));
    };
    for (var i = 0; i < atividades.length; i++) {
        var atividade = atividades[i];
        if (! (atividade instanceof Atividade)) {
            atividades[i] = new Atividade(atividade.descricao, atividade.situacao, atividade.data_conclusao, atividade.data_prevista);
        };
    };
    var button_acoes = document.querySelector("div#barra-usuario button#acoes");
    var button_relatorios = document.querySelector("div#barra-usuario button#relatorios");
    var div_acoes = document.querySelector("div#acoes");
    var div_atividades = document.querySelector("div#atividades");
    var div_relatorios = document.querySelector("div#relatorios");
    button_acoes.addEventListener("click", function() {
        div_acoes.classList.remove("nao-mostra");
        div_atividades.classList.add("nao-mostra");
        div_relatorios.classList.add("nao-mostra");
    });
    button_relatorios.addEventListener("click", function() {
        div_acoes.classList.add("nao-mostra");
        div_atividades.classList.add("nao-mostra");
        div_relatorios.classList.remove("nao-mostra");
    });
    var acoes = new Acoes();
    acoes.mostrar(div_acoes);
    var pagina_atividades = new Atividades();
    pagina_atividades.mostrar(div_atividades);
    var relatorios = new Relatorios();
    relatorios.mostrar(div_relatorios);
});

window.addEventListener("hashchange", function(evento) {
    var marcador = evento.newURL.split("#")[1].split("-");
    var construtor = window[marcador[0]];
    var argumento = marcador[1];
    var div_acoes = document.querySelector("div#acoes");
    var div_atividades = document.querySelector("div#atividades");
    var div_relatorios = document.querySelector("div#relatorios");
    var pagina = new construtor(argumento);
    pagina.mostrar(div_atividades);
    div_acoes.classList.add("nao-mostra");
    div_atividades.classList.remove("nao-mostra");
    div_relatorios.classList.add("nao-mostra");
});
