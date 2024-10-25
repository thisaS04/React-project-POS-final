import ItemType from "./ItemType";

 interface StockType {

    stockId: number; 

    quantity: number; 

    items: ItemType[]; 
    
}
export default StockType;