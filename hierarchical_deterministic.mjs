import HDkey from 'hdkey'


export function _getHDRootKey(_mnemonic){
    return HDKey.fromMasterSeed(_mnemonic);
}