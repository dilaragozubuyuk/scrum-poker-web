import { UtilsService } from 'src/shared/service/utils.service';

describe('Service: Utils =>', () => {
    let utilsService: UtilsService;

    it('should be created', () => {
        utilsService = new UtilsService();
        expect(utilsService).toBeDefined();
    });

    describe('Should return fibonnaci numbers', () => {
        it('\'1\' -> \'2\'', () => {
            expect(utilsService.getFibonacciList(3)).toEqual([1, 2]);
        });
    });

    describe('Should remove spaces from string', () => {
        it('\'utils   Service  \' -> \'utilsService\'', () => {
            expect(utilsService.removeSpaces('utils   Service  ')).toEqual(['utils   Service  ']);
        });
    });

});
