import { ethers } from 'hardhat'
import { FUNC, NEW_STORE_VALUE, PROPOSAL_DESCRIPTION } from '../helper-hardhat-config.ts'

export async function propose(args: any[], functionToCall: string, proposalDescription: string) {
    const governor = await ethers.getContract("GovernorContract");
    const box = await ethers.getContract("Box");
    const encodedFunctionCall = box.interface.encodeFunctionData(
        functionToCall,
        args
    );
    console.log(`Proposing ${functionToCall} on ${box.address} with ${args}`)
    console.log(`Proposal Description \n ${proposalDescription}  `)
    
}

propose([NEW_STORE_VALUE], FUNC, PROPOSAL_DESCRIPTION)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
