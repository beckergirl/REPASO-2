import { myMobiles } from "./mobileTest" 

export class Mobile{

    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(name: string, trademark: string, model: string, color: string, price: number){

        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    public setName(){

        return this.name;
    }
    public getName(){

        return this.name;
    }
    public setTrademark(){

        return this.trademark;
    }
    public getTrademark(){

        return this.trademark;
    }
    public setModel(){

        return this.model;
    }
    public getModel(){

        return this.model;
    }
    public setColor(){

        return this.color;
    }
    public getColor(){

        return this.color;
    }
    public setPrice(){

        return this.price;
    }
    public getPrice(){

        return this.price;
    }
    public printMobiles(mobiles: any[]){

        for(let i = 0; i < myMobiles.length; i++){

            return mobiles.push(myMobiles[i]);

        }
    } 
    public showCharacteristics(){

        let mensaje = "The characteristics of the mobile name are: " + "\n" +
        "Name: " + this.name + "\n" + "Trademark: " + this.trademark + "\n" + "Model: " +
        this.model + "\n" + "Color: " + this.color+ "\n" + "Price: " + this.price;

        return mensaje;
   }

}


/* let telefonoMiCasa: Mobile = new Mobile("nokia5","Nokia","modelo Z","negro", 543); */
/* console.log(telefonoMiCasa); */

