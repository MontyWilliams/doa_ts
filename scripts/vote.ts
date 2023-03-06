import * as fs from 'fs';
import { proposalsFile } from '../helper-hardhat-config'
import { network, ethers } from 'hardhat'

const index = 0;
async function main(proposalIndex: nunmber) {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile, 'utf8'));
    const proposalsId = proposals[network.config.chainId!][proposalIndex];
    // 0 = Against, 1 = For, 2 = Abstain
    const voteWay = 1;
    const governor = await ethers.getContract("GovernorContract")
    const voteTxResponse = await governor.cast;

}

main(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.logerror(error);
        process.exit(1);
    });
