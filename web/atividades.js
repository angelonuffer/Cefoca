var Atividade = function(descricao, situacao, data_conclusao, data_prevista) {
    this.situacao = situacao;
    this.data_conclusao = data_conclusao;
    this.data_prevista = data_prevista;
    this.elemento = document.createElement("div");
    this.elemento.style.borderStyle = "solid";
    this.elemento.style.borderWidth = "1px";
    this.elemento.style.borderColor = "#8A0707";
    this.elemento.style.borderRadius = "5px";
    this.elemento.style.marginBottom = "10px";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    this.elemento.appendChild(checkbox);
    var a = document.createElement("a");
    a.textContent = descricao;
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            a.style.textDecoration = "line-through";
            this.situacao = "concluída";
            this.data_conclusao = Math.floor(new Date() / 1000);
            localStorage.setItem("atividades", JSON.stringify(atividades));
        } else {
            a.style.textDecoration = "";
            this.situacao = "criada";
            this.data_conclusao = null;
            localStorage.setItem("atividades", JSON.stringify(atividades));
        };
    }.bind(this));
    Object.defineProperty(this, "descricao", {
        get: function() {
            return a.textContent;
        },
        set: function(novo_valor) {
            a.textContent = novo_valor;
        },
    });
    if (this.situacao == "concluída") {
        a.style.textDecoration = "line-through";
        checkbox.checked = true;
    };
    a.style.cursor = "pointer";
    a.addEventListener("click", function() {
        for (var i = 0; i < atividades.length; i++) {
            if (atividades[i] == this) {
                window.location = "#EditarAtividade-" + i;
                break;
            };
        };
    }.bind(this));
    this.elemento.appendChild(a);
};
Atividade.prototype.toJSON = function() {
    return {
        situacao: this.situacao,
        descricao: this.descricao,
        data_conclusao: this.data_conclusao,
        data_prevista: this.data_prevista,
    };
};
