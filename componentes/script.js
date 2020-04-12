var sqlite = require('sqlite3').verbose();
function log_in(form){
		var sqlite = require('sqlite3').verbose();
		var db = new sqlite.Database('users.db', (err)=>{
		if(err)
		console.log(err.message);});	
		valpassword(form.userid.value, form.password.value,getpswd);
		/*if(form.userid.value == "roger" && form.password.value =="123"){
			location.href = "componentes/musica/musica.html";
		}
		else
			alert("The username and the password are wrong");*/
		//getpswd(form.userid.value =="roger"&& form.password.value == "123");
}
function log2(us, ps){
		var sqlite = require('sqlite3').verbose();
		connectdb();
		valpassword(us, ps);

}
function getpswd(answ){
	if(answ)
		location.href = "componentes/musica/musica.html";
	else
		alert("The username and the password are wrong");
}
var db = new sqlite.Database('users.db', (err)=>{
	if(err)
		console.log(err.message);
});	

function createtable(){
	db.serialize(()=>{
		db.each("create table user(userid varchar(255) primary key,password varchar(255))");
	});	
}
function adduser(userid, pswd){
	db.run('insert into user(userid,password) values(?,?)', userid,pswd);
}
function valpassword(uid, password,callback){
	let sql = "Select password From user where userid == ?";
 	db.get(sql, [uid] ,  (err, row)=>{
		if(err)
			throw err;
		else{
			callback(row.password== password? true:false);	
		}
	});
}
function show(){
	let sql = "Select * From user";
	db.all(sql, [], (err, rows)=>{
		if(err)
			throw err;
		rows.forEach((i)=>{
			console.log(i.userid+" "+i.password);
		});
	});
}
function deleteuser(userid){
	db.run('delete from user where userid like ?', userid);
}
//deleteuser("moises");
//console.log(getpassword("roger"));
//getpassword("roger");
/*adduser("moises","8520");
adduser("moisesa","8520");
adduser("moisesb","8520");
adduser("moisesc","8520");*/


//log2("roger","123");
//getpswd(true);
//db.close();

function print(a) {
	console.log(a);
}

valpassword("roger","52",print);
