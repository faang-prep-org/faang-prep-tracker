import { EntityBase } from "../core/entity-base";

export class Account extends EntityBase {
    constructor(idGenerator, username, userId, accountType, password) {
        super(idGenerator)
        this.username = username;
        this.userId = userId;
        this.accountType = accountType;
        this.password = password;
    }

    resetPassword(newPassword) {

    }

    toJson() {
        return {

        }
    }

}