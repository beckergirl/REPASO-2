import {Mobile} from "./mobile.js"

// let mobile = new Mobile("Amelia", "Ericsson", "ericoPhone", "white", 8);


export class MobileCollection{

    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles: Mobile[]){

        this.mobiles = mobiles;
        this.totalPrice;
    }

    public setMobiles(mobiles: Mobile[]){

        this.mobiles = mobiles;

        return mobiles;
    }
    public getMobiles(){

        return this.mobiles;
    }
    public setPrice(totalPrice: number){

        return totalPrice;
    }
    public getTotalPrice(){

        return this.totalPrice;
    }

    private totalPriceCalculation(){

        let suma: number = 0;

        for (let i= 0; i < this.mobiles.length; i++){

            suma = suma + this.mobiles[i].getPrice()
        }   
                return suma;

    }
    public printCollection(): string{

        let suma: string = "";

        for (let caracteristicas of this.mobiles){

             suma = suma + caracteristicas;
        } 
                return suma;

    } 

}