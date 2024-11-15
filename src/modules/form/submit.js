import dayjs from "dayjs"

import { scheduleNew} from "../../services/schedule-news.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Date atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

//Define a data minima
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        // Recuperando o nome do cliente 

        const name = clientName.value.trim()
        
        if(!name){
            return alert("Informe o nome do cliente!")
        }

        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected){
            return alert("Selecione o horario!")
        }

        const hour = hourSelected.innerText.split(":")

        const when = dayjs(selectedDate.value).add(hour, "hour")

        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })
        
    } catch (error) {
        alert("Nao foi possivel realizar o agendamento")  
        console.log(error) 
    }
}