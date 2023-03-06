import { FUNC, NEW_STORE_VALUE, PROPOSAL_DESCRIPTION, MIN_DELAY } from "../helper-hardhat-config";
import { ethers } from "hardhat"
import { moveTime } from '../utils/move-time' 
import { moveBlocks } from '../utils/move-blocks' 

export async function queueAndExecute(){
    const args = [NEW_STORE_VALUE];
    const box = await ethers.getContract("Box");
    const encodedFunctionCall = box.interface.encodeFunctonData(FUNC, args);
    const descriptionHash = ethers.utils.keccack256(
        ethers.utils.toUtf8Bytes(PROPOSAL_DESCRIPTION)
    );
    
    const governor = await ethers.getContract("GovernorContract")
    console.log("Queueing....")
    const queueTx = await governor.queue(
        [box.address],
        [0],
        [encodedFunctionCall],
        descriptionHash
    );
    await queueTx.await(1)

    if(developmentChain.includes(network.name)) {
        await moveTime(MIN_DELAY + 1);
        await moveBlocks(1);
    }
}

queueAndExecute(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1);
    });
