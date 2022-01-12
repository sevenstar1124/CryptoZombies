const CryptoZombies = artifacts.require("CryptoZombies");

module.exports = async (deployer) => {
	await deployer.deploy(CryptoZombies)
}
