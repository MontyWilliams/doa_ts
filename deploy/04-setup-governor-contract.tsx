import { HardhatRuntimeEnvironmrnt } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { ethers} from "ethers"
import { ADDRESS_ZERO } from "../helper-hardhat-config.ts"

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
    const proposerRole = await timeLock.PROPOSER_ROLE();
    const executorRole = await timeLock.EXECUTOR_ROLE();
    const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE();

    const proposerTx = await timeLock.grantRole(proposerRole, governor.address);
    await proposerTx.wait(1);
    const executorTx = await timeLock.grantRole(executorRole, ADDRESS_ZERO);
    await executorTx.wait(1);
    const revokeTx = await timeLock.revokeRole(adminRole, deployer);
    await revokeTx.wait(1);
    
};
export default setupContracts; 
