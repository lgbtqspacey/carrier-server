# Contribua

Obrigado por investir seu tempo contribuindo para o nosso projeto!

Leia nosso [Código de Conduta](./code-of-conduct.md) para manter nossa comunidade acessível e respeitável.

Neste guia, você terá uma visão geral do fluxo de trabalho de contribuição, desde a abertura de um problema, criação de um PR, revisão e mesclagem do PR.

## Guia para novos colaboradores

Para obter uma visão geral do projeto, leia o arquivo [README](https://github.com/lgbtqspacey/carrier-server/blob/main/README.md). Aqui estão alguns recursos para ajudar você a começar com contribuições de código aberto:

- [Encontrando maneiras de contribuir para o código aberto no GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Configurar o Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Fluxo do GitHub](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Colaborando com solicitações de pull](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Começando

### Issues

#### Criar um novo issue

Se você encontrar um problema, [pesquise se um problema já está registrado](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). Se um problema relacionado não existir, você pode abrir um novo problema usando um [formulário de problema](https://github.com/lgbtqspacey/carrier-server/issues).

#### Solucionar um issue

Dê uma olhada em nossos [problemas existentes](https://github.com/lgbtqspacey/carrier-server/issues) para encontrar um que lhe interesse. Você pode restringir a pesquisa usando `labels` como filtros. Veja "[Referência de rótulo](https://docs.github.com/en/contributing/collaborating-on-github-docs/label-reference)" para mais informações. Como regra geral, não atribuímos problemas a ninguém. Se você encontrar um problema para trabalhar, sinta-se à vontade para abrir um PR com uma correção.

### Documentação

Melhorar a documentação é sempre bem-vindo. Se você encontrar algo que não esteja claro ou que esteja faltando, sinta-se à vontade para abrir um problema ou enviar um pull request com suas alterações.

!!! tip "Dica"
    Você pode encontrar os arquivos de origem da documentação no diretório `docs` do repositório.

### Faça alterações

#### Faça alterações na UI

Clique em **Fazer uma contribuição** na parte inferior de qualquer página de documentos para fazer pequenas alterações, como um erro de digitação, correção de frase ou um link quebrado. Isso o levará ao arquivo `.md`, onde você pode fazer suas alterações e [criar uma solicitação de pull](https://github.com/lgbtqspacey/carrier-server/pulls) para uma revisão.

#### Faça alterações localmente

1. Bifurque o repositório.
    - Usando o GitHub Desktop:
    - [Introdução ao GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) o guiará pela configuração do Desktop.
    - Depois que o Desktop estiver configurado, você pode usá-lo para [bifurcar o repositório](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!
    - Usando a linha de comando:
    - [Bifurcar o repositório](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) para que você possa fazer suas alterações sem afetar o projeto original até que esteja pronto para mesclá-los.
2. Instale ou atualize para **Node.js**, na versão especificada no `package.json`.
3. Crie uma branch e comece suas alterações!

### Confirme sua atualização

Confirme as alterações quando estiver satisfeito com elas. Não se esqueça de usar a "[Lista de verificação de autoavaliação](https://docs.github.com/en/contributing/collaborating-on-github-docs/self-review-checklist) para acelerar o processo de avaliação.

### Pull Request

Quando terminar as alterações, crie uma solicitação de pull, também conhecida como PR.

- Preencha o modelo "Pronto para revisão" para que possamos revisar sua PR. Este modelo ajuda os revisores a entender suas alterações, bem como o propósito de sua solicitação de pull.
- Não se esqueça de [vincular PR ao issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) se estiver resolvendo um.
- Habilite a caixa de seleção para [permitir edições do mantenedor](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) para que a branch possa ser atualizada para um merge.
Depois que você enviar sua PR, um membro da equipe do Docs revisará sua proposta. Podemos fazer perguntas ou solicitar informações adicionais.
- Podemos solicitar que sejam feitas alterações antes que um PR possa ser finalizado, usando [alterações sugeridas](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) ou comentários de pull request. Você pode aplicar as alterações sugeridas diretamente pela IU. Você pode fazer quaisquer outras alterações em seu fork e, em seguida, confirmá-las em seu branch.
- Conforme você atualiza seu PR e aplica as alterações, marque cada conversa como [resolvida](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- Se você tiver algum problema de merge, confira este [tutorial do git](https://github.com/skills/resolve-merge-conflicts) para ajudá-lo a resolver conflitos de merge e outros problemas.

### Seu PR foi concluído

Parabéns 🎉🎉

Depois que seu PR for concluído, suas contribuições ficarão publicamente visíveis na [página de colaboradores](https://github.com/lgbtqspacey/carrier-server/graphs/contributors).
