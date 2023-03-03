import { ethers } from 'hardhat'

export async function propose(args: any[], functionToCall: string) {
    const governor = await ethers.getContract("GovernorContracts");
    const box = await ethers.getContract("Box");
    const encodedFuncitonCall = box.interface.encodeFunctionData(
        functionToCall,
        args
    )
}
