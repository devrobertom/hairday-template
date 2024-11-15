export async function scheduleNew({id, name, when}){
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, when}),
        })    
    } catch (error) {
        console.log(error)
        alert("Nao foi possivel agendar. Tente mais tarde!")    
    }
}