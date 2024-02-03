export interface simplifiedProduct {
    _id:string;
    name:string;
    slug:string;
    price:number;
    categoryName:string;
    imageUrl:string;
}

export interface fullProduct {
    _id:string;
    name:string;
    description:string;
    slug:string;
    price:number;
    categoryName:string;
    images:any;
}