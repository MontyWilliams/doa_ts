import { network } from 'hardhat';

export async function moveTime(amount: number) {
    console.log("Moving time...");
    await network.provide.send("evm_increaseTime" [amount])
    console.log(`We did it! we have moved time ${amount} seconds! YEAH!`)
}
