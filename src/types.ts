/**
 * Represents a node in the Abstract Syntax Tree (AST)
 */
export interface ASTNode {
    type: string;
    location?: SourceLocation;
}

/**
 * Represents a location in the source code
 */
export interface SourceLocation {
    start: Position;
    end: Position;
}

/**
 * Represents a position in the source code
 */
export interface Position {
    line: number;
    column: number;
    offset: number;
}

/**
 * Represents a Pascal program
 */
export interface Program extends ASTNode {
    type: 'Program';
    name: string;
    declarations: Declaration[];
    statements: Statement[];
}

/**
 * Represents a declaration in Pascal
 */
export interface Declaration extends ASTNode {
    type: 'VariableDeclaration' | 'FunctionDeclaration' | 'ProcedureDeclaration';
    name: string;
}

/**
 * Represents a statement in Pascal
 */
export interface Statement extends ASTNode {
    type: 'AssignmentStatement' | 'IfStatement' | 'WhileStatement' | 'ForStatement' | 'CallStatement';
}

/**
 * Error thrown when parsing fails
 */
export class ParseError extends Error {
    constructor(message: string, public location?: SourceLocation) {
        super(message);
        this.name = 'ParseError';
    }
} 