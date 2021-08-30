import React, {useEffect, useState} from 'react'
import Publisher from './Publisher';
import Subscriber from './Subscriber';


interface ChatCordProps {
    userName: string,
    channelName: string
}

export default function ChatCord(props: ChatCordProps) {
    const publisherId:string = props.userName;
    const subscriberId:string = props.userName;
    const topicName:string = props.channelName

    return (
        <div>
                <div className="row">
                <div className="col-sm">
                <Publisher topicName={topicName} publisherId={publisherId}/>
                </div>
                <div className="col-sm">
                <Subscriber topicName={topicName} subscriberId={subscriberId} />
                </div>
                </div>
        </div>
    )
}
