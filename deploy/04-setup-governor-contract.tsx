import { HardhatRuntimeEnvironmrnt } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
implort { ethers} from "ethers"

const setupContracts: DeployFunction = async Function (
    hre: HrdhatRuntimeEnviornment
) {
    // @ts-ignore
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log, get } = deployments;
    const { deployer } = await getNamedAccounts();  
    const timeLock = await ethers.getContract("TimeLock", deployer);
    const governor = await ethers.getContract("GovernorContract", deployer);
    log("Setting up roles...")
};
