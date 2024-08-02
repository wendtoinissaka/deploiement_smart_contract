const readline = require('readline');
const { ethers } = require("hardhat");

// Fonction pour obtenir une entrée utilisateur via la ligne de commande
async function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => rl.question(question, answer => {
    rl.close();
    resolve(answer);
  }));
}

async function main() {
  const [deployer] = await ethers.getSigners();
  const favoriteNumberAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"; // Remplacer par l'adresse du contrat déployé
  const FavoriteNumber = await ethers.getContractFactory("FavoriteNumber");
  const favoriteNumber = FavoriteNumber.attach(favoriteNumberAddress);

  // Obtenez le numéro préféré actuel
  let currentNumber = await favoriteNumber.getFavoriteNumber();
  console.log("Numéro préféré actuel :", currentNumber.toString());

  // Demandez à l'utilisateur de saisir un nouveau numéro préféré
  const newFavoriteNumber = await getUserInput('Veuillez entrer votre numéro préféré : ');

  // Définissez un nouveau numéro préféré
  let tx = await favoriteNumber.setFavoriteNumber(newFavoriteNumber);
  await tx.wait();
  console.log("Numéro préféré mis à jour");

  // Obtenez le numéro préféré mis à jour
  currentNumber = await favoriteNumber.getFavoriteNumber();
  console.log("Numéro préféré mis à jour :", currentNumber.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
