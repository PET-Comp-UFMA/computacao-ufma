# Publicações — prévia visual

Referência: https://www.figma.com/design/QXkIu6UYPLS1q8BzGsjmxo?node-id=1-865

## Escopo aprovado

Reproduzir o conteúdo da página de Publicações usando exemplos fictícios. Sem API nesta etapa. Header e Footer pertencem à base compartilhada e não são duplicados aqui. O conteúdo começa no banner (y=96 no frame original).

## Plano de implementação

- [x] Criar dados tipados, banner e card reutilizável com URLs opcionais.
- [x] Compor barra por curso, filtros e lista responsiva, sem altura fixa para os resultados.
- [x] Validar no navegador em 1440px e em tela estreita; executar lint e build.

## Decisões

- Next.js App Router, React, TypeScript e Tailwind 4 existentes; nenhuma dependência nova.
- Classes utilitárias para estrutura e CSS com classes prefixadas `publicacoes-` para geometria específica do frame, sem alterar estilos globais.
- Cores existentes vêm de `app/globals.css`. Tokens adicionais do frame ficam restritos à página, até padronização pela equipe: ação #53ceb9, texto #000, borda #a1a1a1 e sobreposição #06234b / 60%.
- Poppins 200/300, usados no Figma e ausentes no layout global, são carregados somente nesta página junto dos pesos 400/500/600.
- Campos e seleções permitem validar estados visuais. Aplicar filtros opera apenas sobre os exemplos locais, sem persistência nem chamadas remotas. Opções e contagens de tipo, curso e área são derivadas das publicações recebidas; categorias sem publicação não são exibidas.
- A barra superior de cursos é fixa: Todos, ABI, Ciências da Computação e Inteligência Artificial. Um curso sem publicações exibe o estado vazio; somente a lateral adapta suas opções e contagens aos dados.
- Links de publicação e PDF ausentes geram botões indisponíveis, com explicação acessível. Não se inventa conteúdo, destino, arquivo ou modal.
- Ordenação permanece como o rótulo do Figma: as opções não estão definidas e não serão inventadas nesta etapa.
- Mobile usa empilhamento; não há frame mobile fornecido. Desktop é a referência de fidelidade.

## Integração posterior

`PublicacoesLista` recebe `publicacoes` e calcula o total pelo tamanho dessa lista; `PublicacaoCard` recebe uma `Publicacao`. Substituir os dados de demonstração por um adaptador da API quando seu contrato for definido, incluindo URLs reais e contagens. O provedor ainda não foi verificado.

## Verificação

Conferir foto/recorte, títulos e quebras, filtros, espaçamento, rolagem normal, texto longo, campos por teclado, estado vazio e URLs ausentes. A comparação visual exclui cabeçalho e rodapé compartilhados ainda não implementados.

A regra Turbopack `*.css -> *.css` existente esvazia o mapeamento de CSS Modules; a página usa classes prefixadas para isolar seus estilos sem alterar next.config.ts.

Validação em 25/11/2026: ESLint e TypeScript sem erros. Navegador Edge/Playwright: 320, 390, 768, 1024 e 1440px sem overflow horizontal; busca, recuperação do estado vazio, ano, intervalo inválido, teclado e título longo verificados. Assets locais carregados. Build completo compila e verifica os tipos, mas falha ao pré-renderizar `/cursos/[curso]` por acesso a `params` fora de Suspense com Cache Components; rota fora deste escopo, não alterada.

As quebras de linha nos textos demonstrativos preservam a composição do frame em desktop; telas estreitas usam quebra natural. Tipos e cursos atribuídos aos exemplos são fictícios, mas suas opções e contagens são calculadas a partir da lista. A barra e a lateral combinam filtros na demonstração; a regra definitiva depende do contrato da API.
