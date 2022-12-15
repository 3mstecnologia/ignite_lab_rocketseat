import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';

import { SendNotification } from "./send-notification";


describe('SendNotification', () => {
    test('Deve enviar uma notificacao', async () => {
        const notificationsRepository = new InMemoryNotificationRepository
        const sendNotification = new SendNotification(notificationsRepository);
        const { notification } = await sendNotification.execute({
            recipientId: '123',
            content: 'Voce recebeu uma nova mensagem',
            category: 'message'
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification)
    });
})

