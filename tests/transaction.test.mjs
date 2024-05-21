import { test, describe, expect, beforeEach} from 'vitest'
import Wallet from '../walletWith.mjs'
import { verifySignature } from '../utilities/crypto-lib.mjs'
import Transaction from '../models/Transaction.mjs'

describe('Transaction', () => {
    let transaction, sender, recipient, amount;

    beforeEach(() => {
        sender = new Wallet();
        recipient: 'recipient-dummy-address';
        amount: 50;

        transaction = new Transaction({ sender, recipient, amount})
    });

    describe('properties', () => {

    });

    describe('outputMap()', () => {
        it('should display the receipients balance', () => {
            expect(transactionoutputMap[recipient]).toEqual(amount);
        });

        it('should displau the senders balance', () => {
            expect(transaction.outputMap[sender.publicKey]).toEqual(
                sender.balance - amount
            )
        })
    })
})