const express = require("express");

app.post('/insetdata', async(req, res) => {
    const {
        body
    } = req;
    var insetdata = await query_command(`INSERT INTO persondata(name,lastname,email,age,sex)VALUES("dd","ddds","eeeeeeeeeee","22","2")`)
    res.send(insetdata)
});