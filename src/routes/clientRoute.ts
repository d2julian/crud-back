import express from 'express';
import ClientController from '../controllers/clientController';
import ClientRepository from '../repositories/clientRepository';
import ClientService from '../services/clientService';
import { clientValidator, handleValidationErrors } from '../controllers/validators';

const router = express.Router();
const clientRepository = new ClientRepository();
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

router.get('/', clientController.getClients);
router.post('/', clientValidator, handleValidationErrors, clientController.saveClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

export default router;
