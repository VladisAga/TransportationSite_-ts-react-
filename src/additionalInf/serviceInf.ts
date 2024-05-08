export interface IServiceInf {
    img: string;
    text: string;
    to: string;
    alt: string;
    enText: string;
};

export const serviceInf = [
    {
        "img": "/images/serviceImg/multiple.png",
        "text": "АВИАПЕРЕВОЗКИ",
        "enText": "AIR CARRIAGE",
        "to": "/transportation/plane",
        "alt": "plane"
    },
    {
        "img": "/images/serviceImg/truck.png",
        "text": "АВТОМОБИЛЬНЫЕ",
        "enText": "LAND CARRIAGE",
        "to": "/transportation/truck",
        "alt": "truck"
    },
    {
        "img": "/images/serviceImg/train.png",
        "text": "ЖЕЛЕЗНОДОРОЖНЫЕ",
        "enText": "RAIL CARRIAGE",
        "to": "/transportation/train",
        "alt": "train"
    },
    {
        "img": "/images/serviceImg/ship.png",
        "text": "МОРСКИЕ",
        "enText": "SEA CARRIAGE",
        "to": "/transportation/ship",
        "alt": "ship"
    },
    {
        "img": "/images/serviceImg/plane.png",
        "text": "МУЛЬТИМОДАЛЬНЫЕ",
        "enText": "MULTIMODAL TRANSPORTATION",
        "to": "/transportation/multiple",
        "alt": "multiple"
    }

];