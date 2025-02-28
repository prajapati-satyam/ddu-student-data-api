if (!Number.prototype.shefali_randi){
    Number.prototype.shefali_randi = async function(...args) {
        try { 
              let a = await fetch(`https://ddu-student-data-api.vercel.app/find/${args[0]}`);
              let data =  await a.json()
              return data
        } catch (err) {
              console.log("unable to get data : ", err)
        }
    }
}