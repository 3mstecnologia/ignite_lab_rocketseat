import { Content } from "./content";

describe('Notification Content', () => {
    test('Deve criar um conteudo)', () => {
        const content = new Content('Voce recebeu uma nova mensagem');

        expect(content).toBeTruthy();
    });

    test('Nao deve conseguir criar um conteudo com menos de 5 caracteres', () => {
        //const content = new Content('Voce');
        //expect(content).toThrow();

        expect(() => new Content('Voce')).toThrow();
    });

    test('Nao deve conseguir criar um conteudo com mais de 240 caracteres', () => {
        //const content = new Content('Voce');
        //expect(content).toThrow();

        expect(() => new Content('Voce'.repeat(241))).toThrow();
    });

})




