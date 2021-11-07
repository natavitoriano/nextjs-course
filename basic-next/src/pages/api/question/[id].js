export default function questao(req, res){
    if(req.method === "GET"){
        const id = req.query.id
        res.status(200).json({
            id,
            utterance: 'What is your favorite color?',
            answers: [
                'White', 'Red', 'Yellow', 'Green'
            ]
        })
    } else {
        res.status(405).send()
    }
}