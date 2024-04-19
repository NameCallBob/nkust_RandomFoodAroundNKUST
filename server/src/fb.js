class Feedback{
    insert(){
        let sql = "INSERT INTO `cus_fb` (`id`, `gender`, `age`, `occupation`, `satisfaction`, `store_suggestion`, `feature_suggestion`) VALUES (NULL,?, ?, ?, ?,?,?);"
        return sql
    }
    // select(way = null ,params = null){
    //     if (way == "all"){
    //         let sql = "SELECT * FROM `fb`"
    //     }
    //     else if (way == "res_id"){
    //         let sql = "SELECT * FROM `fb` WHERE `res_id` =" + params
    //     }
    //     else {
    //         let sql = "Wrong Way"
    //     }
    //     return sql
    // }
    // change(params = null){
    //     let sql = "UPDATE `fb` SET `res_id` = ?, `web_typeset` = ?, `food_satis` = ?, `accuracy` = ?, `all_satis` = ? WHERE `fb`.`id` = ?;"
    //     return sql
    // }
    // delete(params = null){
    //     let sql = "DELETE FROM fb WHERE `fb`.`id` = ?"
    //     return sql
    // }
}

module.exports = Feedback
