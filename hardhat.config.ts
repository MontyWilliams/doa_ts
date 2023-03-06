 import "hardhat-deploy";
 import "@nomiclabs/hardhat-ethers";
 import "@typechain/hardhat";
import "hardhat-deploy"
  import {HardhatUserConfig } from "hardhat/config";

/** @type import('hardhat/config').HardhatUserConfig */

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.17",
  namedAccounts: {
    deployer: {
      default: 0,
    }
  }, 
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true
    },
    localhost: {
      chainId: 31337,
      allowUnlimitedContractSize: true
    },
  }
}

export default config;
