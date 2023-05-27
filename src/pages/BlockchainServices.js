import Web3 from "web3";
import Soulbound from "./abi/Soulbound.json";
import loanabi from "./abi/Loans.json";
import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const AGRI_FUND = "0xF35B38aC053b0d7b956a924aE2A54Dc38C9B0bd7";

const LOAN = "0xFb493e57c37A336590Ffd97F9131cD7ab41BBF33";

export const ADDLOAN = async ({
  farmername,
  farmeraadhaar,
  loanamount,
  reasonforloan,
}) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(LOAN, loanabi, signer);
  const tokenId = await Role.applyLoan(
    farmername,
    farmeraadhaar,
    loanamount,
    reasonforloan
  );
  // localStorage.setItem("mintdata", name, receiver, product, quantity, sender);
  console.log(tokenId);
  return tokenId;
};

export const GETLOAN = async () => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(LOAN, loanabi, signer);
  const tokenId = await Role.getAllLoanDetails();
  return tokenId;
};

export const approvelo = async ({ aadhaarnumber }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(LOAN, loanabi, signer);
  const tokenId = await Role.approveLoan(aadhaarnumber);
  return tokenId;
};

export const verifylo = async ({ aadhaarnumber }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(LOAN, loanabi, signer);
  const tokenId = await Role.verifyLoan(aadhaarnumber);
  return tokenId;
};

export const MINTNFT = async ({
  name,
  receiver,
  product,
  quantity,
  sender,
}) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(AGRI_FUND, Soulbound, signer);
  const tokenId = await Role.mintNFT(name, receiver, product, quantity, sender);
  // localStorage.setItem("mintdata", name, receiver, product, quantity, sender);
  console.log(tokenId);
  return tokenId;
};

export const GETNFT = async ({ receiver }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(AGRI_FUND, Soulbound, signer);
  const tokenId = await Role.getNFTsByReceiver(receiver);
  return tokenId;
};
