
import { Mobile } from "./mobile"
import { MobileCollection } from "./mobileCollection"


let mobilIrene : Mobile = new Mobile("tel", "Apple", "iphone pro 12", "soft pink", 1260);
let mobilAmelia : Mobile = new Mobile("mitell", "Nokia", "360", "white", 965);
let mobilAnna : Mobile = new Mobile("s30", "Samnsung", "Galaxy", "dark gray", 532);
let mobilMiguel : Mobile = new Mobile("Huawai 2.0", "Huawei", "M-2", "black", 875);


let myMobiles : Mobile[] = [mobilIrene, mobilAmelia, mobilAnna, mobilMiguel];


let myCollection : MobileCollection = new MobileCollection(myMobiles);


console.log(myCollection.printCollection());
console.log(myCollection.getTotalPrice());