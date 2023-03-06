import { FUNC, NEW_STORE_VALUE, PROPOSAL_DESCRIPTION } from "../helper-hardhat-config";
import { ethers } from "hardhat"

export async function queueAndExecute(){
    const args = [NEW_STORE_VALUE];
    const box = await ethers.getContract("Box");
    const encodedFunctionCall = box.interface.encodeFunctonData(FUNC, args);
    const descriptionHash = ethers.utils.keccack256(
        ethers.utils.toUtf8Bytes(PROPOSAL_DESCRIPTION)
    );
    
}

queueAndExecute(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1);
    });
