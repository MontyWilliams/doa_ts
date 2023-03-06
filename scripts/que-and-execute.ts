export async function queueAndExecute(){

}

queueAndExecute(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1);
    });
