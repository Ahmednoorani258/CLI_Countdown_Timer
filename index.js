#! /usr/bin/env node
import inquirer from "inquirer";
async function timer() {
    let input = await inquirer.prompt({
        name: "timer",
        type: "number",
        message: "Pls Enter The Count Down Time in Seconds{1-60}",
        validate: (value => {
            if (value < 1 || value > 60) {
                return "Please Enter a Number Between 1 and 60";
            }
            else {
                return true;
            }
        })
    });
    let count = 0;
    let starttime = setInterval(function () {
        count++;
        let cond = count <= 9 ? `00.0${count}` : `00.${count}`;
        console.log(cond);
        if (count === input.timer) {
            clearInterval(starttime);
        }
    }, 1000);
}
timer();
