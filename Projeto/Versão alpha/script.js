class User{
    constructor(){
        this.email = '',
        this.password = '',
        this.first_name = '',
        this.second_name = ''
    }
    setemail(){
        this.email = prompt("email")
    }
}
class Project{
    constructor(){
        this.title = '',
        this.date = '',
        this.description = ''
    }
}
class CompleteProject extends Project{
    constructor(){
        super()
        this.end_date = ''
    }
}
class IncompleteProject extends Project{
    constructor(){
        super()
        this.expiration_date = ''
    }
}

