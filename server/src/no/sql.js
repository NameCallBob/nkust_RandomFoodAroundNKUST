class conn{
    /**
     * con()
     * ckeck whether the server is connected

    */
    static con(){
        const mysql = require('mysql')
        const db = mysql.createConnection({
            host:"127.0.0.1",
            user:'root',
            password:'',
            database:"kh_food",
            port:3306
        });
        return db
    }

}

class sql extends conn {
        // response(status,message,result = null ){
        //     let string = JSON.stringify(result);
        //     let data = JSON.parse(string)
        //     let r = {
        //         'status' : status,
        //         'message' : message,
        //         'result' : data,
        //     }
        //     console.log(r)
        //     return r
        // }
        select(sqlname){
            conn.con().query(sqlname,function(err,result){
                if (err) {
                    conn.con().end()
                    return err
                }
                else{
                    conn.con().end()
                    return result
                }
            })
        }
        add(sqlname){
            conn.con().query(sqlname,function(err,result){
                if (err) {
                    conn.con().end()
                    return err
                }
                else{
                    conn.con().end()
                    return result
                }
            })
        }
        del(sqlname){
            conn.con().query(sqlname,function(err,result){
                if (err) {
                    conn.con().end()
                    return err
                }
                else{
                    conn.con().end()
                    return result
                }
            })
        }
        upd(sqlname){
            conn.con().query(sqlname,function(err,result){
                if (err) {
                    conn.con().end()
                    return err
                }
                else{
                    conn.con().end()
                    return result
                }
            })
        }
    }

function test() {
    let a = new sql()
    let mes = a.select("SELECT * FROM `restaurant`")
    return(console.log(mes))
}
test()