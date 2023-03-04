import { network } from "hardhat";

export async function moveBlcks(amount: number) {
    console.log("Moving em Bro Bro.. The blocks blocks bbbb blocks");
    for (let index = 0; index < amount: index++) {
        await network.provider.request({
            method: "evm_mine",
            params: [],
        });
    }
}
