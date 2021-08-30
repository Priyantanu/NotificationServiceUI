import React,{useEffect, useState} from 'react'


interface SubscriberProps {
    topicName:string,
    subscriberId:string
}

interface Idata{
    messageContent: string;
}

export default function Subscriber(props: SubscriberProps) {
    const [state, setState] = useState({
        subscribeData : []
    });
    const requestOptions = {
        method: 'PUT',
        body: props.subscriberId.toString()
    };

    async function subscribe(){
        const response = await fetch(`http://localhost:8080/getNextMessage/${props.topicName}`, requestOptions)
        const data: Idata = await response.json();
        if(data.messageContent != 'null'){
            const subscribeData: any | never = state.subscribeData;
            subscribeData.push(data.messageContent);
            setState({
                subscribeData: subscribeData,
            })
        };
    }
    
    setInterval(function(){subscribe()},1000);

    return (
        <div>
            subs
            {state.subscribeData.map(item => {
          return <li>{item}</li>;
        })}
        </div>
    )
}
