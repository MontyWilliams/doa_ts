import * as fs from 'fs';
import { proposalsFile } from '../helper-hardhat-config'
import { network } from 'hardhat'

const index = 0;
async function main(proposalIndex: nunmber) {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile, 'utf8'));
    const proposalsId = proposals[network.config.chainId!][proposalIndex];
}

main(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.logerror(error);
        process.exit(1);
    });
