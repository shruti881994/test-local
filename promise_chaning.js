// console('promise chaining');
const dohomework = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Homework DOne.');
        }, 2000)
    })
}
const revision = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Revision completed');
        }, 1500)
    })
}

const playgame = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res('Play Games');
        }, 1000)
    })
}

// to overcome this chaining we can use async await
// dohomework().then((result) => {
//     console.log(result);
//     return revision();
// }).then((result) => {
//     console.log(result);
//     return playgame();
// }).then((result) => {
//     console.log(result);
// }).catch((err) => console.log(err));

const dailyRoutine = async () => {
    try {
        let homeworkStatus = await dohomework();
        console.log(homeworkStatus);
        let revisionstatus = await revision();
        console.log(revisionstatus);
        let playgamestatus = await playgame();
        console.log(playgamestatus)
    }
    catch (error) {
        console.log(error)
    }
};

dailyRoutine();


// another example
const subject = async ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Subject is English');
        }, 2500)
    })
}
const subject1 = async ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve('Subject is Biology');
        }, 2300)
    })
}

const allSubjects = async ()=>{
    try{
        let subjectcompleted = await subject();
        console.log(subjectcompleted);
        let subject1completed = await subject1();
        console.log(subject1completed);
    }
    catch(error){
        console.log(error);
    }
};
allSubjects();


