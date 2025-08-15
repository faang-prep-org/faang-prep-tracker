Authentication and User Management
    Entities
        - BaseEntity
            - Id:string
            - CreatedAt:Date
            - isDeleted:bool
            - lastModificationDate:date
            - lastModificationUserId:string

        - EntityHistory
            - entityType:string
            - entityId:string
            - fieldName:string
            - previousValue:string
            - currentVallue: string
            - modifiedBy:string
            - description
            - modifiedAt: date

        - Users:EntityBase
            - firstName
            - lastName
            - emailAddress
            - displayname
            - github url
            - profilePicture
            - gender
            - status

        - Accounts :EntityBase
            - username
            - passwordHash
            - accountType:AccountType
            - userId:string

        AccountType
            - LOCAL
            - GITHUB
            - GOOGLE    
            
        - Logins:EntityBase
            - accountId
            - ipAddress
            - date
            - status
            - location

        LoginStatus
            - FAILED
            - SUCCESS    

