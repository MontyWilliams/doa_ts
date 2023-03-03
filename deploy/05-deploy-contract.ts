import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat/types"
import { ethers } from "hardhat"

const deployContract: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    // @ts-ignore
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log, get } = deployments;
    const { deployer } = await getNamedAccounts();
    log("Deploying contract....")
    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
    })
    const boxContract = await ethers.getContract("Box", deployer)
    const timeLock = await ethers.getContract("TimeLock");
    const transferOwnerTx = await boxContract.transferOwnership(timeLock.address);
    await transferOwnerTx.wait(1);
    log("Congradulations all that sh*& works")
}
export default deployContract
