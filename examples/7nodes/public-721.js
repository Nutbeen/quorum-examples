a = eth.accounts[0]
web3.eth.defaultAccount = a;

// abi and bytecode generated from simplestorage.sol:
// > solcjs --bin --abi simplestorage.sol
var myartsaleContract = web3.eth.contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CANNOT_TRANSFER_TO_ZERO_ADDRESS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NOT_CURRENT_OWNER","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_approved","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]);
var myartsale = myartsaleContract.new(
	{
		from: web3.eth.accounts[0],
		data: '0x60806040523480156200001157600080fd5b5060016000806301ffc9a760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555060016000806380ac58cd60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600080635b5e139f60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555033600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280601081526020017f4672616e6b2773204172742053616c6500000000000000000000000000000000815250600590805190602001906200019392919062000239565b506040518060400160405280600381526020017f464153000000000000000000000000000000000000000000000000000000000081525060069080519060200190620001e192919062000239565b5060016000806380ac58cd60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550620002e8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200027c57805160ff1916838001178555620002ad565b82800160010185558215620002ad579182015b82811115620002ac5782518255916020019190600101906200028f565b5b509050620002bc9190620002c0565b5090565b620002e591905b80821115620002e1576000816000905550600101620002c7565b5090565b90565b6137a080620002f86000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063c87b56dd11610071578063c87b56dd146106c4578063d3fc98641461076b578063e985e9c51461080e578063f2fde38b1461088a578063f3fe3bc3146108ce57610116565b80638da5cb5b146104e457806395d89b411461052e578063a22cb465146105b1578063b88d4fde1461060157610116565b806323b872dd116100e957806323b872dd146102bf57806342842e0e1461032d5780636352211e1461039b57806370a0823114610409578063860d248a1461046157610116565b806301ffc9a71461011b57806306fdde0314610180578063081812fc14610203578063095ea7b314610271575b600080fd5b6101666004803603602081101561013157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610951565b604051808215151515815260200191505060405180910390f35b6101886109b8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c85780820151818401526020810190506101ad565b50505050905090810190601f1680156101f55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61022f6004803603602081101561021957600080fd5b8101908080359060200190929190505050610a5a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102bd6004803603604081101561028757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bda565b005b61032b600480360360608110156102d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110ec565b005b6103996004803603606081101561034357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116d2565b005b6103c7600480360360208110156103b157600080fd5b81019080803590602001909291905050506116f2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61044b6004803603602081101561041f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061183d565b6040518082815260200191505060405180910390f35b61046961195c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104a957808201518184015260208101905061048e565b50505050905090810190601f1680156104d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104ec611995565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105366119bb565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561057657808201518184015260208101905061055b565b50505050905090810190601f1680156105a35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105ff600480360360408110156105c757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611a5d565b005b6106c26004803603608081101561061757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561067e57600080fd5b82018360208201111561069057600080fd5b803590602001918460018302840111640100000000831117156106b257600080fd5b9091929391929390505050611b5e565b005b6106f0600480360360208110156106da57600080fd5b8101908080359060200190929190505050611bb5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610730578082015181840152602081019050610715565b50505050905090810190601f16801561075d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61080c6004803603606081101561078157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107c857600080fd5b8201836020820111156107da57600080fd5b803590602001918460018302840111640100000000831117156107fc57600080fd5b9091929391929390505050611dad565b005b6108706004803603604081101561082457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611f39565b604051808215151515815260200191505060405180910390f35b6108cc600480360360208110156108a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611fcd565b005b6108d66122c9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109165780820151818401526020810190506108fb565b50505050905090810190601f1680156109435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a505780601f10610a2557610100808354040283529160200191610a50565b820191906000526020600020905b815481529060010190602001808311610a3357829003601f168201915b5050505050905090565b600081600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090610b9d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b62578082015181840152602081019050610b47565b50505050905090810190601f168015610b8f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b8060006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610cd35750600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6040518060400160405280600681526020017f303033303033000000000000000000000000000000000000000000000000000081525090610daf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610d74578082015181840152602081019050610d59565b50505050905090810190601f168015610da15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090610ef1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610eb6578082015181840152602081019050610e9b565b50505050905090810190601f168015610ee35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303038000000000000000000000000000000000000000000000000000081525090611036576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ffb578082015181840152602081019050610fe0565b50505050905090810190601f1680156110285780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50856002600087815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550848673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050505050565b8060006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806111bd57503373ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b8061124e5750600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6040518060400160405280600681526020017f30303330303400000000000000000000000000000000000000000000000000008152509061132a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112ef5780820151818401526020810190506112d4565b50505050905090810190601f16801561131c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f30303330303200000000000000000000000000000000000000000000000000008152509061146c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611431578082015181840152602081019050611416565b50505050905090810190601f16801561145e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f3030333030370000000000000000000000000000000000000000000000000000815250906115b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561157557808201518184015260208101905061155a565b50505050905090810190601f1680156115a25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f3030333030310000000000000000000000000000000000000000000000000000815250906116be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611683578082015181840152602081019050611668565b50505050905090810190601f1680156116b05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506116c98686612302565b50505050505050565b6116ed838383604051806020016040528060008152506123b7565b505050565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090611837576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117fc5780820151818401526020810190506117e1565b50505050905090810190601f1680156118295780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f30303330303100000000000000000000000000000000000000000000000000008152509061194b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156119105780820151818401526020810190506118f5565b50505050905090810190601f16801561193d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061195582612c50565b9050919050565b6040518060400160405280600681526020017f303138303032000000000000000000000000000000000000000000000000000081525081565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a535780601f10611a2857610100808354040283529160200191611a53565b820191906000526020600020905b815481529060010190602001808311611a3657829003601f168201915b5050505050905090565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b611bae85858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506123b7565b5050505050565b606081600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090611cf8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cbd578082015181840152602081019050611ca2565b50505050905090810190601f168015611cea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600760008481526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611da05780601f10611d7557610100808354040283529160200191611da0565b820191906000526020600020905b815481529060010190602001808311611d8357829003601f168201915b5050505050915050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303138303031000000000000000000000000000000000000000000000000000081525090611eda576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611e9f578082015181840152602081019050611e84565b50505050905090810190601f168015611ecc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50611ee58484612c99565b611f338383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612f51565b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f3031383030310000000000000000000000000000000000000000000000000000815250906120fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156120bf5780820151818401526020810190506120a4565b50505050905090810190601f1680156120ec5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303138303032000000000000000000000000000000000000000000000000000081525090612208576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121cd5780820151818401526020810190506121b2565b50505050905090810190601f1680156121fa5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040518060400160405280600681526020017f303138303031000000000000000000000000000000000000000000000000000081525081565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050612343826130c0565b61234d8183613161565b6123578383613360565b818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b8160006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061248857503373ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b806125195750600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6040518060400160405280600681526020017f3030333030340000000000000000000000000000000000000000000000000000815250906125f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125ba57808201518184015260208101905061259f565b50505050905090810190601f1680156125e75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5083600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090612737576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156126fc5780820151818401526020810190506126e1565b50505050905090810190601f1680156127295780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006001600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f30303330303700000000000000000000000000000000000000000000000000008152509061287b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612840578082015181840152602081019050612825565b50505050905090810190601f16801561286d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303031000000000000000000000000000000000000000000000000000081525090612989576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561294e578082015181840152602081019050612933565b50505050905090810190601f16801561297b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506129948787612302565b6129b38773ffffffffffffffffffffffffffffffffffffffff1661358c565b15612c465760008773ffffffffffffffffffffffffffffffffffffffff1663150b7a02338b8a8a6040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612a93578082015181840152602081019050612a78565b50505050905090810190601f168015612ac05780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015612ae257600080fd5b505af1158015612af6573d6000803e3d6000fd5b505050506040513d6020811015612b0c57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146040518060400160405280600681526020017f303033303035000000000000000000000000000000000000000000000000000081525090612c43576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612c08578082015181840152602081019050612bed565b50505050905090810190601f168015612c355780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505b5050505050505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303031000000000000000000000000000000000000000000000000000081525090612da6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612d6b578082015181840152602081019050612d50565b50505050905090810190601f168015612d985780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f303033303036000000000000000000000000000000000000000000000000000081525090612ee6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612eab578082015181840152602081019050612e90565b50505050905090810190601f168015612ed85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50612ef18282613360565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b81600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600681526020017f303033303032000000000000000000000000000000000000000000000000000081525090613092576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561305757808201518184015260208101905061303c565b50505050905090810190601f1680156130845780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50816007600085815260200190815260200160002090805190602001906130ba9291906136c5565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461315e576002600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b50565b8173ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f30303330303700000000000000000000000000000000000000000000000000008152509061329f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613264578082015181840152602081019050613249565b50505050905090810190601f1680156132915780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050565b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600681526020017f30303330303600000000000000000000000000000000000000000000000000008152509061349f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613464578082015181840152602081019050613449565b50505050905090810190601f1680156134915780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506135456001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546135d790919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91506000801b82141580156135ce5750808214155b92505050919050565b60008183019050828110156040518060400160405280600681526020017f3030383030310000000000000000000000000000000000000000000000000000815250906136be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613683578082015181840152602081019050613668565b50505050905090810190601f1680156136b05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061370657805160ff1916838001178555613734565b82800160010185558215613734579182015b82811115613733578251825591602001919060010190613718565b5b5090506137419190613745565b5090565b61376791905b8082111561376357600081600090555060010161374b565b5090565b9056fea264697066735822122047e2b1dfa3568853395357397be8364735b01a35ec3b58bf8aa69c673483f56864736f6c63430006020033',
		gas: '4700000'
	}, function (e, contract){
		console.log(e, contract);
		if (typeof contract.address !== 'undefined') {
			console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
		}
	})