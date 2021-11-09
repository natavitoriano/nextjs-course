const method = (req, res) => {
    if(req.method === "GET") {
        res.status(200).json({ nome: "Pedro" })
    } else {
        res.status(200).json({ nome: "Maria" })
    }
    res.status(200).json({
        method: req.method
    })
}

export default method;