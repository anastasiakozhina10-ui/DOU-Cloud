// Проверка авторизации
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

function getChildren() { return JSON.parse(localStorage.getItem('ch_' + currentUser?.group)) || []; }
function getAttendance() { return JSON.parse(localStorage.getItem('at_' + currentUser?.group)) || {}; }
function saveChildren(data) { localStorage.setItem('ch_' + currentUser.group, JSON.stringify(data)); }
function saveAttendance(data) { localStorage.setItem('at_' + currentUser.group, JSON.stringify(data)); }

function openWindow(page) {
    window.open(page + '.html', '_blank', 'width=800,height=600');
}