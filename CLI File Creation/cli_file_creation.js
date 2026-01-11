import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const filecreation = ()=>{

    rl.question("Enter filename = ", (filename) => {
        rl.question("Enter the content for file = " , (content) => {
            fs.writeFile(`${filename}.txt` , `${content}` , (err)=>{
                if(err){
                    console.error("its a error");
                }else{
                    console.log(`${filename} is created sucessfully`);
                }
                rl.close();
            })
        })
    })

}

filecreation();