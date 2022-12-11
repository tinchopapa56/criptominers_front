import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
// require('dotenv').config({path:" .env"});
import { uniqueNamesGenerator } from "unique-names-generator";

// const key = process.env.REACT_APP_KEY;
// const secret = process.env.REACT_APP_SECRET;
const key = "90cbd29db8fa331a7612"
const secret = "2fd2ef4d5e3024d69eb8fe8be8f202e73ce8df91fcb2ac9a0e75efbf91742ab4"


export const uploadJSON = async ()=>{
    console.log("cool")
    // const findPower = ()=>{
    //     const random = Math.floor(Math.random() * 350)
    //     return random;
    // }
    // const findRarity = (power)=>{
    //     if (power <= 199){
    //         return 1;
    //     } else if (power >= 200 && power <= 299){
    //         return 2;
    //     } else if (power >= 300){
    //         return 3;
    //     } 
    // }

    // const randomName = uniqueNamesGenerator(); 
    
    const randomName = "jorgito"; 
    const randomUUID = uuidv4();
    // const randomPower = findPower();
    // const givenRarity = findRarity(randomPower);
    const randomPower = 151;
    const givenRarity = 2;

    const randomDataToNFT = {
        name: randomName,
        uuid: randomUUID,
        power: randomPower,
        rarity: givenRarity,
        // owner: //tiene que venir del signer
    }

    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(url, randomDataToNFT, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

    });
};