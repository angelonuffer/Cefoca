var Pagina = function() {
    this.elemento = document.createElement("div");
};
Pagina.prototype.mostrar = function(elemento) {
    elemento.textContent = "";
    elemento.appendChild(this.elemento);
};

var Acoes = function() {
    Pagina.call(this);
    var button = document.createElement("button");
    button.textContent = "Nova atividade";
    button.style.marginLeft = "10px";
    button.style.width = "calc(100% - 20px)";
    button.addEventListener("click", function() {
        window.location = "#NovaAtividade";
    });
    this.elemento.appendChild(button);
};
Acoes.prototype = new Pagina();
Acoes.prototype.constructor = Acoes;

var Atividades = function() {
    Pagina.call(this);
    var fieldset_atrasadas = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Atrasadas";
    fieldset_atrasadas.appendChild(legend);
    fieldset_atrasadas.style.paddingBottom = "0px";
    fieldset_atrasadas.style.display = "none";
    this.elemento.appendChild(fieldset_atrasadas);
    var fieldset_hoje = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Hoje";
    fieldset_hoje.appendChild(legend);
    fieldset_hoje.style.paddingBottom = "0px";
    fieldset_hoje.style.display = "none";
    this.elemento.appendChild(fieldset_hoje);
    var fieldset_sem_data = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Sem data";
    fieldset_sem_data.appendChild(legend);
    fieldset_sem_data.style.paddingBottom = "0px";
    fieldset_sem_data.style.display = "none";
    this.elemento.appendChild(fieldset_sem_data);
    var fieldset_amanha = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Amanhã";
    fieldset_amanha.appendChild(legend);
    fieldset_amanha.style.paddingBottom = "0px";
    fieldset_amanha.style.display = "none";
    this.elemento.appendChild(fieldset_amanha);
    var dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var fieldset_mais_dois = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = dias.concat(dias)[new Date().getDay() + 2];
    fieldset_mais_dois.appendChild(legend);
    fieldset_mais_dois.style.paddingBottom = "0px";
    fieldset_mais_dois.style.display = "none";
    this.elemento.appendChild(fieldset_mais_dois);
    var fieldset_mais_tres = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = dias.concat(dias)[new Date().getDay() + 3];
    fieldset_mais_tres.appendChild(legend);
    fieldset_mais_tres.style.paddingBottom = "0px";
    fieldset_mais_tres.style.display = "none";
    this.elemento.appendChild(fieldset_mais_tres);
    var fieldset_mais_quatro = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = dias.concat(dias)[new Date().getDay() + 4];
    fieldset_mais_quatro.appendChild(legend);
    fieldset_mais_quatro.style.paddingBottom = "0px";
    fieldset_mais_quatro.style.display = "none";
    this.elemento.appendChild(fieldset_mais_quatro);
    var fieldset_mais_cinco = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = dias.concat(dias)[new Date().getDay() + 5];
    fieldset_mais_cinco.appendChild(legend);
    fieldset_mais_cinco.style.paddingBottom = "0px";
    fieldset_mais_cinco.style.display = "none";
    this.elemento.appendChild(fieldset_mais_cinco);
    var fieldset_mais_seis = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = dias.concat(dias)[new Date().getDay() + 6];
    fieldset_mais_seis.appendChild(legend);
    fieldset_mais_seis.style.paddingBottom = "0px";
    fieldset_mais_seis.style.display = "none";
    this.elemento.appendChild(fieldset_mais_seis);
    var fieldset_depois = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Depois";
    fieldset_depois.appendChild(legend);
    fieldset_depois.style.paddingBottom = "0px";
    fieldset_depois.style.display = "none";
    this.elemento.appendChild(fieldset_depois);
    for (var i = 0; i < atividades.length; i++) {
        var atividade = atividades[i];
        var data_prevista = Math.floor(atividade.data_prevista / 24 / 60 / 60);
        var data_conclusao = Math.floor(atividade.data_conclusao / 24 / 60 / 60);
        var hoje = Math.floor(new Date() / 24 / 60 / 60 / 1000);
        if (atividade.data_prevista == null) {
            if (atividade.situacao == "criada") {
                fieldset_sem_data.appendChild(atividade.elemento);
                fieldset_sem_data.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_sem_data.appendChild(atividade.elemento);
                    fieldset_sem_data.style.display = "block";
                };
            };
        } else if (data_prevista < hoje) {
            if (atividade.situacao == "criada") {
                fieldset_atrasadas.appendChild(atividade.elemento);
                fieldset_atrasadas.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_atrasadas.appendChild(atividade.elemento);
                    fieldset_atrasadas.style.display = "block";
                };
            };
        } else if (data_prevista == hoje) {
            if (atividade.situacao == "criada") {
                fieldset_hoje.appendChild(atividade.elemento);
                fieldset_hoje.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_hoje.appendChild(atividade.elemento);
                    fieldset_hoje.style.display = "block";
                };
            };
        } else if (data_prevista == hoje + 1) {
            if (atividade.situacao == "criada") {
                fieldset_amanha.appendChild(atividade.elemento);
                fieldset_amanha.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_amanha.appendChild(atividade.elemento);
                    fieldset_amanha.style.display = "block";
                };
            };
        } else if (data_prevista == hoje + 2) {
            if (atividade.situacao == "criada") {
                fieldset_mais_dois.appendChild(atividade.elemento);
                fieldset_mais_dois.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_mais_dois.appendChild(atividade.elemento);
                    fieldset_mais_dois.style.display = "block";
                };
            };
        } else if (data_prevista == hoje + 3) {
            if (atividade.situacao == "criada") {
                fieldset_mais_tres.appendChild(atividade.elemento);
                fieldset_mais_tres.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_mais_tres.appendChild(atividade.elemento);
                    fieldset_mais_tres.style.display = "block";
                };
            };
        } else if (data_prevista == hoje + 4) {
            if (atividade.situacao == "criada") {
                fieldset_mais_quatro.appendChild(atividade.elemento);
                fieldset_mais_quatro.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_mais_quatro.appendChild(atividade.elemento);
                    fieldset_mais_quatro.style.display = "block";
                };
            };
        } else if (data_prevista == hoje + 5) {
            if (atividade.situacao == "criada") {
                fieldset_mais_cinco.appendChild(atividade.elemento);
                fieldset_mais_cinco.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_mais_cinco.appendChild(atividade.elemento);
                    fieldset_mais_cinco.style.display = "block";
                };
            };
        } else if (data_prevista == hoje + 6) {
            if (atividade.situacao == "criada") {
                fieldset_mais_seis.appendChild(atividade.elemento);
                fieldset_mais_seis.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_mais_seis.appendChild(atividade.elemento);
                    fieldset_mais_seis.style.display = "block";
                };
            };
        } else if (data_prevista > hoje + 6) {
            if (atividade.situacao == "criada") {
                fieldset_depois.appendChild(atividade.elemento);
                fieldset_depois.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_depois.appendChild(atividade.elemento);
                    fieldset_depois.style.display = "block";
                };
            };
        } else {
            if (atividade.situacao == "criada") {
                fieldset_sem_data.appendChild(atividade.elemento);
                fieldset_sem_data.style.display = "block";
            };
            if (atividade.situacao == "concluída") {
                if (data_conclusao == hoje) {
                    fieldset_sem_data.appendChild(atividade.elemento);
                    fieldset_sem_data.style.display = "block";
                };
            };
        };
    };
};
Atividades.prototype = new Pagina();
Atividades.prototype.constructor = Atividades;

