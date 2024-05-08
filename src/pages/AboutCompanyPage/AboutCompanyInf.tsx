import Awards from "../../components/AboutCompany/Awards/Awards";
import Guaranty from "../../components/AboutCompany/Guaranty/Guaranty";
import History from "../../components/AboutCompany/History/History";

type ComponentType = React.FC<any>;

export interface IAboutCompanyInf {
    component: ComponentType;
    topic: string;
    to: string;
}

export const aboutCompanyInf = {
    history: { component: History, topic: 'история компании', enTopic: 'history of the company', to: 'history' },
    awards: { component: Awards, topic: 'награды', enTopic: 'awards', to: 'awards' },
    guaranty: { component: Guaranty, topic: 'гарантия качества', enTopic: 'quality guarantee', to: 'guaranty' }
};