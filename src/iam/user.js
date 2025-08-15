import { EntityBase } from '../core/entity-base.js';
import { USER_STATUS } from '../enums/user-status.js';
import { Account } from './account.js';

export const USER_STATUS = Object.freeze({
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    SUSPENDED: "SUSPENDED"
});

export class User extends EntityBase {
    constructor(idGenerator, firstName, lastName, email, displayName, gender) {
        super(idGenerator);

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.displayName = displayName || `${firstName} ${lastName}`;
        this.gender = gender;
        this.status = USER_STATUS.ACTIVE;
        this.githubUrl = null;
        this.profilePictureUrl = null;
        this.accounts = [];
    }

    deleteUser(userId) {
        this.delete(userId);
        this.status = USER_STATUS.INACTIVE;
    }

    addAccount(account) {
        if (!(account instanceof Account)) {
            throw new Error('Invalid account type. Must be an Account instance.');
        }
        this.accounts.push(account);
        this.modify();
    }

    removeAccount(accountId) {
        this.accounts = this.accounts.filter(account => account.id !== accountId);
        this.modify();
    }

    changeEmail(newEmail) {
        validateEmail();
        this.email = newEmail;
        this.modify();
    }

    hasPermission(permission) {

    }

    updateProfile({ firstName, lastName, displayName, gender, githubUrl, profilePictureUrl }) {
        if (firstName) this.firstName = firstName;
        if (lastName) this.lastName = lastName;
        if (displayName) this.displayName = displayName;
        if (gender) this.gender = gender;
        if (githubUrl) this.githubUrl = githubUrl;
        if (profilePictureUrl) this.profilePictureUrl = profilePictureUrl;
        this.lastModificationDate = new Date();
    }

    activate() {
        this.status = USER_STATUS.ACTIVE;
    }

    suspend() {
        this.status = USER_STATUS.SUSPENDED;
    }

    toJson() {
        return {
            id: this.id,
            createdAt: this.createdAt,
            isDeleted: this.isDeleted,
            lastModificationDate: this.lastModificationDate,
            lastModificationUser: this.lastModificationUser,
            firstName: this.firstName,
            lastName: this.lastName,
            displayName: this.displayName,
            status: this.status,
            email: this.email,
            gender: this.gender,
            githubUrl: this.githubUrl,
            profilePictureUrl: this.profilePictureUrl,
            accounts: this.accounts.map(acc => acc.toJson?.() || acc)
        };
    }
}
