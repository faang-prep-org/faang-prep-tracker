export class EntityBase {
    constructor(idGenerator) {
        if (new.target === EntityBase) throw new Error('Cannot instantiate entitybase');
        if (!idGenerator || typeof idGenerator !== 'function') throw new Error('Entity base requires id generator');

        this.id = idGenerator.generate();
        this.isDelete = false;
        this.createdAt = new Date();
        this.lastModificationDate = null;
        this.lastModificationUser = null;
    }

    modify() {
        this.lastModificationDate = new Date();
    }

    delete() {
        this.isDelete = true;
        this.lastModifiedDate = new Date();
    }
}