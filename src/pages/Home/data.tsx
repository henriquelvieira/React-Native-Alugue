export interface IData {
    id: string;
    cover: string;
    name: string;
    description: string;
    price: string;
    offer?: string;
    rating?: number;
    images?: IImages[];
  };

interface IImages {
    id: string;
    cover: string;    
};

export const DataNews: IData[] = [
    {
        id: '1',
        cover: require("../../assets/house1.jpg"),
        name: "Casa Floripa",
        description: "Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.",
        price: "R$ 1.204,90",
        offer: "",
        rating: 5,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]
    },
    {
        id: '2',
        cover: require("../../assets/house2.jpg"),
        name: "Casa Floripa",
        description: "Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.",
        price: "R$ 1.500,90",
        offer: "",
        rating: 4,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
    {
        id: '3',
        cover: require("../../assets/house3.jpg"),
        name: "Rancho SP",
        description: "Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.",
        price: "R$ 999,90",
        offer: "",
        rating: 5,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
];

export const DataHouses: IData[] = [
    {
        id: '4',
        cover: require("../../assets/house4.jpg"),
        name: "Casa Floripa",
        description: "Casa para você morar, casa show de bola!",
        price: "R$ 954,60",
        offer: "",
        rating: 4.5,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
    {
        id: '5',
        cover: require("../../assets/house5.jpg"),
        name: "Casa Floripa",
        description: "Casa para você morar, casa show de bola!",
        price: "R$ 954,60",
        offer: "",
        rating: 3,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
    {
        id: '6',
        cover: require("../../assets/house6.jpg"),
        name: "Rancho SP",
        description: "Casa para você morar, casa show de bola!",
        price: "R$ 900,00",
        offer: "",
        rating: 5,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
];

export const DataRecommended: IData[] = [
    {
        id: '7',
        cover: require("../../assets/house1.jpg"),
        name: "Casa Floripa",
        description: "Casa para você morar, casa show de bola!",
        price: "R$ 954,60",
        offer: "25% OFF",
        rating: 4,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
    {
        id: '8',
        cover: require("../../assets/house2.jpg"),
        name: "Casa São Paulo",
        description: "Casa para você morar, casa show de bola!",
        price: "R$ 954,60",
        offer: "15% OFF",
        rating: 5,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
    {
        id: '9',
        cover: require("../../assets/house3.jpg"),
        name: "Casa de Praia",
        description: "Casa para você morar, casa show de bola!",
        price: "R$ 900,00",
        offer: "10% OFF",
        rating: 3.8,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
];

export const DataPopulares: IData[] = [
    {
        id: '7',
        cover: require("../../assets/house1.jpg"),
        name: "Casa Floripa",
        description: "Casa para você morar, casa show de bola!",
        price: "R$ 954,60",
        offer: "25% OFF",
        rating: 4,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
    {
        id: '8',
        cover: require("../../assets/house2.jpg"),
        name: "Casa São Paulo",
        description: "Casa para você morar, casa show de bola!",
        price: "R$ 954,60",
        offer: "15% OFF",
        rating: 5,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
    {
        id: '9',
        cover: require("../../assets/house3.jpg"),
        name: "Casa de Praia",
        description: "Casa para você morar, casa show de bola!",
        price: "R$ 900,00",
        offer: "10% OFF",
        rating: 3.8,
        images: [
            {
                id: '1',
                cover: require("../../assets/house1.jpg"),
            },
            {
                id: '2',
                cover: require("../../assets/house2.jpg"),
            },
            {
                id: '3',
                cover: require("../../assets/house3.jpg"),
            },
        ]        
    },
];