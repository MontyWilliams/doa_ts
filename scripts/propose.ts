import { ethers, network } from 'hardhat'
import { FUNC, NEW_STORE_VALUE, PROPOSAL_DESCRIPTION, VOTING_DELAY } from '../helper-hardhat-config.ts'
import { moveBlocks } from "../utils/move-blocks";

export async function propose(args: any[], functionToCall: string, proposalDescription: string) {
    const governor = await ethers.getContract("GovernorContract");
    const box = await ethers.getContract("Box");
    const encodedFunctionCall = box.interface.encodeFunctionData(
        functionToCall,
        args
    );
    console.log(`Proposing ${functionToCall} on ${box.address} with ${args}`)
    console.log(`Proposal Description \n ${proposalDescription}`)
    const proposeTx = await governor.propose(
        [box.address],
        [0],
        [encodedFunctionCall],
        proposalDescription
    );
    proposeTx.wait(1)
    if(developmentChains.includes(network.name)){
        await moveBlocks(VOTING_DELAY + 1)
    }
}

propose([NEW_STORE_VALUE], FUNC, PROPOSAL_DESCRIPTION)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
