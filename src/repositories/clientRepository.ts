import { ClientDTO } from '../models/dto/clientDTO';
import Client from '../models/client';

class ClientRepository {
  public findAll = async (): Promise<Client[]> => {
    return Client.findAll();
  };

  public save = async (client: ClientDTO): Promise<Client> => {
    return Client.create(client);
  };

  public update = async (id: number, client: ClientDTO): Promise<Client | null> => {
    const clientToUpdate = await Client.findByPk(id);
    if (clientToUpdate) {
      return clientToUpdate.update(client);
    }
    return null;
  };

  public delete = async (id: number): Promise<boolean> => {
    const client = await Client.findByPk(id);
    if (client) {
      await client.destroy();
      return true;
    }
    return false;
  };
}

export default ClientRepository;
