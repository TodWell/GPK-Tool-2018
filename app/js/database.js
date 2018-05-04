var db;

var db_SQL_NEWEST_STATUS = "SELECT member_legi, organ_name, MAX(status_date) FROM status GROUPED BY member_legi";

function db_init(){

}

function db_getMembers(queryParam,followUp){
    let sql = "SELECT * FROM members JOIN ("+db_SQL_NEWEST_STATUS+") USING(member_legi)";
    if(queryParam.likes!=="undefined" && queryParam.likes.size>0){
        let where = " WHERE " + queryParam.likes[0].column+" LIKE '%"+queryParam.likes[0].val+"%' ";
        for(let ii=1;ii<queryParam.likes.size;ii++){
            where += " OR "+queryParam.likes[ii].column+" LIKE '%"+queryParam.likes[ii].val+"%' ";
        }
        sql += where
    }
    if(queryParam.order!=="undefined"){
        sql += "ORDERED BY "+queryParam.order.column+" "+queryParam.order.order;
    }
    db.run_sql(sql,followUp);
}

function db_getMayors(){
    let sql = "SELECT * FROM mayors";
    db.run_sql(sql);
}

function db_getOrgans(){
    let sql = "SELECT * FROM organs";
    db.run_sql(sql);
}