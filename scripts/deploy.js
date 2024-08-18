async function main() {
    const FavoriteNumber = await
    ethers.getContractFactory("FavoriteNumber");
    const favoriteNumber = await FavoriteNumber.deploy();
    await favoriteNumber.waitForDeployment();
    console.log(`FavoriteNumber deployed to:",
    ${favoriteNumber.target}`);
    }
    main()
    .then(() => process.exit(0))
    .catch(error => {
    console.error(error);
    process.exit(1);
    });

   // 0x5FbDB2315678afecb367f032d93F642f64180aa3