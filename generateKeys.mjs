import * as secp from '@noble/secp256k1';

function _generatePrivateKey(_hdRootKey, _accountIndex) {
    return _hdRootKey.deriveChild(_accountIndex).secp.getPublicKey()
  }

  function _getPublicKey(_privateKey) {
    return getPublicKey(_privateKey);
  }

  export {
    _generatePrivateKey,
    _getPublicKey
  }