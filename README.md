## vlance smart contract

Vlance.sol is in the contracts folder.
It does 2 things:

1. verify proof generated by sismo. If verified, it'll emit an event to store the address of the user to indicate they are a member of predetermined github repos. 
2. store work experience info, which talentlayer does not currently have. 


Due to time constraints, these are very basic implementations. ideally, we'd like to allow the user to specify which github projects they have contributed to. 

The work experience info stored on chain is also super basic, only storing one entry, just for demo purposes. This enables people to attest True or False to the stated work experience. 