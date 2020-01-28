require('dotenv').config()

const{
    NODE_ENV, PORT, HOST
} = process.env

console.log(
    NODE_ENV, PORT, HOST
)