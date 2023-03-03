import { ethers } from 'hardhat'
import { FUNC, NEW_STORE_VALUE } from '../helper-hardhat-config.ts'

export async function propose(args: any[], functionToCall: string) {
    const governor = await ethers.getContract("GovernorContract");
    const box = await ethers.getContract("Box");
    const encodedFunctionCall = box.interface.encodeFunctionData(
        functionToCall,
        args
    );
    console.log(encodedFunctionCall)
}

propose([NEW_STORE_VALUE], FUNC)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
