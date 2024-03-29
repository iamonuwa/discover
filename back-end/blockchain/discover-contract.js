const web3 = require('./web3');

let DiscoverABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "bytes32"
            },
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x040cf020"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "bytes32"
            },
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "upvoteEffect",
        "outputs": [
            {
                "name": "effect",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x1248edd1"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "safeMax",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x199e1698"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "bytes32"
            },
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "upvote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x2b3df690"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "total",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x2ddbd13a"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x313ce567"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "existingIDs",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x57073d4b"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getDAppsCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x5ecaa4ff"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "max",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x6ac5db19"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "bytes32"
            }
        ],
        "name": "downvoteCost",
        "outputs": [
            {
                "name": "b",
                "type": "uint256"
            },
            {
                "name": "vR",
                "type": "uint256"
            },
            {
                "name": "c",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x6fe39f64"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ceiling",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x753ed1bd"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "bytes32"
            },
            {
                "name": "_amount",
                "type": "uint256"
            },
            {
                "name": "_metadata",
                "type": "bytes32"
            }
        ],
        "name": "createDApp",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x7e38d973"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_amount",
                "type": "uint256"
            },
            {
                "name": "_token",
                "type": "address"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "receiveApproval",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x8f4ffcb1"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "dapps",
        "outputs": [
            {
                "name": "developer",
                "type": "address"
            },
            {
                "name": "id",
                "type": "bytes32"
            },
            {
                "name": "metadata",
                "type": "bytes32"
            },
            {
                "name": "balance",
                "type": "uint256"
            },
            {
                "name": "rate",
                "type": "uint256"
            },
            {
                "name": "available",
                "type": "uint256"
            },
            {
                "name": "votesMinted",
                "type": "uint256"
            },
            {
                "name": "votesCast",
                "type": "uint256"
            },
            {
                "name": "effectiveBalance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x9640fe35"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "id2index",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xac56f70f"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "bytes32"
            },
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "downvote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xac769090"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "bytes32"
            }
        ],
        "name": "withdrawMax",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xcb2b6d26"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "bytes32"
            },
            {
                "name": "_metadata",
                "type": "bytes32"
            }
        ],
        "name": "setMetadata",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xd3525adf"
    },
    {
        "inputs": [
            {
                "name": "_SNT",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "newEffectiveBalance",
                "type": "uint256"
            }
        ],
        "name": "DAppCreated",
        "type": "event",
        "signature": "0x868bbbb32f410f6626146ffc2d5c58cfdb3f08798ea4965f55c2b7d30a6f9c6c"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "newEffectiveBalance",
                "type": "uint256"
            }
        ],
        "name": "Upvote",
        "type": "event",
        "signature": "0x967f7d6ea4a44117f4cb822f761b5c76cbeac4c6ab5cfbaa59447574fa126bc2"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "newEffectiveBalance",
                "type": "uint256"
            }
        ],
        "name": "Downvote",
        "type": "event",
        "signature": "0xa84d42fd75bca8f5ea3b11dc2aee00753b6ced6a669d6ad32396e1fef5b13528"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "newEffectiveBalance",
                "type": "uint256"
            }
        ],
        "name": "Withdraw",
        "type": "event",
        "signature": "0x4591ca0897d0d8e83f7153dfe0b2912125672084ab8d84be59ee13240a1778bc"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "MetadataUpdated",
        "type": "event",
        "signature": "0x6e27af24ead46b4b469e383b46b4b75487fcf1ffce54d216add332f9de2120c5"
    }
];

module.exports = web3.eth.Contract(DiscoverABI, process.env.DISCOVER_CONTRACT);
