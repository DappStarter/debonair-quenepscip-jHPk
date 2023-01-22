require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind concert grace industry foster trap'; 
let testAccounts = [
"0x7a58f9120b7a950db42be11d5ad047e25b2955b51ba94f29cebd79c97286c488",
"0x1e885550ccd829a19ba9613bbb03a9257929f079b14c5132be790a9ffa7675c8",
"0x96801536ff0d4509e0656bd338840a38e86dba9014b5e7564921038cf4e52868",
"0x115fc2cdbfd40830fe2d3fa9c8bd0335e0aca1a7f07802602de95642c8cc1536",
"0x4caf9a5cece329544f1c571779d23af4788332cf823a88089709e32b724bd841",
"0x99dd217917ee9c2677d482381d249b687484bbb18bf1ee76a03f22f8dcebaf0e",
"0x58d934b6e497601e67004a38824a663cc8e90614aae1f498b106e1cfe7655ca0",
"0xcb648bae33d33f8af2a5144419ff1dc47f4dd1c30df2383370b03ffd7a6ec4e3",
"0x9d6f67b6e2e725356cc8656e86e0aa8bba60c130704db42256bcdd1c0774b25f",
"0xb5d7e2a31c3170c7627fece348a4a03ef7db7830bf11bdbc9e7abfb8b2299b82"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

