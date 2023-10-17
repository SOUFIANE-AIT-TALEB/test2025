import { plantList } from "../datas/plantList";
const ShoppingList = () => {
  const categories = plantList.reduce((arr, plant)=>
  arr.includes(plant.category)?arr : arr.concat(plant.category), []);
    return(
        <div>
          <ul>
            {categories.map(cat =><li>{cat}</li>)}
          </ul>
          <ul>
           {plantList.map((plant) => 
           <li key={plant.id}>{plant.name}
            {plant.isBestSale && <span>😁</span>}
           </li>)} 
        </ul>
        </div>
    );     
}
export default ShoppingList;