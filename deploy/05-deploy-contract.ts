import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat/types"
import { ethers } from "hardhat"

const deployContract: DeployerFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    // @ts-ignore
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log, get } = deployoments;
    const { deployer } = await getNamedAccounts();
    log("Deploying contract....")
    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
    })
    const timeLock = await ethers.getContract("TimeLock");
    const boxContract = await ethers.getContract("Box, box.address")
    const transferOwnerTx = await boxContract.transferOwnership(timeLock.address);
    await transferOwnerTx.wait(1);
    log("Congradulations all that sh*& works")
}
