 import keccak256 from 'js-sha3'


export function _getEthAddress(_publicKey) {
    const ec = new ec("secp256k1");
    const key = ec.keyFromPublic(_publicKey, "hex");
    const publicKey = key.getPublic().encode("hex").slice(2);
    return keccak256(Buffer.from(publicKey, "hex")).slice(64 - 40);
  }

  