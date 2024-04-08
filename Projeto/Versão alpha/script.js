class User{
    constructor(){
        this.id_user = null,
        this.username = '',
        this.email = '',
        this.password = ''
    }
}
class Project{
    constructor(){
        this.id_project = null,
        this.projectname = '',
        this.description = '',
        this.startdate = '',
        this.idcreator = '',
        this.status = false
    }
    completar(){
        this.status = true
    }
}
class Task{
    constructor(){
        this.id_task = null,
        this.task_name = '',
        this.description = '',
        this.owner = ''
    }
}

