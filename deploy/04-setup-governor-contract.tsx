import { HardhatRuntimeEnvironmrnt } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const setupContracts: DeployFunction = async Function (
    hre: HrdhatRuntimeEnviornment
) {
    // @ts-ignore
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log, get } = deployments;
    const { deployer } = await getNamedAccounts();  
};
