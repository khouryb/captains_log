import Log from './Log';
import { getAllLogs } from "./api";
import { useState, useEffect} from 'react'

export default function Logs() {
    const [logs, setLogs] = useState([])

    useEffect(() => {
        console.log('use effect...')
        getAllLogs()
        .then(results => results.json())
        .then(data => setLogs(data))
    }, [])

    let allLogs = <h3>No logs yet!</h3>

    if(logs.length > 0) {
        allLogs = logs.map((log, index) => {
            return <Log
                    title={log.title}
                    entry={log.entry}
                    comment={log.comment}
                    id={log._id}
                    key={log._id}
                    />
        })
    }


    return(
        <div>

           {allLogs}

        </div>
    )


}