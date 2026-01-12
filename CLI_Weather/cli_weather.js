import https from "https";
import readline from "readline/promises";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
}) 

const city = await rl.question("Enter city: ");

const weather = ()=>{
    const url = `https://api.weatherapi.com/v1/current.json?key=1e85cb9807da43378c2183441261201&q=${city}`;

    https.get(url , (res)=>{
        let data = "";
        res.on('data' ,(chunk)=>{
            data = data + chunk;
        })

        res.on('end' ,()=>{
            const w = JSON.parse(data);
            console.log("City:", w.location.name);
            console.log("Temp:", w.current.temp_c, "°C");
            console.log("Condition:", w.current.condition.text);
            rl.close();
        })

        res.on('err' ,()=>{
            console.log(`its a error, ${err.message}`);
        })
    })
}

weather();
