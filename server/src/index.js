

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const multer = require('multer')
const Random = require('./cus.js')
const Feedback = require('./fb.js')

// module
const db = mysql.createConnection({
    host:"127.0.0.1",
    user:'root',
    password:'',
    database:"kh_food",
    port:3306
})

const app = express()


// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(multer().array())

// routes
app.post("/api/search",(req,res) => {
    const Food = require("./data.js")
    const way1 = req.body.way1
    const way2 = req.body.way2
    const params = req.body.params
    /**
     * way1 -> all , s_type , s_area "顯示的東西"
     * way2 -> star_up , star_down "是否要排序"
     */
    try{
    let sql =new Food().search(way1,way2,params)
    if (sql != "wrong way"){
        console.log(sql)
        db.query(sql,(err,result) => {
            if (err){
                console.log(err)
            }else{
                res.send(result)
            }
        })
    }
    else{
        res.send("wrong way")
    }

    }
    catch(error){
        console.log("出現錯誤搂，如：",error)
    }

})


app.post("/api/add",(req,res) => {
    let Food = require("./data.js")
    let found = 0
    let id = req.body.id
    let area = req.body.area
    let type = req.body.type
    let name = req.body.name
    let address = req.body.address
    let phone = req.body.phone
    let star = req.body.star
    let remark = req.body.remark
    let params = [id,area,type,name,address,phone,star,remark]
    for (let i = 0 ; i < params.length ; i++){
        if (params[i] == "" | params[i] == null){
            found = found + 1 ;
        }
    }
    if (found != 0){
        res.send("參數少給")
    }
    else{
        let sql = new Food().insert(params)
        db.query(sql,params,(err,result) => {
            if (err){
                console.log(err)
                res.send("新增失敗")
            }else{
                res.send("新增成功")
            }
        })
    }



})

app.post("/api/del",(req,res) => {
    let Food = require("./data.js")
    let id = req.body.id
    if (id != ""){
        let sql = new Food().del(id)
        db.query(sql,(err,result) => {
            if (err){
                console.log(err)
                res.send("刪除失敗")
            }else{
                res.send("刪除成功")
            }
        })
        }
    else{
        res.send("未給予參數或參數錯誤")
    }


})

app.post("/api/chge",(req,res) => {

    let Food = require("./data.js")
    let found = 0
    let id = req.body.id
    let area = req.body.area
    let type = req.body.type
    let name = req.body.name
    let address = req.body.address
    let phone = req.body.phone
    let star = req.body.star
    let remark = req.body.remark
    let params = [area,type,name,address,phone,star,remark,id]
    for (let i = 0 ; i < params.length ; i++){
        if (params[i] == "" | params[i] == null){
            found = found + 1 ;
        }
    }
    if (found != 0){
        res.send("參數少給")
    }
    else{
        let sql = new Food().change(params)
        db.query(sql,params,(err,result) => {
            if (err){
                console.log(err)
                res.send("修改失敗，請檢察參數")
            }else{
                res.send("修改成功")
            }
        })
    }
})

app.post("/api/search/random/food",(req,res) => {
    require('./data.js')
    let sql = new Random().one()
    db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.send("隨機生成失敗")
        } else {
          res.send(result);
        }
      });
    })

app.post("/api/search/random/area",(req,res) => {
    require('./data.js')
    let sql = new Random().area()
    let params = req.body.area
    db.query(sql,[params], (err, result) => {
        if (err) {
          console.log(err);
          res.send("隨機生成失敗")
        } else {
          res.send(result);
        }
      });

})

app.post("/api/search/random/type",(req,res)=>{
    require('./data.js')
    let params=[]
    let area = req.body.area
    let food = req.body.food
    let way = req.body.way
    let sql = new Random().type(way)
    if (food != "") {
        params.push(food)
    }
    if (area!="") {
        params.push(area)
    }
    db.query(sql,params, (err, result) => {
        if (err) {
          console.log(err);
          res.send("隨機生成失敗")
        } else {
          res.send(result);
        }
      });

})








app.post("/api/cus/search",(req,res) => {
    let Fb = require("./cus.js")
    let way = req.body.way
    let params = req.body.params

    let sql = new Feedback().search(way,params)

    db.query(sql,params,(err,result)=>{
        if (err){
            res.send("回饋新增失敗")
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

})

app.post("/api/cus/insert",(req,res) => {
    require("./cus.js")
    let sql = new Feedback().insert()
    let gender = req.body.gender
    let year = req.body.year
    let occupation = req.body.occupation
    let satis = req.body.satis
    let a = req.body.a
    let b = req.body.b
    db.query(sql,[gender,year,occupation,satis,a,b],(err,result)=>{
        if (err){
            res.send("回饋新增失敗")
            console.log(err)
        }
        else{
            res.send('回饋新增成功')
        }
    })

})

app.post("/api/cus/delete",(req,res) => {
    let Fb = require("./cus.js")
    let sql = new Feedback().delete()
    let params = req.body.params

    db.query(sql,params,(err,result)=>{
        if (err){
            res.send("回饋刪除失敗")
            console.log(err)
        }
        else{
            res.send('回饋刪除成功')
        }
    })

})

app.post("/api/cus/change",(req,res) => {
    let Fb = require("./cus.js")
    let sql = new Feedback().change()
    let params = req.body.params

    db.query(sql,params,(err,result)=>{
        if (err){
            res.send("回饋修改失敗")
            console.log(err)
        }
        else{
            res.send('回饋修改成功')
        }
    })

})

app.listen(3001,()=>{
    console.log('running on port 3001')
})
