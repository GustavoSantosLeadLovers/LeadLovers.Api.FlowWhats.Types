import { IListMessageSequenceNumberRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListMessageSequenceNumberRepository';
import { ICreateConditionalTriggerActionRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/ICreateConditionalTriggerActionRepository';
import { ICreateConditionalTriggerFilterRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/ICreateConditionalTriggerFilterRepository';
import { ICreateConditionalTriggerRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/ICreateConditionalTriggerRepository';
import { ICreateTriggerActionRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/ICreateTriggerActionRepository';
import { ICreateTriggerAnswerRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/ICreateTriggerAnswerRepository';
import { ICreateTriggerRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/ICreateTriggerRepository';
import { IEditConditionalTriggerRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IEditConditionalTriggerRepository';
import { IEditTriggerActionRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IEditTriggerActionRepository';
import { IEditTriggerAnswerRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IEditTriggerAnswerRepository';
import { IEditTriggerRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IEditTriggerRepository';
import { IListConditionalTriggerByIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListConditionalTriggerByIdRepository';
import { IListTriggerActionRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggerActionRepository';
import { IListTriggerActionsByTriggerIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggerActionsByTriggerIdRepository';
import { IListTriggerActionTypeByNameRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggerActionTypeByNameRepository';
import { IListTriggerAnswerByAnswerRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggerAnswerByAnswerRepository';
import { IListTriggerEventIdByNameRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListTriggerEventIdByNameRepository';
import { IRemoveAllConditionalTriggerActionsByTriggerIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IRemoveAllConditionalTriggerActionsByTriggerIdRepository';
import { IRemoveAllConditionalTriggerFiltersByTriggerIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IRemoveAllConditionalTriggerFiltersByTriggerIdRepository';
import { IRemoveTriggerActionRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IRemoveTriggerActionRepository';
import { IExchangeProducer } from '../../../common/providers/QueueProvider/models/IExchangeProducer';
import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class PublishTriggerService {
    private publishTriggerQueueConsumer;
    private publishTriggerExchangeProducer;
    private listTriggerAnswerByAnswerRepository;
    private createTriggerAnswerRepository;
    private editTriggerAnswerRepository;
    private listTriggerEventIdByNameRepository;
    private createTriggerRepository;
    private editTriggerRepository;
    private removeTriggerActionRepository;
    private listTriggerActionRepository;
    private listTriggerActionsByTriggerIdRepository;
    private listTriggerActionTypeByNameRepository;
    private listMessageSequenceNumberRepository;
    private editTriggerActionRepository;
    private createTriggerActionRepository;
    private createConditionalTriggerRepository;
    private createConditionalTriggerFilterRepository;
    private createConditionalTriggerActionRepository;
    private editConditionalTriggerRepository;
    private listConditionalTriggerByIdRepository;
    private removeAllConditionalTriggerActionsByTriggerIdRepository;
    private removeAllConditionalTriggerFiltersByTriggerIdRepository;
    constructor(publishTriggerQueueConsumer: IQueueConsumer, publishTriggerExchangeProducer: IExchangeProducer, listTriggerAnswerByAnswerRepository: IListTriggerAnswerByAnswerRepository, createTriggerAnswerRepository: ICreateTriggerAnswerRepository, editTriggerAnswerRepository: IEditTriggerAnswerRepository, listTriggerEventIdByNameRepository: IListTriggerEventIdByNameRepository, createTriggerRepository: ICreateTriggerRepository, editTriggerRepository: IEditTriggerRepository, removeTriggerActionRepository: IRemoveTriggerActionRepository, listTriggerActionRepository: IListTriggerActionRepository, listTriggerActionsByTriggerIdRepository: IListTriggerActionsByTriggerIdRepository, listTriggerActionTypeByNameRepository: IListTriggerActionTypeByNameRepository, listMessageSequenceNumberRepository: IListMessageSequenceNumberRepository, editTriggerActionRepository: IEditTriggerActionRepository, createTriggerActionRepository: ICreateTriggerActionRepository, createConditionalTriggerRepository: ICreateConditionalTriggerRepository, createConditionalTriggerFilterRepository: ICreateConditionalTriggerFilterRepository, createConditionalTriggerActionRepository: ICreateConditionalTriggerActionRepository, editConditionalTriggerRepository: IEditConditionalTriggerRepository, listConditionalTriggerByIdRepository: IListConditionalTriggerByIdRepository, removeAllConditionalTriggerActionsByTriggerIdRepository: IRemoveAllConditionalTriggerActionsByTriggerIdRepository, removeAllConditionalTriggerFiltersByTriggerIdRepository: IRemoveAllConditionalTriggerFiltersByTriggerIdRepository);
    execute(): void;
    private validateTrigger;
    private getSequenceLeadloversId;
    private getMessageLeadloversId;
    private retryGetSequenceLeadloversId;
    private retryGetMessageLeadloversId;
    private validateActions;
    private insertWhatsAppTriggerAnswer;
    private upsertWhatsAppTrigger;
    private upsertWhatsAppConditionalTrigger;
    private insertConditionalTriggerFilters;
    private insertConditionalTriggerActions;
    private removeInactiveActionsFromDB;
    private createWhatsAppTriggerAction;
    private upsertWhatsAppTriggerAction;
    private upsertWhatsAppTriggerActions;
    private finalizePublication;
}
