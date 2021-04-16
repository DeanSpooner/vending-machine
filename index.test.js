const exportAll = require('./index.js')

describe('getChange', () => {
    it('returns an array', () => {
        let result = [];
        expect(getChange(1, 1)).toEqual(result);
    });

    it('returns an array', () => {
        let result = [50, 20, 10, 5];
        expect(getChange(215, 300)).toEqual(result);
    });
    it('returns an array', () => {
        let result = [100, 10, 4];
        expect(getChange(486, 600)).toEqual(result);
    });
    it('returns an array', () => {
        let result = [200, 100, 50, 20, 10, 5, 2, 1];
        expect(getChange(12, 400)).toEqual(result);
    });
});