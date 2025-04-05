import express from 'express';
import cors from 'cors';
import sequelize from './database';
import hotelRoutes from './routes/hotelRoutes';
import clientRoutes from './routes/clientRoute';
import bookingRoutes from './routes/bookingRoute';
import insertDummyData from './insert_dummy_data';

const app = express();
app.use(cors());

sequelize
  .authenticate()
  .then(() => {
    console.log('Base de datos conectada correctamente.');
    insertDummyData(sequelize);
  })
  .catch(err => console.error('Error al conectar a la base de datos:', err));

app.use(express.json());

app.use('/api/hotels', hotelRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/bookings', bookingRoutes);

export default app;
