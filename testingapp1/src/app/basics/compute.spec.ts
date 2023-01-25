import { compute } from "./compute";

describe ('compute', () => {
    it('should return 0 if the input is negative', () => {
        //no arrange in this example
        //...
        //act
        const result = compute(-1);
        //assert
        expect(result).toBe(0);
    });

    it('should return input+1 if the input is positive', () => {
        //no arrange in this example
        //...
        //act
        const result = compute(4);
        //assert
        expect(result).toBe(5);
    });
});