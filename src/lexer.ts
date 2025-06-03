export interface Token {
    type: TokenType;
    value: string;
    location: {
        line: number;
        column: number;
        offset: number;
    };
}

export enum TokenType {
    // Keywords
    PROGRAM = 'PROGRAM',
    BEGIN = 'BEGIN',
    END = 'END',
    VAR = 'VAR',
    PROCEDURE = 'PROCEDURE',
    FUNCTION = 'FUNCTION',
    IF = 'IF',
    THEN = 'THEN',
    ELSE = 'ELSE',
    WHILE = 'WHILE',
    DO = 'DO',
    FOR = 'FOR',
    TO = 'TO',
    DOWNTO = 'DOWNTO',

    // Data types
    INTEGER = 'INTEGER',
    REAL = 'REAL',
    STRING = 'STRING',
    BOOLEAN = 'BOOLEAN',

    // Literals
    NUMBER = 'NUMBER',
    STRING_LITERAL = 'STRING_LITERAL',
    TRUE = 'TRUE',
    FALSE = 'FALSE',

    // Identifiers and symbols
    IDENTIFIER = 'IDENTIFIER',
    SEMICOLON = 'SEMICOLON',
    COLON = 'COLON',
    COMMA = 'COMMA',
    DOT = 'DOT',
    ASSIGN = 'ASSIGN',
    LPAREN = 'LPAREN',
    RPAREN = 'RPAREN',

    // Operators
    PLUS = 'PLUS',
    MINUS = 'MINUS',
    MULTIPLY = 'MULTIPLY',
    DIVIDE = 'DIVIDE',
    EQUALS = 'EQUALS',
    NOT_EQUALS = 'NOT_EQUALS',
    LESS_THAN = 'LESS_THAN',
    GREATER_THAN = 'GREATER_THAN',
    LESS_EQUALS = 'LESS_EQUALS',
    GREATER_EQUALS = 'GREATER_EQUALS',

    // Special
    EOF = 'EOF'
}

const KEYWORDS: { [key: string]: TokenType } = {
    'program': TokenType.PROGRAM,
    'begin': TokenType.BEGIN,
    'end': TokenType.END,
    'var': TokenType.VAR,
    'procedure': TokenType.PROCEDURE,
    'function': TokenType.FUNCTION,
    'if': TokenType.IF,
    'then': TokenType.THEN,
    'else': TokenType.ELSE,
    'while': TokenType.WHILE,
    'do': TokenType.DO,
    'for': TokenType.FOR,
    'to': TokenType.TO,
    'downto': TokenType.DOWNTO,
    'integer': TokenType.INTEGER,
    'real': TokenType.REAL,
    'string': TokenType.STRING,
    'boolean': TokenType.BOOLEAN,
    'true': TokenType.TRUE,
    'false': TokenType.FALSE
};

