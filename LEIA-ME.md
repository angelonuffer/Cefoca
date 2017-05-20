# Céfoca 1.0.0

Céfoca é um app de organização de atividades diárias.

## Construindo o HTML

O jogo utiliza HTML e roda a partir de um único arquivo. Este arquivo é
gerado a partir do código fonte presente no diretório "web". Antes de gerar
o .html, verifique se você possui as dependências a seguir:

    - [HAML](http://haml.info/)
    - [jsrsasign](https://kjur.github.io/jsrsasign/)

O arquivo jsrsasign.min.js deve ser colocado no diretório "web". Ele pode ser
instalado a partir do comando:

    $ curl https://cdnjs.cloudflare.com/ajax/libs/jsrsasign/7.1.5/jsrsasign.min.js > jsrsasign.min.js

Após isso, execute o comando abaixo a partir do diretório "web":

    $ haml céfoca.haml > céfoca.html

Agora você pode abrir o arquivo "céfoca.html" a partir de seu navegador e
começar a usar.

## Compatibilidade

O app foi desenvolvido e testado manualmente através do navegador Mozilla
Firefox 53.0, mas deve funcionar em qualquer navegador moderno.

## Licença

[CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR)
