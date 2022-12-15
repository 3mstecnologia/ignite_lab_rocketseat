import { Content } from './content';
import { Notification } from './notifications';


describe('Notification ', () => {
    test('Deve criar um conteudo informando o createdAt)', () => {
        const notification = new Notification({
            content: new Content('Voce recebeu uma nova mensagem'),
            recipientId: '123',
            category: 'message',
            createdAt: new Date()

        });

        expect(notification).toBeTruthy();
    });
    test('Deve criar um conteudo NAO informando o createdAt)', () => {
        const notification = new Notification({
            content: new Content('Voce recebeu uma nova mensagem'),
            recipientId: '123',
            category: 'message',


        });

        expect(notification).toBeTruthy();
    });
    test('Nao deve conseguir criar uma noificacao com conteudo menor que 5 caracteresa)', () => {
        //const notification = new Notification({
        //    content: new Content('Voce'),
        //    recipientId: '123',
        //    category: 'message',
        //
        //
        //});
        //
        //expect(notification).toThrow();
        expect(() => {
            new Notification({
                content: new Content('Voce'),
                recipientId: '123',
                category: 'message',
            });
        }).toThrow();
    });


})




