Projeto pokedex em javascript da DIO

O projeto original sem modificações foi mantido no diretório "projeto_base".

Montei meu próprio projeto conforme as aulas progrediam, com algumas modificações sendo feitas conforme o curso progredia. Dentre as modificações feitas destacam-se:

Algumas mudanças feitas no CSS para melhor responsividade e acessibilidade;
Não utilização do innerHTML para criar os novos elementos HTML, foi utilizado o document.createElement() para criar os novos elementos e classList.add() para mudar as classes;
Paginação da página alterada para poder passar para a próxima pagina e para a anterior. Caso não haja uma próxima página ou uma anterior, o respectivo botão fica desabilitado;

A mudança principal em funcionalidade e adição de informações, como pedido no desafio, é a possibilidade de ver as 2 habilidades padrão de cada pokemon. Para ve-las, basta mover o cursor do mouse sobre um pokémon especifico. Ver as habilidades de um pokémon oculta seus tipos até que o cursos do mouse seja removido do pokemon.