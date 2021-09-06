# ConsenSys Final Project

## Voting Contract Example Workflow

1. Users will have to register themselves somehow on the contract

2. They have to identify which campaign their voting on

3. They'll have to submit a vote for that campaign.

4. They can't vote twice for a single campaign 


---- 

1. Each user if registered must be present within a mapping. If it is present then it will have a registration date.

```solidity
mapping(address => uint256) public users;


// To get registration timestamp
function _now() internal view returns (uint256) {
    return block.timestamp;
}
```

The registration process will ensure that the user (address) is entered within the mapping. I also have to make sure that in the mapping that user is not already present so I have to verify the absence of the registration date.


2. I need to figure out if the campaigns are predefined or if the contract owner can add them at will.

```solidity
mapping(uint256 => mapping(address => uint256)) public votes;

// Campaign X voted from 0x... with evaluation Y
```
This way I can track user votes for a specific campaign.

If I want, I can keep track, each time a vote is taken, of the total vote for each campaign.
```solidity
mapping(uint256 => uint256) public totalCampaignVotes;
```

3. Users will need to call the following function to vote.

```solidity
function voteCampaign(uint256 _campaignId, uint256 _value) public alreadyRegistered {
    require(votes[_campaignId][msg.sender] != 0, "Already voted this campaign");

    votes[_campaignId][msg.sender] = _value;
    totalCampaignVotes[_campaignId] += _value; 
}
```
