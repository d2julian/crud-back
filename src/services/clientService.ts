import { ClientDTO } from '../models/dto/clientDTO';
import ClientRepository from '../repositories/clientRepository';
import Client from '../models/client';

class ClientService {
  private readonly clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  public getClients = async (): Promise<Client[]> => {
    return this.clientRepository.findAll();
  };

  public saveClient = async (client: ClientDTO): Promise<Client> => {
    return this.clientRepository.save(client);
  };

  public updateClient = async (id: number, client: ClientDTO): Promise<Client | null> => {
    return this.clientRepository.update(id, client);
  };

  public deleteClient = async (id: number): Promise<boolean> => {
    return this.clientRepository.delete(id);
  };
}

export default ClientService;
