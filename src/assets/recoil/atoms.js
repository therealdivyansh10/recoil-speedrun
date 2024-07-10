import { atom, selector, selectorFamily } from "recoil";
import axios from "axios";

// export const networkAtom = atom({ 
//     key: "networkAtom",
//     default: 103
// });

// export const messagingAtom = atom({ 
//     key: "messagingAtom",
//     default: 23
// });

// export const jobsAtom = atom({ 
//     key: "jobsAtom",
//     default: 43
// });

// export const notificationsAtom = atom({ 
//     key: "notificationsAtom",
//     default: 12
// });
 
// export const getSumNotificationsAtom = selector({
//     key: "getSumNotificationsAtom",
//     get: ({ get }) => get(notificationsAtom) + get(jobsAtom) + get(messagingAtom) + get(networkAtom)
// });

export const notifications = atom({
    key: "networkAtom",
    get:  selector({
        key : "networkAtomSelector",
        get: async ({get}) =>  {
            console.log("Async Call");
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
})

 