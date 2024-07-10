import { atomFamily } from "recoil";
import { data } from "../../data";

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default : id => {
        for(let i=0; i< data.length; i++){
            if(data[i].id == id){
                return data[i];
            }
        }
    }
})