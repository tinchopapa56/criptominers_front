import Axios from "axios"
require('dotenv').config({path:".env"});
import { v4 as uuidv4 } from 'uuid';


const { uniqueNamesGenerator } = require('unique-names-generator');

const key = process.env.REACT_APP_KEY;
const secret = process.env.REACT_APP_SECRET;

export const uploadJSON = ()=>{
    const findPower = ()=>{
        const random = Math.floor(Math.random() * 350)
        return random;
    }
    const findRarity = (power)=>{
        if (power <= 199){
            return 1;
        } else if (power >= 200 && power <= 299){
            return 2;
        } else if (power >= 300){
            return 3;
        } 
    }

    const randomName = uniqueNamesGenerator(); 
    const randomUUID = uuidv4();
    const randomPower = findPower();
    const givenRarity = findRarity(randomPower);

    const randomDataToNFT = {
        name: randomName,
        uuid: randomUUID,
        power: randomPower,
        rarity: givenRarity,
        // owner: //tiene que venir del signer
    }



    return (
        //dice que manda un json body
        Axios.post("`https://api.pinata.cloud/pinning/pinJSONToIPFS`", randomDataToNFT, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then((res)=>{
            return {
                success:true,
                pinataURL: "https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash,
            }
        })
        .catch((err)=>{  
            console.log(err)
            return {
                success: false,
                pinataURL: err.message,
            }
        })
    )
};
export const uploadFile = ()=>{

}