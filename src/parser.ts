import { Program, ParseError } from './types';

/**
 * Parses Pascal source code into an Abstract Syntax Tree (AST)
 * @param source - The Pascal source code to parse
 * @returns The AST representation of the source code
 * @throws {ParseError} If the source code cannot be parsed
 */
export function parse(source: string): Program {
    // TODO: Implement actual parsing logic
    throw new ParseError('Parser not implemented yet');
}

/**
 * Validates if the given source code is valid Pascal
 * @param source - The Pascal source code to validate
 * @returns true if the source code is valid Pascal, false otherwise
 */
export function isValid(source: string): boolean {
    try {
        parse(source);
        return true;
    } catch (error) {
        return false;
    }
} 