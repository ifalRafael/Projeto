# Projeto

MODELO CONCEITUAL, BCDD:

USER ( ID_USER, UserName,Email, Password)
PROJECTS ( ID_Project, ProjectName,Description, Startdate, ID_Criador(FK))
TASK ( ID_Task, TaskName, Description, Project_ID(FK))
COMMENTS()

RELACIONAMENTOS:

O User pode criar zero ou mais projetos.
Um projeto pode ser criado somente por um usuário.
Um projeto pode conter de zero a várias tarefas.
Uma tarefa pertence a exatamente um projeto.
Uma tarefa é atribuída a zero ou a um usuário.
