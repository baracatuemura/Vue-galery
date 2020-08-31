# Teste Zap

## As regras de negócio atuais são as seguintes:
Ele apenas é elegível pro portal ZAP:
- Quando for aluguel e no mínimo o valor for de R$ 3.500,00.
- Quando for venda e no mínimo o valor for de R$ 600.000,00.
Ele apenas é elegível pro portal Viva Real:
- Quando for aluguel e no máximo o valor for de R$ 4.000,00.
- Quando for venda e no máximo o valor for de R$ 700.000,00.


## Opção A: Fazer uma interface de interação (frontend/apps)
Reformule a camada de apresentação e visual do site legado da maneira que preferir, com alguns comportamentos obrigatórios:

Quando se clicar em cima de um imóvel, deve apresentar uma tela de detalhe com as informações dele.
Permitir a possibilidade do usuário navegar entre as fotos do imóvel na listagem e/ou detalhe.
Paginação por 20 elementos.
Interface responsiva (front) / adaptável para telas diferentes (apps).
A lógica (e regras de negócio) nesse caso ficará toda no front/app, então você vai trabalhar com todos dados em memória. O input deve ser acessado via request http (CORS friendly).

Use sua criatividade e aproveite das informações do imóvel para mostrar o card e o detalhe como você entende que seria a melhor forma e também a mais performática.

Você deverá usar como input o source-1.json (~400 registros):

´http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json´

------------
Solução
------------

## Instalação

```
yarn
```

Compiles and hot-reloads for development 
```
yarn server
```

Compiles and minifies for production
```
 yarn build
```
------------
descritivo
------------

Utilizei o Framework Vue.js com algumas dependencias para agilizar a produção como vue-router, bootstrap-vue,  vue-slick-carouse.

Pacurei criar links diretos para todas as páginas inclusive as páginas de detalhes.

------------
screenshot
------------
### Home
![alt text](https://raw.githubusercontent.com/baracatuemura/testeZap/master/_info/1.png)

### Lista
![alt text](https://raw.githubusercontent.com/baracatuemura/testeZap/master/_info/2.png)

### Pagina de Detalhe 
![alt text](https://raw.githubusercontent.com/baracatuemura/testeZap/master/_info/3.png)
