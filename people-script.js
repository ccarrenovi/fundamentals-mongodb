db = connect("localhost:27017/devmongodb");

db.people.drop();

db.people.insertMany([  {name:"Mary",gender:"female",size:1.72,weight:54,phone:"+51 2345679", age:25 ,email:"mary.smith@gmail.com",company:"AWS",isActive:true,address:[{primary:"100 Boulevard Miami",secondary:"303 St. Geneva Rome"}]},  {name:"Charles",gender:"male",size:1.86,weight:90,phone:"+86 7345674", age:35 ,email:"charles.slate@yahoo.com",company:"Redhat",isActive:true},  {name:"Danny",gender:"male",size:1.91,weight:102,phone:"+1 8445663", age:25 ,email:"danny.lasalle@growing.com",company:"AWS",isActive:false,address:[{primary:"102 Bronco Texas",secondary:"404 Borbon Street Lousiana"}]},  {name:"Richard",gender:"male",size:1.82,weight:83,phone:"+86 2545671", age:35 ,email:"richard.jhonson@gmail.com",company:"Open cloud",isActive:true},  {name:"Yenny",gender:"female",size:1.75,weight:56,phone:"+51 2345459", age:29 ,email:"yenny.sullivan@gmail.com",company:"AWS",isActive:false,address:[{primary:"505 Renfer Madrid",secondary:"345 Republica Barcelona"}]},  {name:"Rob",gender:"male",size:1.79,weight:85,phone:"+51 7145679", age:35 ,email:"rob.sax@mshaw.com",company:"Microsoft Inc",isActive:false},  {name:"Brain",gender:"male",size:1.90,weight:92,phone:"+1 8947679", age:45 ,email:"brain.dawner@yahoo.com",company:"AWS",isActive:true} ,  {name:"Jane",gender:"male",size:1.56,weight:55,phone:"+1 8345663", age:25 ,email:"jane.gross@growing.com",company:"MongoDB Inc",isActive:true} ]);

sleep(5000);

print(" La colecion people se ha creado con exito!");

// Ejecutar con: mongo --port 27017 --host localhost  ./people-script.js
