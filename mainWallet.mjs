import { _generateMnemonic } from './mnemonicGenerator.mjs';
import { _getHDRootKey } from './Hierarchical_deterministic.mjs';
import { _generatePrivateKey, _getPublicKey } from './generateKeys.mjs';
import { _getEthAddress } from './ethAddress.mjs';
import { _store } from './keyStorage.mjs';


async function main() {
    const { mnemonic, entropy } = _generateMnemonic();
    console.log(`WARNING! Never disclose your Seed Phrase:\n ${mnemonic}`);
    const hdRootKey = _getHdRootKey(entropy);
    const accountOneIndex = 0;
    const accountOnePrivateKey = _generatePrivateKey(hdRootKey, accountOneIndex);
    const accountOnePublicKey = _getPublicKey(accountOnePrivateKey);
    const accountOneAddress = _getEthAddress(accountOnePublicKey);
    console.log(`You Ethereum Address:\n 0x${accountOneAddress}`);
  
  
    _store(
      accountOnePrivateKey,
      accountOnePublicKey,
      accountOneAddress,
      mnemonic
    );
  }

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })