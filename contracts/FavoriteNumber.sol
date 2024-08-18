// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
contract FavoriteNumber {
uint256 private favoriteNumber;
function setFavoriteNumber(uint256 _number) public {
favoriteNumber = _number;
}
function getFavoriteNumber() public view returns (uint256) {
return favoriteNumber;
}
}