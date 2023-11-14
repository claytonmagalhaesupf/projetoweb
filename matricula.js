var tdTotalCursos = document.getElementById("total-cursos");
var tdTotalHoras = document.getElementById("total-horas");

var totalHoras = 0;
var totalCursos = 0;

function adicionaCurso(checkbox) {
    
    if (checkbox.checked) { //marquei
        totalCursos++;
        totalHoras += parseInt(checkbox.value);
    } else { //desmarquei
        totalCursos--;
        totalHoras -= parseInt(checkbox.value);
    }

    tdTotalHoras.textContent = totalHoras + ' h(s)';
    tdTotalCursos.textContent = totalCursos + ' curso(s)';

}

function confirmaMatricula() {
    if (totalCursos > 0) {
        alert('Matrícula confirmada');
        window.location.href = "index.html";
    } else {
        alert('Nenhum curso selecionado!');
    }
}