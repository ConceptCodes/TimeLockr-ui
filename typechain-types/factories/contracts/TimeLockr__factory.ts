/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TimeLockr, TimeLockrInterface } from "../../contracts/TimeLockr";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "EmptyMessage",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "InsufficientFunds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "MessageNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "MessageStillLocked",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AddedToWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "FeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "MessageLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "MessageUnlocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevLockTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "MinimumLockUpTimeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RemovedFromWhitelist",
    type: "event",
  },
  {
    inputs: [],
    name: "FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_LOCK_TIME_IN_SECONDS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllUnlockedMessages",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLockedMessages",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_timeLocked",
        type: "uint256",
      },
    ],
    name: "lockMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "removeFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_messageId",
        type: "bytes32",
      },
    ],
    name: "unlockMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "updateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minimumLockTime",
        type: "uint256",
      },
    ],
    name: "updateMinimumLockTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526706f05b59d3b20000600155603c60025534801561002157600080fd5b5061003e61003361004360201b60201c565b61004b60201b60201c565b61010f565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b612061806200011f6000396000f3fe6080604052600436106100e85760003560e01c80639b19251a1161008a578063e2e099fd11610059578063e2e099fd146102d1578063e43252d7146102fa578063e45c45ac14610323578063f2fde38b1461033f576100e8565b80639b19251a14610201578063c45d9bea1461023e578063c57981b51461027b578063c9723051146102a6576100e8565b80638ab1d681116100c65780638ab1d681146101585780638cb2c893146101815780638da5cb5b146101ad5780639012c4a8146101d8576100e8565b80630f12fb71146100ed578063692c883814610116578063715018a614610141575b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f91906115e6565b610368565b005b34801561012257600080fd5b5061012b6103b7565b6040516101389190611622565b60405180910390f35b34801561014d57600080fd5b506101566103bd565b005b34801561016457600080fd5b5061017f600480360381019061017a919061169b565b6103d1565b005b34801561018d57600080fd5b5061019661046d565b6040516101a49291906118eb565b60405180910390f35b3480156101b957600080fd5b506101c26108ef565b6040516101cf9190611931565b60405180910390f35b3480156101e457600080fd5b506101ff60048036038101906101fa91906115e6565b610918565b005b34801561020d57600080fd5b506102286004803603810190610223919061169b565b610967565b6040516102359190611967565b60405180910390f35b34801561024a57600080fd5b5061026560048036038101906102609190611982565b610987565b60405161027291906119d1565b60405180910390f35b34801561028757600080fd5b506102906109b8565b60405161029d9190611622565b60405180910390f35b3480156102b257600080fd5b506102bb6109be565b6040516102c891906119ec565b60405180910390f35b3480156102dd57600080fd5b506102f860048036038101906102f39190611a3a565b610cf8565b005b34801561030657600080fd5b50610321600480360381019061031c919061169b565b610f46565b005b61033d60048036038101906103389190611acc565b610fe2565b005b34801561034b57600080fd5b506103666004803603810190610361919061169b565b611335565b005b6103706113b9565b7f296b737099f152c0444895e62667297b0e4a9f910574417fec5ab83b3186e2e660025482426040516103a593929190611b40565b60405180910390a18060028190555050565b60025481565b6103c56113b9565b6103cf6000611437565b565b6103d96113b9565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f031e2f7b58119201ea1f3c2d1070d142de895fa9e98f585672341d0973c8d00a8142604051610462929190611b77565b60405180910390a150565b6060806000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905067ffffffffffffffff8111156104ce576104cd611ba0565b5b6040519080825280602002602001820160405280156104fc5781602001602082028036833780820191505090505b5090506000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905067ffffffffffffffff81111561055d5761055c611ba0565b5b60405190808252806020026020018201604052801561059057816020015b606081526020019060019003908161057b5790505b5090506000805b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156107ae576000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061063457610633611bcf565b5b906000526020600020015490506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206040518060400160405290816000820180546106ae90611c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546106da90611c2d565b80156107275780601f106106fc57610100808354040283529160200191610727565b820191906000526020600020905b81548152906001019060200180831161070a57829003601f168201915b50505050508152602001600182015481525050905080602001514210610799578186858151811061075b5761075a611bcf565b5b602002602001018181525050806000015185858151811061077f5761077e611bcf565b5b6020026020010181905250838061079590611c8e565b9450505b505080806107a690611c8e565b915050610597565b5060008167ffffffffffffffff8111156107cb576107ca611ba0565b5b6040519080825280602002602001820160405280156107f95781602001602082028036833780820191505090505b50905060008267ffffffffffffffff81111561081857610817611ba0565b5b60405190808252806020026020018201604052801561084b57816020015b60608152602001906001900390816108365790505b50905060005b838110156108df5785818151811061086c5761086b611bcf565b5b602002602001015183828151811061088757610886611bcf565b5b6020026020010181815250508481815181106108a6576108a5611bcf565b5b60200260200101518282815181106108c1576108c0611bcf565b5b602002602001018190525080806108d790611c8e565b915050610851565b5081819650965050505050509091565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6109206113b9565b7f509d432c4ab40e3eb039ee95fea93be8de6c751efa87aed5e51c7202b0dd8e09600154824260405161095593929190611b40565b60405180910390a18060018190555050565b60036020528060005260406000206000915054906101000a900460ff1681565b600560205281600052604060002081815481106109a357600080fd5b90600052602060002001600091509150505481565b60015481565b60606000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905067ffffffffffffffff811115610a1e57610a1d611ba0565b5b604051908082528060200260200182016040528015610a4c5781602001602082028036833780820191505090505b5090506000805b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610c48576000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610af057610aef611bcf565b5b906000526020600020015490506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082018054610b6a90611c2d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9690611c2d565b8015610be35780601f10610bb857610100808354040283529160200191610be3565b820191906000526020600020905b815481529060010190602001808311610bc657829003601f168201915b5050505050815260200160018201548152505090508060200151421015610c335781858581518110610c1857610c17611bcf565b5b6020026020010181815250508380610c2f90611c8e565b9450505b50508080610c4090611c8e565b915050610a53565b5060008167ffffffffffffffff811115610c6557610c64611ba0565b5b604051908082528060200260200182016040528015610c935781602001602082028036833780820191505090505b50905060005b82811015610cee57838181518110610cb457610cb3611bcf565b5b6020026020010151828281518110610ccf57610cce611bcf565b5b6020026020010181815250508080610ce690611c8e565b915050610c99565b5080935050505090565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082018054610d6590611c2d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9190611c2d565b8015610dde5780601f10610db357610100808354040283529160200191610dde565b820191906000526020600020905b815481529060010190602001808311610dc157829003601f168201915b505050505081526020016001820154815250509050600081602001511415610e3f5781426040517f9a38f70e000000000000000000000000000000000000000000000000000000008152600401610e36929190611cd7565b60405180910390fd5b80602001514210610f03573373ffffffffffffffffffffffffffffffffffffffff167f66c9fe588b65637a29218efbea70a5f4deca1db14293aae770a5829378f43fea42604051610e909190611622565b60405180910390a2600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050600190039060005260206000200160009091909190915055610f42565b81426040517f767bf164000000000000000000000000000000000000000000000000000000008152600401610f39929190611cd7565b60405180910390fd5b5050565b610f4e6113b9565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f62c1e066774519db9fe35767c15fc33df2f016675b7cc0c330ed185f286a2d528142604051610fd7929190611b77565b60405180910390a150565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561101c57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050801580156110ae575061107e6108ef565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b156111835762015180821115611138576703782dace9d9000062015180836110d69190611d2f565b6110e09190611d60565b6001546110ed9190611dba565b3410156111335734426040517f03eb8b5400000000000000000000000000000000000000000000000000000000815260040161112a929190611e10565b60405180910390fd5b611182565b6001543410156111815734426040517f03eb8b54000000000000000000000000000000000000000000000000000000008152600401611178929190611e10565b60405180910390fd5b5b5b60008484905014156111ce5784426040517fc655a7630000000000000000000000000000000000000000000000000000000081526004016111c5929190611b77565b60405180910390fd5b6000854286866040516020016111e79493929190611ee1565b604051602081830303815290604052805190602001209050604051806040016040528086868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200184426112609190611dba565b815250600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060008201518160000190805190602001906112cf929190611503565b50602082015181600101559050508573ffffffffffffffffffffffffffffffffffffffff167f90051fcb8828d27da97e0ad9d7a33d72b6de356a55dbf09b5b22e930e0b57d738242604051611325929190611cd7565b60405180910390a2505050505050565b61133d6113b9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156113ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a490611f9f565b60405180910390fd5b6113b681611437565b50565b6113c16114fb565b73ffffffffffffffffffffffffffffffffffffffff166113df6108ef565b73ffffffffffffffffffffffffffffffffffffffff1614611435576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142c9061200b565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b82805461150f90611c2d565b90600052602060002090601f0160209004810192826115315760008555611578565b82601f1061154a57805160ff1916838001178555611578565b82800160010185558215611578579182015b8281111561157757825182559160200191906001019061155c565b5b5090506115859190611589565b5090565b5b808211156115a257600081600090555060010161158a565b5090565b600080fd5b600080fd5b6000819050919050565b6115c3816115b0565b81146115ce57600080fd5b50565b6000813590506115e0816115ba565b92915050565b6000602082840312156115fc576115fb6115a6565b5b600061160a848285016115d1565b91505092915050565b61161c816115b0565b82525050565b60006020820190506116376000830184611613565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116688261163d565b9050919050565b6116788161165d565b811461168357600080fd5b50565b6000813590506116958161166f565b92915050565b6000602082840312156116b1576116b06115a6565b5b60006116bf84828501611686565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b611707816116f4565b82525050565b600061171983836116fe565b60208301905092915050565b6000602082019050919050565b600061173d826116c8565b61174781856116d3565b9350611752836116e4565b8060005b8381101561178357815161176a888261170d565b975061177583611725565b925050600181019050611756565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156117f65780820151818401526020810190506117db565b83811115611805576000848401525b50505050565b6000601f19601f8301169050919050565b6000611827826117bc565b61183181856117c7565b93506118418185602086016117d8565b61184a8161180b565b840191505092915050565b6000611861838361181c565b905092915050565b6000602082019050919050565b600061188182611790565b61188b818561179b565b93508360208202850161189d856117ac565b8060005b858110156118d957848403895281516118ba8582611855565b94506118c583611869565b925060208a019950506001810190506118a1565b50829750879550505050505092915050565b600060408201905081810360008301526119058185611732565b905081810360208301526119198184611876565b90509392505050565b61192b8161165d565b82525050565b60006020820190506119466000830184611922565b92915050565b60008115159050919050565b6119618161194c565b82525050565b600060208201905061197c6000830184611958565b92915050565b60008060408385031215611999576119986115a6565b5b60006119a785828601611686565b92505060206119b8858286016115d1565b9150509250929050565b6119cb816116f4565b82525050565b60006020820190506119e660008301846119c2565b92915050565b60006020820190508181036000830152611a068184611732565b905092915050565b611a17816116f4565b8114611a2257600080fd5b50565b600081359050611a3481611a0e565b92915050565b600060208284031215611a5057611a4f6115a6565b5b6000611a5e84828501611a25565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611a8c57611a8b611a67565b5b8235905067ffffffffffffffff811115611aa957611aa8611a6c565b5b602083019150836001820283011115611ac557611ac4611a71565b5b9250929050565b60008060008060608587031215611ae657611ae56115a6565b5b6000611af487828801611686565b945050602085013567ffffffffffffffff811115611b1557611b146115ab565b5b611b2187828801611a76565b93509350506040611b34878288016115d1565b91505092959194509250565b6000606082019050611b556000830186611613565b611b626020830185611613565b611b6f6040830184611613565b949350505050565b6000604082019050611b8c6000830185611922565b611b996020830184611613565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611c4557607f821691505b60208210811415611c5957611c58611bfe565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c99826115b0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611ccc57611ccb611c5f565b5b600182019050919050565b6000604082019050611cec60008301856119c2565b611cf96020830184611613565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611d3a826115b0565b9150611d45836115b0565b925082611d5557611d54611d00565b5b828204905092915050565b6000611d6b826115b0565b9150611d76836115b0565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611daf57611dae611c5f565b5b828202905092915050565b6000611dc5826115b0565b9150611dd0836115b0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611e0557611e04611c5f565b5b828201905092915050565b6000604082019050611e256000830185611613565b611e326020830184611613565b9392505050565b60008160601b9050919050565b6000611e5182611e39565b9050919050565b6000611e6382611e46565b9050919050565b611e7b611e768261165d565b611e58565b82525050565b6000819050919050565b611e9c611e97826115b0565b611e81565b82525050565b600081905092915050565b82818337600083830152505050565b6000611ec88385611ea2565b9350611ed5838584611ead565b82840190509392505050565b6000611eed8287611e6a565b601482019150611efd8286611e8b565b602082019150611f0e828486611ebc565b915081905095945050505050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611f89602683611f1c565b9150611f9482611f2d565b604082019050919050565b60006020820190508181036000830152611fb881611f7c565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611ff5602083611f1c565b915061200082611fbf565b602082019050919050565b6000602082019050818103600083015261202481611fe8565b905091905056fea26469706673582212205beae5b5994229f8ec3e18ab22ceb2781a6999d48c45f84435c4551559ba8f0d64736f6c63430008090033";

type TimeLockrConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimeLockrConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimeLockr__factory extends ContractFactory {
  constructor(...args: TimeLockrConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimeLockr> {
    return super.deploy(overrides || {}) as Promise<TimeLockr>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TimeLockr {
    return super.attach(address) as TimeLockr;
  }
  override connect(signer: Signer): TimeLockr__factory {
    return super.connect(signer) as TimeLockr__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeLockrInterface {
    return new utils.Interface(_abi) as TimeLockrInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeLockr {
    return new Contract(address, _abi, signerOrProvider) as TimeLockr;
  }
}