var Relatorios = function() {
    Pagina.call(this);
    var button = document.createElement("button");
    button.textContent = "Dados do usuário";
    button.style.marginLeft = "10px";
    button.style.width = "calc(100% - 20px)";
    button.style.marginBottom = "10px";
    button.addEventListener("click", function() {
        window.location = "#DadosDoUsuario";
    });
    this.elemento.appendChild(button);
    var button = document.createElement("button");
    button.textContent = "Atividades eliminadas";
    button.style.marginLeft = "10px";
    button.style.width = "calc(100% - 20px)";
    button.addEventListener("click", function() {
        window.location = "#AtividadesEliminadas";
    });
    this.elemento.appendChild(button);
};
Relatorios.prototype = new Pagina();
Relatorios.prototype.constructor = Relatorios;

var DadosDoUsuario = function() {
    Pagina.call(this);
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Dados do usuário";
    fieldset.appendChild(legend);
    var label = document.createElement("label");
    label.textContent = "Nome:";
    fieldset.appendChild(label);
    var input = document.createElement("input");
    input.type = "text";
    input.style.display = "block";
    input.value = usuario.nome;
    input.addEventListener("keyup", function(evento) {
        if (evento.key == "Enter") {
            usuario.nome = input.value;
            localStorage.setItem("usuário", JSON.stringify(usuario));
            atualizar_nome();
            a.textContent = usuario.nome;
            if (usuario.nome != "") {
                fieldset.replaceChild(a, input);
            };
        };
    });
    var a = document.createElement("a");
    a.textContent = usuario.nome;
    a.style.display = "block";
    a.style.cursor = "pointer";
    a.addEventListener("click", function() {
        fieldset.replaceChild(input, a);
        input.select();
    });
    if (usuario.nome == "") {
        fieldset.appendChild(input);
    } else {
        fieldset.appendChild(a);
    };
    var label = document.createElement("label");
    label.textContent = "Chave:";
    fieldset.appendChild(label);
    var textarea = document.createElement("textarea");
    textarea.textContent = usuario.chave;
    textarea.style.width = "100%";
    textarea.style.height = "400px";
    textarea.disabled = true;
    fieldset.appendChild(textarea);
    this.elemento.appendChild(fieldset);
};
DadosDoUsuario.prototype = new Pagina();
DadosDoUsuario.prototype.constructor = DadosDoUsuario;

