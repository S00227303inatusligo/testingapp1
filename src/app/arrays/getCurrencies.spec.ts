import { getCurrencies } from "./getCurrencies";

describe ('getCurrencies', () => {
    it('should contain the USD in the array', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
    });
    it('should contain the GBP in the array', () => {
        const result = getCurrencies();
        expect(result).toContain('GBP');
    });
    it('should contain the EUR in the array', () => {
        const result = getCurrencies();
        expect(result).toContain('EUR');
    });
    it('should not contain CAD in the array', () => {
        const result = getCurrencies();
        expect(result).not.toContain('CAD');
    })
});