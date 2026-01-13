import https from "https";
import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
}) 

// const apiKey = 'c5e83ea9a8425da6a66df8bf'
const url = 'https://v6.exchangerate-api.com/v6/c5e83ea9a8425da6a66df8bf/latest/USD'

const convert = (amount,rate)=>{
    return (amount*rate).toFixed(2);
}

https.get(url , (res)=>{

    let data = "";
    res.on('data',(chunk)=>{
        data = data + chunk;
    })

    res.on('end',()=>{
        const r = JSON.parse(data).conversion_rates;
        rl.question('Enter the amount in USD: ', (amount)=>{
            rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (curr)=>{
                const rate = r[curr.toUpperCase()]
                
                if(rate){
                    console.log(`${amount} USD is ${convert(amount,rate)} in ${curr}`);
                }else{
                    console.log("Invalid currency");
                }
                rl.close();
            })
        })
    })
})