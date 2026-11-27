# Laboratórios

A página principal usa PageBanner e Breadcrumb existentes. Header, Footer, fonte e cores vêm da base do projeto.

## Organização

- `dados.ts`: lista tipada, na ordem do Figma. Nomes e descrições curtas vêm do repositório de referência.
- `LabCard.tsx`: apresentação de um laboratório, com imagens locais e Tailwind.
- `app/pesquisa/laboratorios/page.tsx`: banner, introdução e grade responsiva.

Referências: frame 1:1147 do Figma QXkIu6UYPLS1q8BzGsjmxo e branch laboratorios de PET-Comp-UFMA/petcompnewwebsite.

## Integração dos detalhes

Os detalhes pertencem a outro responsável. O botão Saiba mais está desabilitado e associado a uma explicação acessível. Não há rotas fictícias, modal provisório nem cópia do conteúdo detalhado.

Ao integrar, manter o identificador de cada laboratório e conectar a ação ao componente acordado pela equipe.

## Decisões visuais

A grade preserva a ordem, os logos, as faixas ilustradas e os cantos arredondados do protótipo. As imagens foram exportadas do Figma; suas cores fazem parte dos assets. A interface usa somente cores e fonte do tema. O texto escuro sobre o verde e o botão verde-escuro com texto claro priorizam contraste. Textos de preenchimento foram substituídos pelos nomes completos da referência.

Nenhum componente compartilhado, estilo global ou dependência foi alterado.
