function main_init() {

}

function updateMemberTable(list){
    db_getMembers()
}

function updateMayorTable(list) {
    let table = document.getElementById("mayorTable");
    db_getMayors(function(result){
        Tobii.tableToHtml(result,table);
    });

}

function updateOrganTable(list) {
    let table = document.getElementById("organTalbe");
    db_getOrgans(function (result) {
        Tobii.tableToHtml(result,table);
    })

}

function updateStatistic(stat){

}