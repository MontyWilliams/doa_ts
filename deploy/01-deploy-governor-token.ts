import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";
import {ethers} from "hardhat";

const deployGovernanceToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const {getNamedAccounts, deployments, network } = hre;
    const {deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    log("Deploying Governance Token...");
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true,
    });
    log(`Deployed governance token to address ${governanceToken.address} Bro Bro`)
};

const delegate = async (governanceTokenAddrsss: string, deletedAccount: string) => {
    const governanceToken = await ethers.getContracdtAt("GovernaceToken", governanceTokenAddrsss);
}

export default deployGovernanceToken
