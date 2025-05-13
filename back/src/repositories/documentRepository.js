class DocumentRepository {
    constructor(Document) {
        this.Document = Document;
    }

    async findAll() {
        return await this.Document.findAll();
    }

    async findById(id) {
        return await this.Document.findByPk(id);
    }

    async create(documentData) {
        return await this.Document.create(documentData);
    }

    async update(id, documentData) {
        const document = await this.Document.findByPk(id);
        if (!document) {
            return null;
        }
        return await document.update(documentData);
    }

    async delete(id) {
        const document = await this.Document.findByPk(id);
        if (!document) {
            return null;
        }
        await document.destroy();
        return document;
    }
}

export default DocumentRepository; 