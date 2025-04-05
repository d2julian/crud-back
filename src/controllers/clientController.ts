import { Request, Response } from 'express';
import ClientService from '../services/clientService';

class ClientController {
  private readonly clientService: ClientService;

  constructor(clientService: ClientService) {
    this.clientService = clientService;
  }

  public getClients = async (req: Request, res: Response) => {
    try {
      const clients = await this.clientService.getClients();
      res.json(clients);
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };

  public saveClient = async (req: Request, res: Response) => {
    try {
      const clientToSave = req.body;
      const client = await this.clientService.saveClient(clientToSave);
      res.json(client);
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };

  public updateClient = async (req: Request, res: Response) => {
    try {
      const clientId = req.params.id;
      const clientToUpdate = req.body;
      const client = await this.clientService.updateClient(+clientId, clientToUpdate);
      if (client) {
        res.json(client);
      } else {
        res.status(404).json({ error: 'Cliente no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };

  public deleteClient = async (req: Request, res: Response) => {
    try {
      const clientId = req.params.id;
      const deleted = await this.clientService.deleteClient(+clientId);
      if (deleted) {
        res.json();
      } else {
        res.status(404).json({ error: 'Cliente no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };
}

export default ClientController;
