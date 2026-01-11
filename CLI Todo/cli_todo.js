import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos = [];

const showmenu = ()=>{
    console.log("\n1. Add a task bitch!")
    console.log("2. View a task bitch!")
    console.log("3. Get the fuck off!")
    rl.question("\nChoosed option = ",handleInput)
}

const handleInput = (option)=>{
    if(option === "1"){
        rl.question("Enter the task = ",(task)=>{
            todos.push(task);
            console.log("\nTask added = ",task);
            showmenu();
        })
    }else if(option === "2"){
        console.log("\nYour todos contain");
        todos.forEach((task,index)=>{
            console.log(`${index+1}) ${task}`);
        }) 
        showmenu();
    }else if(option === "3"){
        console.log("bye bye bitch!");
        rl.close(); 
    }else{
        console.log("Invalid");
        showmenu();
    }
}

showmenu();