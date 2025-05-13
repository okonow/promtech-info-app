class DocumentService {
    constructor(documentRepository) {
        this.documentRepository = documentRepository;
    }

    async getAllDocuments() {
        return await this.documentRepository.findAll();
    }

    async getDocumentById(id) {
        const document = await this.documentRepository.findById(id);
        if (!document) {
            throw new Error('Document not found');
        }
        return document;
    }

    async createDocument(documentData) {
        if (!documentData.name || !documentData.company_id) {
            throw new Error('Name and company_id are required');
        }
        return await this.documentRepository.create(documentData);
    }

    async updateDocument(id, documentData) {
        const document = await this.documentRepository.update(id, documentData);
        if (!document) {
            throw new Error('Document not found');
        }
        return document;
    }

    async deleteDocument(id) {
        const document = await this.documentRepository.delete(id);
        if (!document) {
            throw new Error('Document not found');
        }
        return document;
    }
}

export default DocumentService; 