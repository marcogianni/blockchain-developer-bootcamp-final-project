import { useContract } from "./useContract";
import { address as ContractAddress, ABI } from "contracts/DAIToken";
import { address as ProxyContractAddress } from "contracts/SalariesProxy";

import { formatUnits } from "@ethersproject/units";

export const useDAI = () => {
  // using proxyAddress as address, and ABI Implementation
  const DAIContract = useContract(ContractAddress, ABI);

  const fetchAllowance = async (
    owner = process.env.REACT_APP_LIQUIDITY_PROVIDER_ADDRESS,
    spender = ProxyContractAddress
  ) => {
    const allowance = await DAIContract.allowance(owner, spender);
    return formatUnits(allowance, 18);
  };

  const approve = async () => {
    const approve = await DAIContract.approve(
      ProxyContractAddress,
      "1000000000000000000000000"
    );
  };

  const fetchBalanceOf = async (
    account = process.env.REACT_APP_LIQUIDITY_PROVIDER_ADDRESS
  ) => {
    const balance = await DAIContract.balanceOf(account);
    return formatUnits(balance, 18);
  };

  return {
    fetchAllowance,
    approve,
    fetchBalanceOf,
  };
};
