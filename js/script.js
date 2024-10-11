menu = false;
function toggleMenu() {
    if (!menu) {
        $("header").addClass("dark");
        menu = true;
        $(".burger").html(
            `<svg width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.625 4.375L4.375 15.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M15.625 15.625L4.375 4.375" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`
        )
    } else {
        $("header").removeClass("dark");
        menu = false;
        $(".burger").html(
            `<svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.25" x2="13" y2="1.25" stroke="currentColor" stroke-width="1.5"/>
                <line y1="5.58334" x2="13" y2="5.58334" stroke="currentColor" stroke-width="1.5"/>
                <line y1="9.91666" x2="13" y2="9.91666" stroke="currentColor" stroke-width="1.5"/>
            </svg>`
        )
    }
    $(".menu").slideToggle();
}

function openHome() {
    window.location.href = 'index.html';
}

function openFamily() {
    window.location.href = 'family.html';
}

function openEducation() {
    window.location.href = 'education.html';
}

function openHobbies() {
    window.location.href = 'hobbies.html';
}

function openContact() {
    window.location.href = 'contact.html';
}