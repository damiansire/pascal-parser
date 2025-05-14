# Pascal Parser

A TypeScript library for parsing Pascal language code.

## Installation

```bash
npm install pascal-parser
```

## Usage

```typescript
import { parse } from 'pascal-parser';

const pascalCode = `
program HelloWorld;
begin
  writeln('Hello, World!');
end.
`;

const ast = parse(pascalCode);
```

## Features

- Parse Pascal source code into an Abstract Syntax Tree (AST)
- TypeScript support with full type definitions
- Comprehensive test coverage
- Well-documented API

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pascal-parser.git
cd pascal-parser
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

- `npm run build` - Build the library
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run docs` - Generate documentation

## Documentation

For detailed API documentation, visit our [documentation site](https://yourusername.github.io/pascal-parser/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 