import HDkey from 'hdkey'


export function _getHDRootKey(_mnemonic){
    return HDkey.fromMasterSeed(_mnemonic);
}