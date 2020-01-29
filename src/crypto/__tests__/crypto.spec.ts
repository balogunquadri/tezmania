import {
  generateKeysFromMnemonicAndPassphrase,
  generateKeys
} from '../crypto'
import { generateMnemonic } from '../../mnemonic/mnemonic'

describe('Crypto library', () => {
  describe('generateKeysFromMnemonicAndPassphrase', () => {
    const stubKeystore = {
      mnemonic: 'utility orbit end win roast sail warrior toast cross banana news gossip swap theme piece'
      publicKey: 'edpkvFMQpH8CBZeXxyrYBFc3LH8zc3dC6qhzRzuiZXvGd8oxiQrXQo'
      privateKey: 'edskS3EdqCCLLsxNhLXoVVBtFzqJEXkNcJeNriPDSdn22yJgET8grjzcRrQ2bnJ9zYTdfZTUfSsMdC76FGNZE5wsLDuXfc4fJ8',
      pkh: 'tz1X7JKJ114Btq3Mbz62NJxJSrmWPo4guFVq'
      keyType: 'ed25519'
    }

    test('should reject when no mnemonic', async () => {
      await generateKeysFromMnemonicAndPassphrase().catch((error: Error) => {
        expect(error.message).toEqual('invalid mnemonic string')
      })
    })
    test('should reject when no passphrase', async () => {
      await generateKeysFromMnemonicAndPassphrase(generateMnemonic()).catch(
        (error: Error) => {
          expect(error).toBeDefined()
        }
      )
    })
    test('should return object with keyStore values', async () => {
      const keystore = await generateKeysFromMnemonicAndPassphrase(
        stubKeystore.mnemonic,
        'password'
      )
      expect(keystore).toEqual(stubKeystore)
    })
  })

  describe('generateKeys', () => {
    test('should ...', () => {
      expect(typeof generateKeys).toEqual('function')
    })
  })
})
