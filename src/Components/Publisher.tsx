import React, {useState} from 'react'

interface PublisherProps {
    topicName:String,
    publisherId:String
}
export default function Publisher(props: PublisherProps) {
    const [state, setState] = useState({
        currentInput: ''
    })

    function changeInput(e: any){
        setState({
            ...state,
            currentInput: e.target.value
        });
    }

    function publishMessage(e: any){
        publish().then((_) =>{
            setState({
                currentInput: ''
            });
        });
    }

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "publisherId": `${props.publisherId}`,
            "message": {
                "messageContent": `${state.currentInput}`
            }
        })
    };

    async function publish(){
        await fetch(`http://localhost:8080/publishMessage/${props.topicName}`, requestOptions)
    }

    return (
        <div>
            <form>
                <div className="form-group">
                <label>Message</label>
                <input type="text" className="form-control" id="inputMessage" value={state.currentInput} onChange={e => changeInput(e)} placeholder="Message" />
                </div>
                <br></br>
                <button type="button" className="btn btn-primary" onClick={e => publishMessage(e)}>Publish</button>
            </form>
        </div>
    )
}
