import pg from 'pg';
const {Client}=pg;

const config={
    user: 'portafolio_bd_user',
    host: 'dpg-csgl83bqf0us739n2ldg-a.oregon-postgres.render.com',
    database: 'portafolio_bd',
    password: 'MU63uHMq3Yle5BtEvcBdfetpjsaNwebw',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }

}


export async function Conectar(params){
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}