var AtividadesEliminadas = function() {
    Pagina.call(this);
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Atividades eliminadas";
    fieldset.appendChild(legend);
    for (var i = 0; i < atividades.length; i++) {
        var atividade = atividades[i];
        if (atividade.situacao == "eliminada"){
            var div = document.createElement("div");
            div.style.borderStyle = "solid";
            div.style.borderWidth = "1px";
            div.style.borderColor = "#8A0707";
            div.style.borderRadius = "5px";
            div.style.marginBottom = "10px";
            var p = document.createElement("p");
            p.textContent = atividade.descricao;
            div.appendChild(p);
            var button = document.createElement("button");
            button.textContent = "Restaurar";
            button.addEventListener("click", function(atividade) {
                atividade.situacao = "criada";
                window.location = "#Atividades";
            }.bind(null, atividade));
            div.appendChild(button);
            fieldset.appendChild(div);
        };
    };
    this.elemento.appendChild(fieldset);
};
AtividadesEliminadas.prototype = new Pagina();
AtividadesEliminadas.prototype.constructor = AtividadesEliminadas;

var NovaAtividade = function() {
    Pagina.call(this);
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Dados da atividade";
    fieldset.appendChild(legend);
    var label = document.createElement("label");
    label.textContent = "Descrição:";
    fieldset.appendChild(label);
    var input_descricao = document.createElement("input");
    input_descricao.id = "descricao";
    input_descricao.type = "text";
    input_descricao.style.width = "100%";
    fieldset.appendChild(input_descricao);
    var label = document.createElement("label");
    label.textContent = "Data prevista:";
    fieldset.appendChild(label);
    var input_data = document.createElement("input");
    input_data.id = "data";
    input_data.type = "date";
    input_data.style.display = "block";
    fieldset.appendChild(input_data);
    this.elemento.appendChild(fieldset);
    var button = document.createElement("button");
    button.textContent = "Criar";
    button.addEventListener("click", function() {
        var data = null;
        if (input_data.value != "") {
            data = Math.floor(new Date(input_data.value) / 1000);
        };
        atividades.push(new Atividade(input_descricao.value, "criada", null, data));
        localStorage.setItem("atividades", JSON.stringify(atividades));
        window.location = "#Atividades";
    });
    this.elemento.appendChild(button);
};
NovaAtividade.prototype = new Pagina();
NovaAtividade.prototype.constructor = NovaAtividade;

var EditarAtividade = function(i) {
    NovaAtividade.call(this);
    var input_descricao = this.elemento.querySelector("input#descricao");
    input_descricao.value = atividades[i].descricao;
    var data = new Date(atividades[i].data_prevista * 1000);
    var ano = data.getUTCFullYear();
    var mes = data.getUTCMonth() + 1;
    if (mes < 10) {
        mes = "0" + mes;
    };
    var dia = data.getUTCDate();
    if (dia < 10) {
        dia = "0" + dia;
    };
    var input_data = this.elemento.querySelector("input#data");
    input_data.value = [ano, mes, dia].join("-");
    var button_criar = this.elemento.querySelector("button");
    var button_ok = document.createElement("button");
    button_ok.textContent = "Ok";
    button_ok.addEventListener("click", function() {
        atividades[i].descricao = input_descricao.value;
        if (input_data.value == "") {
            atividades[i].data_prevista = null;
        } else {
            atividades[i].data_prevista = Math.floor(new Date(input_data.value) / 1000);
        };
        localStorage.setItem("atividades", JSON.stringify(atividades));
        window.location = "#Atividades";
    });
    this.elemento.replaceChild(button_ok, button_criar);
    var button = document.querySelector("button");
    button.textContent = "Eliminar";
    button.addEventListener("click", function() {
        atividades[i].situacao = "eliminada";
        localStorage.setItem("atividades", JSON.stringify(atividades));
        window.location = "#Atividades";
    });
    this.elemento.appendChild(button);
};
EditarAtividade.prototype = new NovaAtividade();
EditarAtividade.prototype.constructor = EditarAtividade;
