var database = require("../database/config");

function editarPerfil(novaFoto, idUsuario) {
    console.log("ACESSEI O PERFIL MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editarPerfil(): ", novaFoto, idUsuario);
    var instrucaoSql = `
        UPDATE usuario SET fotoPerfil = ${novaFoto} WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { 
    editarPerfil
}