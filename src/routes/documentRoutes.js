import express from 'express';
import DocumentController from '../controllers/documentController';

const router = express.Router();

export default (documentService) => {
    const documentController = new DocumentController(documentService);

    router.get('/:id', documentController.getDocumentById.bind(documentController));
    router.get('/', documentController.getAllDocuments.bind(documentController));
    router.post('/', documentController.createDocument.bind(documentController));
    router.put('/:id', documentController.updateDocument.bind(documentController));
    router.delete('/:id', documentController.deleteDocument.bind(documentController));

    return router;
}; 