import { useEffect, useState } from "react"

export default function Question() {
    const [question, setQuestion] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:3000/api/question/123')
        .then(resp => resp.json())
        .then(json => setQuestion(json))
    },[]);

    function renderAnswers(){
        if(question) {
            return question.answers.map((resp,i) => {
                return <li key={i}>{resp}</li>
            })
        }
        return false
    }

    return (
        <div>
            <h1>Question</h1>
            <div>
                <span>{question?.id} - {question?.utterance}</span>
                <ul>
                    {renderAnswers()}
                </ul>
            </div>
            
        </div>
    )
}