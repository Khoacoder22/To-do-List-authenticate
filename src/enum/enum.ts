//Gender for user
enum Gender {
    Male = "M",
    Female = "F",
}

//To-do-list status
enum TodolistStatus {
    Unfinished = "unfinished",
    Finished = "finished"
}

//Status for item
enum TodoitemStatus {
    Todo = "to-do",
    Inprocess = "in-process",
    Finish = "finish"
}

//Status for account
enum AccountStatus {
    Active = "active",
    Inactive = "inactive"
}

export {Gender, TodolistStatus, TodoitemStatus, AccountStatus};