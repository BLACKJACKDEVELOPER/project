

function start() {
    
    return {
        async register() {
            const fname = document.getElementById("fname").value
            const lname = document.getElementById("lname").value
            const email = document.getElementById("email").value
            const password = document.getElementById("password").value

            // validator
            if (!fname || !lname || !email || !password) {
                return Swal.fire({
                    icon:"error",
                    text:"กรอกแบบฟอร์มให้ครบ"
                })
            }
            // register data 
            fetch("/register",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    fname,
                    lname,
                    email,
                    password
                })
            }).then(res=> res.json()).then(({pass,msg})=> {
                return pass ? Swal.fire({icon:"success",text:"สมัครสำเร็จ"}) : Swal.fire({icon:"error",text:msg})
            })
        }
    }
}

const init = start();