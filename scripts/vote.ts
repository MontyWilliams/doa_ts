import * as fs from 'fs';
import { proposalsFile, VOTING_PERIOD } from '../helper-hardhat-config'
import { network, ethers } from 'hardhat'
import { moveBlocks } from '../utils/move-blocks'

const proposalIndex = 0;
async function main(proposalIndex: nunmber) {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile, 'utf8'));
    const proposalsId = proposals[network.config.chainId!][proposalIndex];
    // 0 = Against, 1 = For, 2 = Abstain
    const voteWay = 1;
    const governor = await ethers.getContract("GovernorContract")
    const reason = "The reason! the reasons that we live"
    const voteTxResponse = await governor.castVoteWithReason(
        proposalsId,
        voteWay,
        reason
    )
    await voteTxResponse.wait(1)
    if (developmentChain.includes(network.name)) {
        await moveBlocks(VOTING_PERIOD + 1);
    }
    conslole.log("Voted Broo, Broo, Yea, Yea")
}

main(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1);
    });
