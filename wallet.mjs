import { generateMnemonic, mnemonicToEntropy } from 'ethereum-cryptography/bip39';
import { wordlist, wordlist } from 'ethereum-cryptography/bip39/wordlists/english'

const wordlist = wordlist;

function _generateMnemonic() {
    const strength = 128;

    //generate phrase
    const mnemonic = generateMnemonic(wordlist, strength)

    //entropyconvert
    const entropy = mnemonicToEntropy(mnemonic, wordlist);
    return { mnemonic, entropy };
}

async function main() {
    const { mnemonic, entropy } = _generateMnemonic();
    console.log(`WARNING! Never disclose your Seed Phrase:\n ${mnemonic}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })