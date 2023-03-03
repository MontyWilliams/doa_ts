import { ethers } from 'hardhat'
import { FUNC, NEW_STORE_VALUE } from '../helper-hardhat-configuration.ts'

export async function propose(args: any[], functionToCall: string) {
    const governor = await ethers.getContract("GovernorContracts");
    const box = await ethers.getContract("Box");
    const encodedFuncitonCall = box.interface.encodeFunctionData(
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
