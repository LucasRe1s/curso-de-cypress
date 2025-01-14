# Curso de Cypress 🚀  

Este repositório documenta minha jornada ao aprender e praticar testes automatizados com Cypress, uma ferramenta poderosa para testes end-to-end em aplicações web.  

## Objetivo do Curso  
O objetivo foi adquirir conhecimentos sobre como utilizar o Cypress para:  
- Criar testes automatizados funcionais e confiáveis.  
- Garantir a qualidade das aplicações web com testes e2e, integração e unitários.  
- Aprender a depurar erros e resolver problemas comuns durante o processo de automação.  

## Conteúdo Aprendido  
Durante o curso, explorei os seguintes tópicos:  
- Introdução ao Cypress e configuração inicial.  
- Estruturação de testes automatizados.  
- Escrita de testes e boas práticas.  
- Simulação de ações do usuário (cliques, digitação, etc.).  
- Utilização de *fixtures* e interceptação de requisições.

## Principais Desafios e Como Resolvi 🛠️  

### Problema 1: Configuração inicial do Cypress  
**Descrição:** Encontrei dificuldades para configurar o Cypress em um projeto existente usando typescript, especialmente para integrar com o ambiente de desenvolvimento.  
**Solução:**  
- Consultei a documentação oficial do Cypress para verificar os requisitos de sistema e configurações iniciais.  
- Ajustei o arquivo de configuração `cypress.config.ts` para se alinhar às particularidades do projeto.  
- Usei a CLI do Cypress para realizar testes básicos e validar a instalação.  

### Problema 2: Erros ao manipular elementos dinâmicos  
**Descrição:** Alguns testes falhavam ao interagir com elementos que demoravam para ser carregados.  
**Solução:**  
- Adicionei comandos como `cy.wait()` e utilizei *assertions* como `should('be.visible')` para garantir que o elemento estivesse disponível antes da interação.  
- Ajustei os *timeouts* globais no arquivo de configuração para lidar melhor com cenários de carregamento lento.  

### Problema 3: Aplicação no ambiente de trabalho 
**Descrição:** O curso foi todo ministrado em JavaScript, mas no ambiente de trabalho precisei configurar testes utilizando TypeScript, o que gerou alguns problemas de configuração.

**Solução:**  
- Consultei a documentação oficial do Cypress para verificar o suporte ao TypeScript.
- Realizei pesquisas em plataformas como Stack Overflow e artigos especializados.
- Ajustei o ambiente de desenvolvimento, configurando corretamente o tsconfig.json e adicionando as definições de tipos necessárias para o Cypress.


## Tecnologias Utilizadas  
- **Cypress**  
- **Typescript**
- **Node.js**  

## Resultados  
Ao final do curso, adquiri confiança para criar e gerenciar testes automatizados em projetos reais. Além disso, consegui aplicar boas práticas de automação para melhorar a cobertura de testes e reduzir falhas em produção.  

---