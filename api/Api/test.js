const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("database.csv");
let csvData = [];
let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
        csvData.push(data);
    })
    .on("end", function () {
        // remove the first line: header
        csvData.shift();

        // create a new connection to the database

        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'test'
        });
        // const connection = mysql.createConnection({
        //     host: "localhost",
        //     user: "root",
        //     password: "123456",
        //     database: "testdb"
        // });

        // open the connection
        connection.connect(error => {
            if (error) {
                console.error(error);
            } else {
                let query =
                    "INSERT INTO `data`(`StudentsName`, `MobileNumber`, `EmailID`, `AcademicQualification`, `Specialization`, `State`, `YearofPassing`) VALUES  ?";
                connection.query(query, [csvData], (error, response) => {
                    console.log(error || response);
                });
            }
        });
    });

stream.pipe(csvStream);