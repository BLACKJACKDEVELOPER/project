

function start() {
    
    return {
        async login() {
            const email = document.getElementById("email").value
            const password = document.getElementById("password").value

            // validator
            if (!email || !password) {
                return Swal.fire({
                    icon:"error",
                    text:"กรอกแบบฟอร์มให้ครบ"
                })
            }
            // register data 
            fetch("/login",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            }).then(res=> res.json()).then(({pass,msg})=> {
                return pass ? Swal.fire({icon:"success",text:msg}) : Swal.fire({icon:"error",text:msg})
            })
        }
    }
}

const init = start();