import { createConnection, getConnectionOptions, Connection } from 'typeorm';
// arquivo que busca ormconfig para conexão com banco de dados

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database:
        process.env.NODE_ENV === 'test'
          ? 'gostack_desafio06_tests'
          : defaultOptions.database,
    }),
  );
};
