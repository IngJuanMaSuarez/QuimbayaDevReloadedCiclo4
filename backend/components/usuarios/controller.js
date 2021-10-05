//Tiene la logica del componente. Logica del negocio.
//Si el mensaje necesita una fecha o llamar a otro componente, se hace aqui.
//El usuario viene bien, el texto viene bien, hacer comprobaciones, ese tipo de cosas se hacen aca
//Recibe la informacion de Network. Controller hace las comprobaciones y podra guardar la informacion pasandolo a store

const store = require('./store');

function registrarUsuario(usuario_id, rol, estado){
    return new Promise((resolve, reject) => {
        if (!usuario_id || !rol || !estado){
            console.error('[productoController] La informacion esta incompleta');
            return reject('Los datos son incorrectos');
        }

        const fullUsuario = {
            usuario_id: usuario_id,
            rol: rol,
            estado: estado,
            date: new Date(),
        };

    store.add(fullUsuario);
    resolve(fullUsuario);
    })
};

function listarUsuarios(filtroUsuario){
    return new Promise((resolve, reject) => {
        resolve(store.list(filtroUsuario));
    })
}

function actualizarUsuario(usuario_id, rol){
    return new Promise(async (resolve, reject) => {
        if(!usuario_id || !rol){
            return reject('Datos invalidos')
        }
        const result = await store.actualizarRolUsuario(usuario_id, rol);
        resolve(result);
    })
}

module.exports = {
    registrarUsuario,
    listarUsuarios,
    actualizarUsuario,
};