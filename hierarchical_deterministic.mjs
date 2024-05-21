import HDKey, { HDKey } from 'ethereum-cryptography/hdkey'

const HDKey = HDKey;

function _getHDRootKey(_mnemonic){
    return HDKey.fromMasterSeed(_mnemonic);
}