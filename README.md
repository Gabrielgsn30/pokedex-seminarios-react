# 📘 Estrutura do Projeto – Pokédex React

Este documento explica o papel de cada pasta principal do projeto: **components**, **context**, **hooks** e **utils**.  
Ele serve como referência para estudos, manutenção e evolução do código.

---

# 📂 1. Components (`src/components/`)

Contém **todos os componentes visuais da aplicação**. Aqui fica a interface que o usuário vê e interage.

## ⭐ `PokemonsContainer.jsx`
- Responsável por **buscar e renderizar a lista de Pokémon**.
- Usa o hook `usePokemons`.
- Exibe o componente `Loader` enquanto os dados estão sendo carregados.
- Renderiza vários `PokemonCard`.

## ⭐ `PokemonCard.jsx`
- Exibe um card individual contendo:
  - Nome do Pokémon
  - ID
  - Tipos
  - Sprite/Imagem
- Ao clicar, **abre o modal de detalhes** utilizando o context global do modal.

## ⭐ `TypesBar.jsx`
- Barra de filtros que exibe todos os tipos de Pokémon (Fire, Water, Grass etc.).
- Usa o hook `useTypes` para obter os tipos.
- Permite filtrar a listagem clicando em um tipo.

## ⭐ `Loader.jsx`
- Componente visual usado para indicar carregamento.

---

# 📂 1.1 Components › modal (`src/components/modal/`)

Componentes relacionados ao **modal de detalhes do Pokémon**.

## ⭐ `Modal.jsx`
- Estrutura principal do modal.
- Exibe:
  - Imagem grande do Pokémon
  - Nome e ID
  - Tipos
  - Abas de conteúdo (About, Stats, Evolution)
- Usa o context `PokemonModalProvider` para abrir ou fechar o modal.

## ⭐ `IntroModal.jsx`
- Modal inicial exibido antes da Pokédex.
- Pode mostrar informações introdutórias sobre o app.

## ⭐ `TabsContainer.jsx`
- Gerencia a troca de **abas** dentro do modal:
  - About
  - Stats
  - Evolution

## ⭐ `DataRow.jsx`
- Componente interno utilizado para exibir linhas de dados (ex.: “Height: 0.7m”).

---

# 📂 1.2 Components › modal › tabs (`src/components/modal/tabs/`)

Cada arquivo representa uma **aba** dentro do modal.

## ⭐ `About.jsx`
- Exibe informações gerais:
  - Descrição do Pokémon (flavor text)
  - Peso
  - Altura
  - Habilidades
  - Outras características básicas

## ⭐ `Stats.jsx`
- Exibe os status base do Pokémon:
  - HP
  - Attack
  - Defense
  - Special Attack
  - Special Defense
  - Speed

## ⭐ `Evolution.jsx`
- Exibe a **cadeia evolutiva**.
- Usa o hook `useEvolution` para obter e formatar a árvore evolutiva.

---

# 🧩 2. Context (`src/context/`)

Gerencia estados compartilhados entre componentes usando React Context API.

## ⭐ `PokemonModalProvider.jsx`
- Controla o estado global do modal de Pokémon.
- Armazena:
  - Pokémon selecionado (`selectedPokemon`)
  - Função para abrir o modal (`openPokemon`)
  - Função para fechar o modal (`closePokemon`)
- Evita o uso de prop drilling.
- Permite que qualquer componente abra o modal facilmente.

---

# 🔄 3. Hooks (`src/hooks/`)

Custom hooks que encapsulam regras de negócio e lógica de consumo da PokéAPI.

## ⭐ `usePokemons.js`
- Busca a **lista paginada de Pokémon**.
- Aceita filtros (como tipo).
- Retorna:
  - Lista de Pokémon
  - Estado de carregamento
  - Erro
  - Função para carregar mais (caso seja paginação)

## ⭐ `useTypes.js`
- Busca todos os **tipos de Pokémon**.
- Usado na `TypesBar` para montar os botões de filtro.

## ⭐ `useEvolution.js`
- Busca e processa a **cadeia evolutiva** de um Pokémon.
- Retorna a árvore evolutiva pronta para renderização.

### 📂 `__tests__/`
Contém testes unitários dos hooks usando Jest/Vitest.

---

# 🛠 4. Utils (`src/utils/`)

Funções auxiliares independentes de interface.

## ⭐ `api-fetch.js`
- Wrapper padrão para chamadas HTTP.
- Centraliza as requisições para a PokéAPI.
- Facilita manutenção e tratamento de erros.

## ⭐ `pokemon-helper.js`
Funções utilitárias como:
- Extrair ID de URLs da PokéAPI.
- Capitalizar nomes.
- Gerenciar cores por tipo.
- Normalizar dados antes da renderização.
- Ajudar a formatar a cadeia evolutiva.

---

# ✅ Resumo Geral

| Pasta | Conteúdo | Responsabilidade |
|-------|----------|------------------|
| `components` | Componentes visuais | Interface da Pokédex |
| `components/modal` | Modal e subcomponentes | UI do detalhamento |
| `context` | Providers | Estado global (modal) |
| `hooks` | Custom hooks | Lógica de dados (PokéAPI) |
| `utils` | Funções auxiliares | Apoio ao código e formatação |

---

# Aula 02

arquivos adicionados:

useEvolution.js
modal
App.jsx alterado para ter o modal


# slides 
[react](https://docs.google.com/presentation/d/1Hcphk-tYUwtgWwPwMuHb3ogA5e-8AN5rh4FuvCSrPL8/edit?usp=sharing)


# Projetos finais Alunos