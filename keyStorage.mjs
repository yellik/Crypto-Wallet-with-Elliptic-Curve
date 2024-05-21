import { writeFileSync } from "fs";

export function _store(_privateKey, _publicKey, _address, _mnemonic) {
    const accountOne = {
        privateKey: _privateKey,
        publicKey: _publicKey,
        address: _address,
        mnemonic: _mnemonic,
      };

      const accountOneData = JSON.stringify(accountOne);
      writeFileSync("account 1.json", accountOneData)
}