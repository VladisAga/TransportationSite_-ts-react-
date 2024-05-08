import Additional from "../../components/TypeOfSevices/Additional/Additional";
import BigTrans from "../../components/TypeOfSevices/BigTrans/BigTrans";
import CompositeTrans from "../../components/TypeOfSevices/CompositeTrans/CompositeTrans";
import DangerTrans from "../../components/TypeOfSevices/DangerTrans/DangerTrans";
import EquipmentTrans from "../../components/TypeOfSevices/EquipmentTrans/EquipmentTrans";
import ExpensiveTrans from "../../components/TypeOfSevices/ExpensiveTrans/ExpensiveTrans";
import GeneralTrans from "../../components/TypeOfSevices/GeneralTrans/GeneralTrans";
import ProjectTrans from "../../components/TypeOfSevices/ProjectTrans/ProjectTrans";

type ComponentType = React.FC<any>;

export interface IServiceType {
    component: ComponentType;
    topic: string;
    to: string;
    enTopic: string;
}

export const serviceType = {
    projectTrans: { component: ProjectTrans, topic: 'проектные перевозки', enTopic: 'project transportation', to: 'projectTrans' },
    bigTrans: { component: BigTrans, topic: 'крупногабаритные перевозки', enTopic: 'heavy-duty transportation', to: 'bigTrans' },
    generalTrans: { component: GeneralTrans, topic: 'перевозка генеральных грузов', enTopic: 'general cargo transportation', to: 'generalTrans' },
    dangerTrans: { component: DangerTrans, topic: 'перевозка опасных грузов', enTopic: 'dangerous cargo transportation', to: 'dangerTrans' },
    expensiveTrans: { component: ExpensiveTrans, topic: 'перевозка дорогостоящих грузов', enTopic: 'expensive cargo transportation', to: 'expensiveTrans' },
    compositeTrans: { component: CompositeTrans, topic: 'перевозка сборных грузов', enTopic: 'composite cargo transportation', to: 'compositeTrans' },
    equipmentTrans: { component: EquipmentTrans, topic: 'доставка оборудования', enTopic: 'equipment transportation', to: 'equipmentTrans' },
    additional: { component: Additional, topic: 'дополнительные услуги', enTopic: 'additional services', to: 'additional' }
};