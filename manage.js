let students = [
    {
        name: "Иванов Иван Иванович",
        group: "ИТ-401",
        thesis: "Разработка системы управления проектами",
        supervisor: "Петров П.П."
    },
    {
        name: "Сидорова Анна Владимировна",
        group: "ИТ-402",
        thesis: "Анализ больших данных в образовании",
        supervisor: "Иванова И.И."
    },
    {
        name: "Петров Алексей Сергеевич",
        group: "ИТ-403",
        thesis: "ИИ для автоматизации тестирования ПО",
        supervisor: "Сидоров С.С."
    },
    {
        name: "Козлова Екатерина Дмитриевна",
        group: "ИТ-404",
        thesis: "Разработка мобильного приложения для ВУЗа",
        supervisor: "Козлов К.К."
    },
    {
        name: "Смирнов Дмитрий Алексеевич",
        group: "ИТ-405",
        thesis: "Кибербезопасность в IoT устройствах",
        supervisor: "Смирнова С.С."
    }
];

const addStudentBtn = document.getElementById('addStudentBtn');
const addStudentModal = document.getElementById('addStudentModal');
const addStudentForm = document.getElementById('addStudentForm');
const studentsList = document.getElementById('studentsList');
const closeModal = document.querySelector('#addStudentModal .close');

function renderStudents() {
    studentsList.innerHTML = students.map((student, index) => `
        <div class="student-card">
            <div class="student-info">
                <p><strong>${student.name}</strong></p>
                <p>Группа: ${student.group}</p>
                <p>Тема диплома: ${student.thesis}</p>
                <p>Руководитель: ${student.supervisor}</p>
            </div>
            <div class="student-actions">
                <button class="delete-btn" onclick="deleteStudent(${index})">Отчислить</button>
            </div>
        </div>
    `).join('');
}

function addStudent(student) {
    students.push(student);
    renderStudents();
}

window.deleteStudent = function(index) {
    if (confirm("Вы уверены, что хотите отчислить этого студента?")) {
        students.splice(index, 1);
        renderStudents();
    }
}

addStudentBtn.addEventListener('click', () => {
    addStudentModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    addStudentModal.style.display = 'none';
});

addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newStudent = {
        name: document.getElementById('studentName').value,
        group: document.getElementById('studentGroup').value,
        thesis: document.getElementById('thesisTitle').value,
        supervisor: document.getElementById('supervisorName').value
    };
    
    addStudent(newStudent);
    addStudentForm.reset();
    addStudentModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === addStudentModal) {
        addStudentModal.style.display = 'none';
    }
});

renderStudents();