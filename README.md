# Aletheia

> ⚠️ Work in progress — Nothing is published yet. Use at your own risk.  
> 📝 This README is temporary and subject to change.

Aletheia is a **lightweight prompt management and testing platform** built with React + Vite frontend and Bun + ElysiaJS backend. Originally conceived as a simple yet powerful alternative to complex prompt engineering tools, Aletheia focuses on core prompt workflows with automated agents as helpful utilities for enhanced productivity and evaluation tracking.

---

## Origin & Philosophy

- **Origin**: Built from the ground up to streamline prompt engineering workflows and testing.
- **Key architectural principles**:
  - **Prompt-First Design**: Core focus on prompt creation, versioning, and testing workflows.
  - **Lightweight & Fast**: Bun + ElysiaJS backend for ultra-fast API responses.
  - **Simple Setup**: SQLite for easy development, scalable to PostgreSQL for production.
  - **Automated Helpers**: AI agents as utilities for enhanced productivity and automation.

---

## Features

- **Prompt Management**: Create, edit, version, and organize prompts with full CRUD operations.
- **Interactive Playground**: Test prompts with different inputs in real-time through a reactive UI.
- **Automated Agents**: Helpful utilities for RAG, content generation, notifications, and workflow automation.
- **Evaluation & Logging**: Track performance metrics and interaction logs for continuous improvement.
- **Developer-Friendly**: Clean API design with full TypeScript support and minimal setup.

---

## Tech Stack

- **Frontend**: React + Vite for blazing-fast development and build times
- **Backend**: Bun + ElysiaJS for ultra-lightweight, high-performance API
- **Database**: SQLite + Prisma (easily scalable to PostgreSQL)
- **TypeScript**: Full type safety across the entire stack

---

## Installation

> Currently not published to NPM. Clone the repo and use locally:

```bash
git clone https://github.com/Leopc1977/Aletheia.git
cd Aletheia
bun install
```

---

## Quick Start 

```bash
# Start the backend
cd backend
bun run dev

# Start the frontend (in another terminal)
cd frontend
bun run dev
```

Navigate to `http://localhost:5173` to access the Aletheia interface.

---

## Project Structure

```
Aletheia/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
├── backend/           # Bun + ElysiaJS
│   ├── server.ts
│   ├── routes/
│   │   ├── prompts.ts
│   │   └── agents.ts
│   └── services/
│       └── agentLogic.ts
└── prisma/           # Database + ORM
    ├── schema.prisma
    └── migrations/
```

---

## Examples

- **Prompt Playground**: Interactive testing environment for prompt optimization and iteration
- **Helper Agents**: Automated utilities for content processing and workflow enhancement
- **Evaluation Dashboard**: Performance tracking and analytics for prompt effectiveness
- **API Integration**: Easy integration with existing applications through clean REST endpoints

---

## Contributing

Pull requests are welcome! Feel free to open issues for bugs, feature requests, or questions. We especially welcome contributions for:

- New prompt testing and evaluation features
- Additional helper agents and automation utilities
- UI/UX improvements for the playground experience
- Performance optimizations and developer experience enhancements

---

## Authors

- **Leopc1977* – *Initial work* – [GitHub](https://github.com/Leopc1977) – [Discord](https://discordapp.com/users/399631094514843669)

---

## Acknowledgments

- Inspired by the growing need for better prompt engineering tools
- Thanks to the Bun and ElysiaJS communities for creating such performant tools
- Special appreciation for the AI development community's feedback and contributions

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details