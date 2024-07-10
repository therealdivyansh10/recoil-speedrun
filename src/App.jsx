import { useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import {
  notifications,
  // getSumNotificationsAtom,
  // jobsAtom,
  // messagingAtom,
  // networkAtom,
  // notificationsAtom,
} from "./atoms"; 

function App() {
  // const networkValue = useRecoilValue(networkAtom);
  // const jobs = useRecoilValue(jobsAtom);
  // const [messages, setMessages] = useRecoilState(messagingAtom);
  // const notifications = useRecoilValue(notificationsAtom);

  const [networkCount, setNetworkCount] = useRecoilState(notifications);

  // const getSumNotifications = useRecoilValue(getAsyncNoficationsAtom);

  // const onClickHandle = () => {
  //   setMessages(prev => prev + 1);
  // };

  // const sumNotificationCount = useRecoilValue(getSumNotificationsAtom);
  // console.log(getSumNotifications)

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkCount.network > 99 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      {/* <button onClick={onClickHandle}>Message</button>
      <p>Total Notifications: {sumNotificationCount}</p> */}
    </div>
  );
}

export default App;
