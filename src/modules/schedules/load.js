import { hoursLoad } from "../form/hours-load";

const selectedDate = document.getElementById("date")
export function schedulesDay(){
    /// Obtem a data do input
    const date = selectedDate.value
    
    // Renderiza as horas disponiveis
    hoursLoad({})
}