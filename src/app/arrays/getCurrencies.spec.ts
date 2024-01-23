import { getCurrencies } from "./getCurrencies";

describe ('Graeme Smith S00227303', () => {
    it('should contain the USD in the array', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('GBP');
        expect(result).toContain('EUR');
    });
    it('should not contain CAD in the array', () => {
        const result = getCurrencies();
        expect(result).not.toContain('CAD');
    })
});