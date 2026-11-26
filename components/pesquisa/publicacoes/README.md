# Publicações — prévia visual

## Escopo e padrões

- Alterações limitadas à rota e aos componentes de Publicações.
- PageBanner e Breadcrumb reutilizados da equipe, sem modificar seus arquivos.
- Fonte herdada do layout global, sem carregar Poppins novamente.
- Tailwind nos elementos; cores provenientes dos tokens de globals.css.
- Ícones locais em SVG inline usam currentColor; divisórias usam bordas Tailwind.
- Estilo das ações do card centralizado em uma constante local.
- Sem CSS próprio, dependências novas ou alterações nas configurações.
- Medidas específicas preservadas para a composição do protótipo; conteúdo empilhado em telas estreitas.
- Estilos de foco nos controles locais não afetam o banner compartilhado.

## Dados e comportamento

Três publicações fictícias, sem integração com API nesta etapa. PublicacoesLista recebe a lista por props; PublicacaoCard recebe uma publicação. O total reflete os resultados filtrados.

A barra superior mantém Todos, ABI, Ciências da Computação e Inteligência Artificial. A lateral deriva opções e contagens dos dados recebidos. Busca, curso, tipo, área e intervalo de anos combinam-se; seleções laterais são aplicadas pelo botão Aplicar Filtros.

Cursos sem resultados exibem a mensagem de estado vazio. Anos inválidos exibem erro acessível. Links e PDFs ausentes ficam indisponíveis. Não há controle de ordenação nesta etapa.

## Integração posterior

Substituir os exemplos por um adaptador quando o contrato da API for definido. O provedor ainda precisa ser confirmado.

## Conferência antes da integração

Executar lint, TypeScript e build. Conferir a página em desktop e celular, navegação por teclado, busca, filtros, intervalo inválido e estado vazio. Falhas fora de Publicações devem ser comunicadas ao responsável, sem alterar outras páginas.
