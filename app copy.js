const http = require('http');

const PORT = 5000;

// 서버 생성
http.createServer((req, res) => {

        if (req.url === '/api/users') {
            const users = [{
                    name: "Eunsik",
                    age: 27
                },
                {
                    name: "hosik",
                    age: 25
                },
                {
                    name: "minsik",
                    age: 22
                },
                {
                    name: "gaesik",
                    age: 75
                },
                {
                    name: "goksik",
                    age: 22
                },
            ]
            res.write(JSON.stringify(users))
        } else if (req.url === '/api/todos') {

        } else {
            res.write('<h1>Hello Node JS</h1>')
        }
        res.end();
    })
    .listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    })






















// // __dirname
// // const path = require('path');
// // const url = "http://naver.com/inde.html"
// // console.log(path.join(__dirname, "index.html"));
// const Person = require('./person')

// // 인스턴스화 instantiate
// const person1 = new Person('siksik', 25);
// // greeting

// const person2 = new Person('Park Eun sik', 20)
// console.log(person1, person2);
// person2.greeting();
// // goodbye () person class 만들고
// // console.log(`잘가세요 xxx 님`);

// const fs = require('fs');
// const path = require('path')

// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//     if (err) throw err;
//     console.log('폴더가 생성되었습니다');
// })
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), {}, (err) => {
//     if (err) throw err;
//     console.log('파일이 생성되었습니다.');
// })

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
//     if (err) throw err;
//     console.log('......');
// })

// fs.rename(path.join(__dirname, '/test', 'hello.txt'), (__dirname, '/test', 'node.txt'), (err) => {
//     if (err) throw err;
//     console.log('파일명이 변경되었습니다.!');
// })