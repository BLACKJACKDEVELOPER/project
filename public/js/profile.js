
class Profile {
    static image64 = null;
    
    // Encode file to base64
    base64(file) {
        return new Promise((resolve,reject)=> {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = ()=> resolve(reader.result)
            reader.onerror = ()=> reject(false)
        })
    }
    // Mouted Upload function
    upload() {
        const file = document.createElement("input")
        file.setAttribute("type","file")
        file.onchange = async ()=> {
            const data = await this.base64(event.target.files[0])
            this.image64 = data.split(";base64,").pop()
            document.getElementById("preview").src = data
        }
        file.click()
    }

    // function update profile send json to server
    async update() {
        const fname = document.getElementById("fname").value
        const lname = document.getElementById("lname").value

        // request to server end point /profile method : POST
        fetch("/profile",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fname,
                lname,
                image64:this.image64 ? this.image64 : false
            })
        }).then(res => res.json()).then(res=> {
            res.pass ? window.location.reload() : alert(res.msg)
        })
    }
}

const profile = new Profile()