import { parse, isValid } from '../parser';

describe('Parser', () => {
    describe('parse', () => {
        it('should throw ParseError when parser is not implemented', () => {
            expect(() => {
                parse('program Test; begin end.');
            }).toThrow('Parser not implemented yet');
        });
    });

    describe('isValid', () => {
        it('should return false when parser is not implemented', () => {
            expect(isValid('program Test; begin end.')).toBe(false);
        });
    });
}); 