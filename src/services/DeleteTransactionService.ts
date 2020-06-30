import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionRepository = getCustomRepository(TransactionRepository);

    const trasanction = await transactionRepository.findOne(id);

    if (!trasanction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionRepository.remove(trasanction);
  }
}

export default DeleteTransactionService;
