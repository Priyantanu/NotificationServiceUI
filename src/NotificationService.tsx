import './App.css';
import {useState} from 'react';
import ChatCord from './Components/ChatCord';

export default function NotificationService() {
    const [state, setState] = useState({
        currentPage: 'start',
        userNameInput: '',
        channelInput: ''
    })

    function enterChatcord(){
        setState({
            ...state,
            currentPage: 'enteredChatCord'
        });
    }

    function changeUserName(e: any){
        setState({
            ...state,
            userNameInput: e.target.value
        });
    }
    function changeChannel(e: any){
        setState({
            ...state,
            channelInput: e.target.value
        });
    }

    if(state.currentPage === 'start'){
        return (
            <div className="App">
            <header className="App-header">
                <p><h2>Welcome to Chat Discord</h2></p>
                <form>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" id="userNameInput" value={state.userNameInput} onChange={e => changeUserName(e)} placeholder="Enter UserName" />
                </div>
                <div className="form-group">
                    <label>Channel</label>
                    <input type="text" className="form-control" id="channelInput" placeholder="Channel"  value={state.channelInput} onChange={e => changeChannel(e)} />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary" onClick={enterChatcord}>Submit</button>
                </form>
            </header>
          </div>
        )
    }
    if(state.currentPage === 'enteredChatCord'){
        return (
            <div className="App">
                <ChatCord  userName= {state.userNameInput} channelName={state.channelInput}  />
            </div>
        )
    }
}
