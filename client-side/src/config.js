export const RESERVATION_ADDRESS = '0xF91857ea4ecFD53B0783821A2a1443DAbFa8Ea55'

export const RESERVATION_ABI = [
{
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "uint256",
        "name": "_restaurantId",
        "type": "uint256"
    }
    ],
    "name": "addedEvent",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "uint256",
        "name": "_restaurantId",
        "type": "uint256"
    }
    ],
    "name": "bookedEvent",
    "type": "event"
},
{
    "constant": true,
    "inputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
    ],
    "name": "checking",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "closesTime",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "opensTime",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
    ],
    "name": "restaurantOwners",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "name": "restaurants",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    },
    {
        "internalType": "string",
        "name": "name",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "city",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "adress",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "opensAt",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "closesAt",
        "type": "string"
    },
    {
        "internalType": "uint256",
        "name": "totalSeats",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "guestCount",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "restaurantsCount",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
    ],
    "name": "schecking",
    "outputs": [
    {
        "internalType": "string",
        "name": "",
        "type": "string"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
    ],
    "name": "users",
    "outputs": [
    {
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
    }
    ],
    "name": "checker",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "internalType": "string",
        "name": "n",
        "type": "string"
    }
    ],
    "name": "stringChecker",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "internalType": "string",
        "name": "_name",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "_city",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "_adress",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "_opensAt",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "_closesAt",
        "type": "string"
    },
    {
        "internalType": "uint256",
        "name": "_totalSeats",
        "type": "uint256"
    }
    ],
    "name": "addRestaurant",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "internalType": "uint256",
        "name": "_restaurantId",
        "type": "uint256"
    },
    {
        "internalType": "string",
        "name": "_username",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "_useremail",
        "type": "string"
    },
    {
        "internalType": "uint256",
        "name": "_timeLimit",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_startTime",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_endTime",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_guestCount",
        "type": "uint256"
    }
    ],
    "name": "book",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}
]