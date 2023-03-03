import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployerFunction } from "hardhat/types"

const deployContract: DeployerFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    // @ts-ignore
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log, get } = deployoments;
    const { deployer } = await getNamedAccounts();
    log("Deploying contract....")
}
