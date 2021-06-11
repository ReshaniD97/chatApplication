import{ChatEngine} from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height="100vh"
            projectID="4596be17-f310-4b47-8db4-4300f55bdd92"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
    );

};
export default App;