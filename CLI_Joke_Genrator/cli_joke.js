import https from "https";
import chalk from "chalk";

const joke = ()=>{
    const url = "https://official-joke-api.appspot.com/random_joke";

    https.get(url , (res)=>{
        let data = "";
        res.on('data' ,(chunk)=>{
            data = data + chunk;
        })

        res.on('end' ,()=>{
            const joke = JSON.parse(data);
            console.log(chalk.red(joke.type));
            console.log(`${joke.setup}`);
            console.log(`${joke.punchline}`);
        })

        res.on('err' ,()=>{
            console.log(`its a error, ${err.message}`);
        })
    })
}

joke();