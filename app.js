const btn1 = document.querySelector(".btn");
const input1 = document.getElementById("input");
const copyIcon1 = document.querySelector(".fa-copy");


btn1.addEventListener("click",()=>{
    createPassword();
})

copyIcon1.addEventListener("click",()=>{
    copyPassword();
})

function createPassword(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:<>?/~ ";

    const passLength = 14;
    let password = "";

    for(let index = 0; index < passLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNum , randomNum + 1);
    }
    input1.value = password;
    

}

function copyPassword(){
    navigator.clipboard.writeText(input1.value);
    alert("Password copied!!!");
    input1.select();
    input1.setSelectionRange(0,9999);
}
