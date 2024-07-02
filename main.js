#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const smsHeading = console.log((chalk.bold.blueBright `
S   S  TTTTT   U   U  DDDDD   EEEEE  N   N  TTTTT
S        T     U   U  D   D   E      NN  N    T
SSSS     T     U   U  D   D   EEEE   N N N    T
   S     T     U   U  D   D   E      N  NN    T
S   S    T     UUUU   DDDDD   EEEEE  N   N    T 
`));
const man = console.log((chalk.bold.redBright `
M   M  AAAAA  N   N  AAAAA  GGGGG  EEEEE  M   M  EEEEE  N   N  TTTTT
MM MM  A   A  NN  N  A   A  G      E      MM MM  E      NN  N    T
M M M  AAAAA  N N N  AAAAA  G GGG  EEEE   M M M  EEEE   N N N    T
M   M  A   A  N  NN  A   A  G   G  E      M   M  E      N  NN    T
M   M  A   A  N   N  A   A  GGGGG  EEEEE  M   M  EEEEE  N   N    T 
`));
const sys = console.log((chalk.bold.greenBright `
SSSS  Y   Y  SSSS  TTTTT EEEE  M   M
S      Y Y   S       T   E     MM MM
SSSS    Y    SSSS    T   EEEE  M M M
   S    Y       S    T   E     M   M
SSSS    Y    SSSS    T   EEEE  M   M
`));
let students = [];
let condition = true;
function displayStudentdetails(studentData, additionalInfo = {}) {
    console.log("STUDENT NAME:", studentData.s_name);
    console.log("FATHER NAME:", studentData.f_name);
    console.log("ROLL NO.:", studentData.r_no);
    console.log("CONTACT:", studentData.c_no);
    console.log("EMAIL:", studentData.email);
    console.log("GENDER:", studentData.gender);
    console.log("QUALIFICATION:", studentData.qua);
    console.log("ADDRESS:", studentData.address);
    // DISPLAY ADDITIONAL INFORMATION IF PROVIDED
    if (additionalInfo.marks != undefined) {
        console.log("OBTAIN MARKS:", additionalInfo.marks);
    }
    if (additionalInfo.cgpa != undefined) {
        console.log("OBTAIN CGPA:", additionalInfo.cgpa);
    }
    console.log("RANDOM ID:", studentData.randomId);
}
async function studentManagement() {
    while (condition) {
        let studentData = await inquirer.prompt([{
                name: "s_name",
                type: "input",
                message: (chalk.magenta("Enter your name")),
            },
            {
                name: "f_name",
                type: "input",
                message: (chalk.magenta("Enter your father name")),
            },
            {
                name: "r_no",
                type: "input",
                message: (chalk.magenta("Enter your roll no.")),
            },
            {
                name: "c_no",
                type: "input",
                message: (chalk.magenta("Enter your contact no.")),
            },
            {
                name: "email",
                type: "input",
                message: (chalk.magenta("Enter your Email")),
            },
            {
                name: "gender",
                type: "list",
                message: (chalk.magenta("Select an option")),
                choices: ["Male", "Female", "Other"],
            },
            {
                name: "address",
                type: "input",
                message: (chalk.magenta("Enter your Address")),
            },
            {
                name: "qua",
                type: "list",
                message: (chalk.magenta("Select an option")),
                choices: ["Matric", "Intermediate", "Graduation", "Masters"]
            },
        ]);
        // Async an random ID
        studentData.randomId = Math.floor(Math.random() * 5000) + 1000;
        switch (studentData.qua) {
            case "Matric":
                let totalMarks = 850;
                let obtainedMarksMatric = await inquirer.prompt([{ message: (chalk.green("Enter your obtained marks out of 850")),
                        name: "ObtainMarks",
                        type: "number",
                    }]);
                let percentage = (obtainedMarksMatric.ObtainMarks / totalMarks) * 100;
                displayStudentdetails(studentData, { marks: obtainedMarksMatric.ObtainMarks, percentage });
                break;
            case "Intermediate":
                let totalMarksInter = 1100;
                let obtainedMarksInter = await inquirer.prompt([{ message: (chalk.green("Enter your obtained marks out of 1100")),
                        name: "ObtainMarks",
                        type: "number",
                    }]);
                let percentageInter = (obtainedMarksInter.ObtainMarks / totalMarksInter) * 100;
                displayStudentdetails(studentData, { marks: obtainedMarksInter.ObtainMarks, percentageInter });
                break;
            case "Graduation":
                let gpa = await inquirer.prompt([{
                        name: "FirstSemester",
                        type: "number",
                        message: (chalk.yellow("Enter your 1st Semester GPA")),
                    },
                    {
                        name: "SecondSemester",
                        type: "number",
                        message: (chalk.yellow("Enter your 2nd Semester GPA")),
                    },
                    {
                        name: "ThirdSemester",
                        type: "number",
                        message: (chalk.yellow("Enter your 3rd Semester GPA")),
                    },
                    {
                        name: "FourthSemester",
                        type: "number",
                        message: (chalk.yellow("Enter your 4th Semester GPA")),
                    },
                    {
                        name: "FifthSemester",
                        type: "number",
                        message: (chalk.yellow("Enter your 5th Semester GPA")),
                    },
                    {
                        name: "SixthSemester",
                        type: "number",
                        message: (chalk.yellow("Enter your 6th Semester GPA")),
                    },
                    {
                        name: "SeventhSemester",
                        type: "number",
                        message: (chalk.yellow("Enter your 7th Semester GPA")),
                    },
                    {
                        name: "EighthSemester",
                        type: "number",
                        message: (chalk.yellow("Enter your 8th Semester GPA")),
                    },
                ]);
                let totalGPA = gpa.FirstSemester + gpa.SecondSemester + gpa.ThirdSemester + gpa.FourthSemester + gpa.FifthSemester + gpa.SixthSemester + gpa.SeventhSemester + gpa.EighthSemester;
                let cgpa = totalGPA / 8;
                displayStudentdetails(studentData, { cgpa });
                students.push(studentData);
                break;
            case "Masters":
                let GPA = await inquirer.prompt([{
                        name: "FirstSemester",
                        type: "number",
                        message: (chalk.magentaBright("Enter your 1st Semester GPA")),
                    },
                    {
                        name: "SecondSemester",
                        type: "number",
                        message: (chalk.magentaBright("Enter your 2nd Semester GPA")),
                    },
                    {
                        name: "ThirdSemester",
                        type: "number",
                        message: (chalk.magentaBright("Enter your 3rd Semester GPA")),
                    },
                    {
                        name: "FourthSemester",
                        type: "number",
                        message: (chalk.magentaBright("Enter your 4th Semester GPA")),
                    },
                ]);
                let sum = GPA.FirstSemester + GPA.SecondSemester + GPA.ThirdSemester + GPA.FourthSemester;
                let p_cgpa = sum / 4;
                displayStudentdetails(studentData, { cgpa: p_cgpa });
                students.push(studentData);
                break;
        }
        let continuePrompt = await inquirer.prompt([
            { name: "continue", type: "confirm", message: (chalk.red("Do you want to add another student?")) },
        ]);
        condition = continuePrompt.continue; // Update the loop condition based on user input
    }
    console.log(chalk.bold.blue(("Exiting the program. Goodbye!")));
    process.exit(0);
}
// Start the student management function
studentManagement();
