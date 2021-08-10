const express = require("express");
const app = express();
const port = 3000;
const {
    query_command
} = require("./utilities/query_command")
const mysql = require('mysql');
const bodyparser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyparser.json());
const cors = require('cors');
app.use(
    cors(),
    bodyparser.json(),
    bodyparser.urlencoded({
        extended: true
    })
);

app.post('/insertperson', async(req, res) => {
    const {
        body
    } = req;
    var insertperson = await query_command(`INSERT INTO persondata(name,lastname,email,age,sex)VALUES('${body.NAME}','${body.LASTNAME}','${body.EMAIL}','${body.AGE}','${body.SEX}')`)
    res.send(insertperson)
});

app.post('/selectperson', async(req, res) => {
    const {
        body
    } = req;
    // console.log(body);
    var selectperson = await query_command(`SELECT CONCAT(persondata.name," ",persondata.lastname) AS FULLNAME,ID,persondata.email,persondata.age,persondata.sex,persondata.name,persondata.lastname FROM persondata`)
    res.send(selectperson)
});

app.post('/deleteperson', async(req, res) => {
    const {
        body
    } = req;
    console.log(body);
    var deleteperson = await query_command(`DELETE FROM persondata WHERE ID  = ${body.ID}`)
    res.send(deleteperson)
    console.log(deleteperson);
});

app.post('/updataperson', async(req, res) => {
    const {
        body
    } = req;
    var updataperson = await query_command(`UPDATE persondata SET name ='${body.NAME}',lastname ='${body.LASTNAME}',email = '${body.EMAIL}',sex = '${body.SEX}',age = '${body.AGE}' WHERE ID ='${body.ID}'; `)
    res.send(updataperson)
    console.log(updataperson);
});

app.listen(port);