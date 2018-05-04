var db_setup = [
    {
        name:"organs",
        create:
        "CREATE TABLE IF NOT EXISTS organs(" +
        "organ_name TEXT PRIMARY KEY, " +
        "organ_num_max INTEGER NOT NULL, " +
        "organ_num_present INTEGER DEFAULT 0);",
        init:[],
        test:[
            {organ_name:"AIV",organ_num_max:5},
            {organ_name:"GUV",organ_num_max:3}
        ]
    },{
        name:"members",
        create:
        "CREATE TABLE IF NOT EXISTS member(" +
        "member_legi TEXT PRIMARY KEY, " +
        "member_first TEXT NOT NULL, " +
        "member_last TEXT NOT NULL, " +
        "member_card UNIQUE, " +
        "member_mayor TEXT DEFAULT '');",
        init:[],
        test:[
            {member_legi:100,member_first:"hans",member_last:"peter",member_mayor:"Bauingenieurwissenschaften"},
            {member_legi:101,member_first:"tanz",member_last:"zuger",member_mayor:"Geomatiwissenschaften"}
        ]
    },{
        name:"mayors",
        create:
        "CREATE TABLE IF NOT EXISTS mayors(" +
        "mayor_name TEXT PRIMARY KEY, " +
        "organ_name TEXT NOT NULL REFERENCES organs(organ_name));",
        init:[],
        test:[
            {mayor_name:"Geomat",organ_name:"GUV"},
            {mayor_name:"Bauing",organ_name:"AIV"}
        ]
    },{
        name:"status",
        creat:
        "CREATE TABLE IF NOT EXISTS status(" +
        "member_legi TEXT REFERENCES members(member_legi), " +
        "organ_name TEXT REFERENCES organs(organ_name), " +
        "status_date TEXT NOT NULL, " +
        "PRIMARY KEY(member_legi, organ_name, status_date));",
        init:[],
        test:[]
    }

];