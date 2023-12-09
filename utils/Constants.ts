import { ZeroAddress } from 'ethers';

export enum DeploymentNetwork {
  Mainnet = 'mainnet',
  Xrp = 'xrp',
  ArbitrumOne = 'arbitrum-one',
  Optimism = 'optimism',
  Base = 'base',
  Scroll = 'scroll',
  Linea = 'linea',
  Sepolia = 'sepolia',
  OptimismSepolia = 'optimism-sepolia',
  OptimismGoerli = 'optimism-goerli',
  BaseGoerli = 'base-goerli',
  ArbitrumGoerli = 'arbitrum-goerli',
  PolygonMumbai = 'polygon-mumbai',
  ScrollSepolia = 'scroll-sepolia',
  LineaGoerli = 'linea-goerli',
  Hardhat = 'hardhat'
}

export const ZERO_ADDRESS = ZeroAddress;
export const ZERO_BYTES = '0x';
export const ZERO_BYTES32 = '0x0000000000000000000000000000000000000000000000000000000000000000';

export const NO_EXPIRATION = 0n;
