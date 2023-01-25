import { getCurrencies } from "./getCurrencies";

describe('get currencies', () => {
    it('should include USD', () => {
        expect(getCurrencies()).toContain('USD');
    });

    it('should include EUR', () => {
        expect(getCurrencies()).toContain('EUR');
    });

    it('should include GBP', () => {
        expect(getCurrencies()).toContain('GBP');
    });

    it('should not include CAD', () => {
        expect(getCurrencies()).not.toContain('CAD');
    });
});

