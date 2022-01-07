const exportUserToExcl = require('./export');

const users = [
    {
        id: 0,
        name: "rohan",
        age: 19
    },
    {
        id: 1,
        name: "jay",
        age: 20
    }
];

const workSheetColumnName = [
    "Id",
    "Name",
    "Age"
]

const workSheetName = 'Users';
const filePath = './outputFile/excel-form-js.xlsx';

exportUserToExcl(users, workSheetColumnName, workSheetName, filePath);
