// Add solution



//No need to add app.listen and port number variable.

//Do not modify
//Make sure to save the server in variable called app
if(require.main === module){
    app.listen(4000, () => console.log(`Server running at port 4000`));
}

module.exports = app;