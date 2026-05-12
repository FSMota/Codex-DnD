Este é um projeto colaborativo focado no aprendizado de desenvolvimento full-stack, utilizando **Django** no back-end e **Next.js** no front-end. O objetivo é construir uma ferramenta para mestres e jogadores de RPG gerenciarem coleções de itens e consultarem um bestiário customizado.

## 🚀 Visão Geral do Projeto

O sistema é dividido em duas grandes áreas:
1. **Bestiário:** Um catálogo de criaturas e monstros com atributos essenciais (HP, CR, Tipo).
2. **Inventário:** Um sistema de gerenciamento de itens e equipamentos para personagens.

O foco deste projeto é o aprendizado prático de todas as etapas do desenvolvimento de software: modelagem de banco de dados, criação de APIs REST, consumo de dados no front-end e estilização profissional.

## 🛠️ Tecnologias Utilizadas

### Back-end (The Dungeon Master)
- **Django 5.0+**: Framework principal.
- **Django REST Framework (DRF)**: Para a construção da API.
- **SQLite/PostgreSQL**: Persistência de dados.
- **Scripts de População**: Para gerar dados de teste e importar itens de forma simplificada.

### Front-end (The Adventurer's UI)
- **Next.js 14+**: App Router e Server Components.
- **Tailwind CSS**: Estilização baseada no design "Digital Codex".
- **Lucide React**: Ícones de interface.

## 🛠️ Como Começar

### Pré-requisitos
- Python 3.10+
- Node.js 18+

### Back-end
1. Navegue até a pasta `/backend`.
2. Crie um ambiente virtual: `python -m venv venv`.
3. Instale as dependências: `pip install -r requirements.txt`.
4. Rode as migrações: `python manage.py migrate`.
5. Inicie o servidor: `python manage.py runserver`.

### Front-end
1. Navegue até a pasta `/frontend`.
2. Instale as dependências: `npm install`.
3. Inicie o servidor de desenvolvimento: `npm run dev`.

---
