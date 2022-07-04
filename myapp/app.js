const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!') // 서버 접근 시 출력
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) // 서버 실행 시 출력
})
