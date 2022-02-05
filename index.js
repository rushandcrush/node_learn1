const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        nevid: 'чорна велика криса',
        chomki4: 'дворф форт буаяр тебе жде'    
    });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);