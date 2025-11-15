import { parsePosition, getRotation } from './gridUtils';

describe('parsePosition', () => {
    it('parses valid input correctly', () => {
        const result = parsePosition('1,2 NORTH');
        expect(result).toEqual({
            parsed: { x: 1, y: 2, direction: 'NORTH' },
            errors: [],
        });
    });

    it('returns errors for missing input', () => {
        const result = parsePosition('');
        expect(result.errors).toContain('Please enter a value in the format: "X,Y Direction". For example: "1,1 North"');
    });

    it('returns errors for incorrect format', () => {
        const result = parsePosition('1,2');
        expect(result.errors).toContain('Please enter a value in the format: "X,Y Direction". For example: "1,1 North"');
    });

    it('returns errors for out-of-range coordinates', () => {
        const result = parsePosition('5,5 NORTH');
        expect(result.errors).toContain('X must be a number within 0 to 4.');
        expect(result.errors).toContain('Y must be a number within 0 to 4.');
    });

    it('returns errors for invalid direction', () => {
        const result = parsePosition('1,2 UP');
        expect(result.errors).toContain('Direction must be one of: North, East, West, or South.');
    });

    it('handles multiple errors gracefully', () => {
        const result = parsePosition('6,-1 INVALID');
        expect(result.errors).toContain('X must be a number within 0 to 4.');
        expect(result.errors).toContain('Y must be a number within 0 to 4.');
        expect(result.errors).toContain('Direction must be one of: North, East, West, or South.');
    });
});

describe('getRotation', () => {
    it('returns 0 for NORTH', () => {
        expect(getRotation('NORTH')).toBe(0);
    });

    it('returns 90 for EAST', () => {
        expect(getRotation('EAST')).toBe(90);
    });

    it('returns 180 for SOUTH', () => {
        expect(getRotation('SOUTH')).toBe(180);
    });

    it('returns 270 for WEST', () => {
        expect(getRotation('WEST')).toBe(270);
    });

    it('returns 0 for invalid direction', () => {
        expect(getRotation('UP')).toBe(0);
        expect(getRotation(null)).toBe(0);
        expect(getRotation(undefined)).toBe(0);
    });
});