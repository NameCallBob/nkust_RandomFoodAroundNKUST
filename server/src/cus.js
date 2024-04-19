class Random{

    type(way = null){
        let sql = ""
        if (way == "area"){
            sql =  "SELECT * FROM `restaurant` WHERE type = ? AND area = ?  ORDER BY RAND() LIMIT 1"
        }
        else{
            sql =  "SELECT * FROM `restaurant` WHERE type = ? ORDER BY RAND() LIMIT 1"
        }
        return sql


    }
    area(){
        let sql = "SELECT * FROM `restaurant` WHERE area = ? ORDER BY RAND() LIMIT 1"
        return sql
    }
    one(){
        let sql = "SELECT * FROM `restaurant` ORDER BY RAND() LIMIT 1"
        return sql
    }
}


module.exports = Random