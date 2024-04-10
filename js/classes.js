class Usuario{
    constructor(){
        this.id_usuario = null,
        this.nome = '',
        this.email = '',
        this.senha = ''
    }
}
class Projeto{
    constructor(){
        this.id_projeto = null,
        this.nome = '',
        this.descricao = '',
        this.datainicio = '',
        this.datatermino = ''
        this.status = false
    }
    completar(){
        this.status = true
    }
}
class Tarefa{
    constructor(){
        this.id_tarefa = null,
        this.nome = '',
        this.descricao = '',
        this.responsavel = ''
    }
}

