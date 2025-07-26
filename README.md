# 🏎️ App para venda de Lamborguini (Desafio da DIO)

## 📖 Descrição

Projeto fictício para venda de carros desenvolvido com React Native. O app se comunica com a [API fake de lamborguini](https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json) para obter os dados dos carros. As imagens são obtidas a partir da [rota de assets](https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/1.png) onde cara id corresponde a imagem de um carro da API principal.

O usuário pode navegar entre os carros disponíveis, visualizar as informações principais e a imagem de cada veículo. Esse projeto me ajudou a consolidar e a manipular APIs com React Native, TypeScript e Axios. Além disso, pude experimentar outra forma de organizar meus projetos React.

## 📦 Instalação local

1. Clone este repositório:

```bash
git clone https://github.com/GracilianoOG/dio-native-lambo.git
```

2. Abra o projeto em sua IDE preferida, exemplo no VSCode:

```bash
cd dio-native-lambo/
```

3. Após navegar para dentro do diretório, inicie o VSCode:

```bash
code .
```

4. Instale as dependências:

```bash
npm install
```

5. Rode o projeto com o script (padrão):

```bash
npm run start
```

## 📜 Scripts disponíveis

| Script     | Comando                 | Descrição                             |
| ---------- | ----------------------- | ------------------------------------- |
| `start`    | `expo start`            | Inicia o projeto no modo padrão       |
| `android`  | `expo start --android`  | Inicia o projeto no emulador Android  |
| `ios`      | `expo start --ios`      | Inicia o projeto no simulador iOS     |
| `web`      | `expo start --web`      | Inicia o projeto no navegador web     |

## 🗂️ Estrutura do projeto

```
📁 assets/ -> assets do projeto.
📁 src/
  📁 api/ -> components separados em pastas.
  📁 components/ -> components separados em pastas.
  📁 screens/ -> telas que serão compostas com os componentes.
  📁 constants/ -> arquivos de constantes.
  📄 app.json -> configurações do app.
  📄 App.tsx -> entry point do app (componente principal).
```

Os componentes são carregados a partir do arquivo `index.ts` localizado dentro do diretório de cada componente:

```
📁 components/
  📁 CardView/
    📄 index.tsx -> componente principal
    📄 style.tsx -> arquivo de estilos
    📄 props.ts -> propriedades do componente
    📄 actions.ts -> serviços do componente
```

## 🛠️ Ferramentas e tecnologias

[![Ferramentas](https://skillicons.dev/icons?i=react,ts,nodejs,npm,vscode,bash)](https://skillicons.dev)

- Desenvolvido com `React Native` para criar aplicativos móveis nativos.
- Utiliza `Expo` para facilitar o desenvolvimento e a gestão do projeto.
- Usa `react` para construir a interface do usuário.
- Desenvolvido com `TypeScript` para garantir tipagem forte e maior segurança.
- Ferramentas de desenvolvimento com suporte a tipagens do React.
- Comunicação com a API desenvolvida utilizando `axios`.

## 🔗 Links

- [Digital Innovation One](https://www.dio.me/)
- [React Native Components](https://reactnative.dev/docs/components-and-apis)
- [Expo Docs](https://docs.expo.dev/)

## 🧑🏻‍💻 Autor

| [<img src="https://avatars.githubusercontent.com/u/72778164?s=96&v=4"><br><sub>GracilianoOG</sub>](https://github.com/GracilianoOG) |
| :---------------------------------------------------------------------------------------------------------------------------------: |
|                                       [Linkedin](https://www.linkedin.com/in/gabrielgmbarros)                                       |

## 📝 Licença

O código fonte está sob a licença [MIT](./LICENSE).
