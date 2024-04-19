class Food{
    search(way1 , way2 = null , params = null) {
        let sqlname = ""
        if (way1 == "all"){
            if (way2 == "star_up"){
                sqlname = "SELECT * FROM `restaurant` ORDER BY star DESC; "
            }
            else if (way2 == "star_down"){
                sqlname = "SELECT * FROM `restaurant` ORDER BY star ASC; "
            }
            else if (way2 == "name"){
                sqlname = "SELECT * FROM `restaurant` WHERE `name` like '%" + params + "%' ; "
            }
            else if (way2 == "id"){
                sqlname = "SELECT * FROM `restaurant` WHERE `id` = " + params + "'"
            }
            else{
                sqlname = "SELECT * FROM `restaurant`"
            }
        }
        else if (way1 == "s_type"){
            if (way2 == "star_up"){
                sqlname = "SELECT * FROM `restaurant` WHERE `type` = '" + params + "' ORDER BY star DESC; "
            }
            else if (way2 == "star_down"){
                sqlname = "SELECT * FROM `restaurant` WHERE `type` = '" + params + "' ORDER BY star ASC; "
            }
            else{
                sqlname = "SELECT * FROM `restaurant` WHERE `type` = '" + params + "'"
            }

        }
        else if (way1 == "s_area"){
            if (way2 == "star_up"){
                sqlname = "SELECT * FROM `restaurant` WHERE `area` = '" + params + "' ORDER BY star DESC; "
            }
            else if (way2 == "star_down"){
                sqlname = "SELECT * FROM `restaurant` WHERE `area` = '" + params + "' ORDER BY star ASC; "
            }
            else{
                sqlname = "SELECT * FROM `restaurant` WHERE `area` = '" + params + "'"
            }
        }
        else{
            sqlname = "wrong way"
        }
       return sqlname
    }
    del( params = null) {
        let sqlname = "DELETE FROM restaurant WHERE `restaurant`.`id` =' "+params+"'"
        return sqlname
    }
    change( params = null) {
        let sqlname = "UPDATE `restaurant` SET `area` = ?, `type` = ?, `name` = ?, `address` = ?, `phone` = ?, `star` = ?, `remark` = ? WHERE `restaurant`.`id` = ?;"
        return sqlname
    }
    insert( params = null) {
        let sqlname = "INSERT INTO `restaurant` (`id`, `area`, `type`, `name`, `address`, `phone`, `star`, `remark`) VALUES (?, ?, ?,? , ?, ?, ?, ?);"
        return sqlname
    }
}

module.exports = Food
