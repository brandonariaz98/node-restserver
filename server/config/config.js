



// ============================
// Puerto
//=============================
process.env.PORT = process.env.PORT || 3000;

// ============================
// Entorno
//=============================
process.eventNames.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
// Base de Datos
//=============================
let urlDB;

if ( process.env.NODE_ENV === 'dev' ){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb+srv://urek:01vyXQ3AjUNnmHct@cluster0-iwkur.mongodb.net/test';
}
process.env.URLDB = urlDB;