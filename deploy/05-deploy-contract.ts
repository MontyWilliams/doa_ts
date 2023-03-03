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
    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
    })
    
}
