import { getPublicKey } from 'ethereum-cryptography/secp256k1';

function _generatePrivateKey(_hdRootKey, _accountIndex) {
    return _hdRootKey.deriveChild(_accountIndex).privateKey;
  }

  function _getPublicKey(_privateKey) {
    return getPublicKey(_privateKey);
  }

  export {
    _generatePrivateKey,
    _getPublicKey
  }