/**
 * Created by liumc on 2016/12/18.
 */
// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
var app = require('express')()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server),
    fs = require('fs'),
    buf = new Buffer(1024)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');

});
app.get('/messages',function (req, res) {
    fs.readFile( __dirname + "/" + "mes.txt", 'utf8', function (err, data) {
        console.log( data );
        console.log(res);
        res.json(JSON.parse(data));
    });
});

app.get('/logins',function (req, res) {
    fs.readFile( __dirname + "/" + "userData.txt", 'utf8', function (err, data) {
        if(err){
            return err
        }
        var userData = JSON.parse(data);
        console.log(userData);
        var subData = req.query;
        console.log(subData);
        console.log(userData[0]['lim']);
        if(userData[0][subData.username] == subData.password ){
            res.json({"comfirm":true})
        }else{
            res.json({"comfirm":false})
        }
    });
});

app.get('/register',function (req, res) {
    fs.open('userData.txt', 'r+', function (err, fd) {
        if (err) {
            return console.error(err);
        }
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) {
                console.log(err);
            }
            if (bytes > 0) {
                var data = buf.slice(0, bytes).toString();
            }
            var a = JSON.parse(data);
            // var obj = '{"'+req.query.username+ '":'+'"'+req.query.password + '"' + '}';
            a[0][req.query.username]=req.query.password;
            fs.writeFile('userData.txt', JSON.stringify(a), function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log("数据写入成功！");
                res.send('success');
                fs.close(fd, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("文件关闭成功");
                });
            })
        })
    });
})





app.get('/index.js', function(req, res){
    res.sendFile(__dirname + '/index.js');
});

io.sockets.on('connection', function(socket) {



    socket.on('chat message', function (text) {
        console.log(text);
        // io.sockets.emit('chat message', {
        //     text: text
        // });
        //写入数据
        fs.open('mes.txt', 'r+', function (err, fd) {
            if (err) {
                return console.error(err);
            }
            fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
                if (err) {
                    console.log(err);
                }
                if (bytes > 0) {
                    var data = buf.slice(0, bytes).toString();
                }
                var a = JSON.parse(data);
                a.push({'text':text});
                console.log(a);
                io.sockets.emit('chat message', a);
                fs.writeFile('mes.txt', JSON.stringify(a), function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("数据写入成功！");
                    fs.close(fd, function (err) {
                        if (err) {
                            console.log(err);
                        }
                        console.log("文件关闭成功");
                    });
                })
            })
        });

    });
})

server.listen(3000, function(){
    console.log('listening on *:3000');
});

// fs.open('server/mes.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) {
//             console.log(err);
//         }
//         if (bytes > 0) {
//             var a = buf.slice(0, bytes).toString();
//         }
//         a.push({text: text});
//         io.sockets.emit('chat message', {
//             text: a
//         });
//         fs.writeFile('mes.txt', JSON.stringify(a), function (err) {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log("数据写入成功！");
//             fs.close(fd, function (err) {
//                 if (err) {
//                     console.log(err);
//                 }
//                 console.log("文件关闭成功");
//             });
//         })
//     })
// })


function test() {
    fs.open('server/input.txt', 'r+', function(err, fd) {
        var test ;
        if (err) {
            return console.error(err);
        }
        console.log("先读");
        fs.read(fd, buf1, 0, buf1.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }
            // 仅输出读取的字节
            if(bytes > 0){
                test = buf1.slice(0, bytes).toString();
            }
            var a = JSON.parse(test);
            a.push({'e':5});
            console.log(a);
            fs.writeFile('input.txt', JSON.stringify(a),  function(err) {
                if (err) {
                    return console.error(err);
                }
                console.log("数据写入成功！");
                fs.close(fd, function(err){
                    if (err){
                        console.log(err);
                    }
                    console.log("文件关闭成功");
                });
            });
        });
    });
}