require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net pull gesture depth flee sphere'; 
let testAccounts = [
"0xd12fda8a4030fc2aacb7e05a819843042613ae55c30f1c3c78c9ae119c80eb6f",
"0x584dc74c6b79f1dccb9dd80049eac9657e134b80a96235073da59b99c44f2017",
"0x4b82429d7df8b0d18e8b23468a735190c9249a06f9de40d05c3f2d16672270ea",
"0xd4c3ddb81f43b7c89b788ea1426913e424d4fd6a7ba92ea28ce0793a5739a1ef",
"0x59b6cb310459ff4dc63ff91fc97b3a234b2ab2888cf9531a15895591ec2e4511",
"0x2c8abfe08b8c48bc3b00a544429a86814217f92a0a4817cf888eee23c262819e",
"0xe1bb14a4074005606f831b5750a771040a93d3990ff78c0ed6a02629d95415e9",
"0x52e2dc6f0d96cf2e29d6a4a89408e58cdab571dcbea17f2adc14837b2ecc0881",
"0xae1041be1cf2d1db5a550ddb28ebac11495597b28c7e646b76c71820816eee83",
"0xa46d16da06c9b8b36b4b123e85491d208df5ac18392c1ef95753a01922d623b6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


