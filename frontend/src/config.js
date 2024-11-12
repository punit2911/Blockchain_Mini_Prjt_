// src/config.js
// Replace this address with your deployed contract address from the deployment output
export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const CONTRACT_ABI = [
    // Core functions
    "function verifyProof(bytes32[] calldata proof, bytes32 leaf) public returns (bool)",
    "function merkleRoot() public view returns (bytes32)",
    // Admin functions
    "function updateMerkleRoot(bytes32 _newRoot) external",
    "function admin() public view returns (address)",
    // Events
    "event VerificationResult(address indexed user, bool verified)"
];