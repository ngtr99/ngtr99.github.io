'use strict';

// Create a switch language
window.location.hash = "#english";

const languageButton = document.createElement('button');
languageButton.textContent = 'Language';
languageButton.className = 'language-button';
document.body.appendChild(languageButton);

languageButton.addEventListener('click', function() {
    const lang = window.location.hash === "#english" ? 'vietnamese' : 'english';

    //Change the language of the buttons in the website
    document.querySelector('.language-button').textContent = language[lang].languageButton;

    //Change the language of the content in the website
    document.querySelector('.name').textContent = language[lang].name;
    document.querySelector('.address').textContent = language[lang].address;
    document.querySelector('.phone').textContent = language[lang].phone;
    document.querySelector('.services').textContent = language[lang].services;
    document.querySelector('.gallery').textContent = language[lang].gallery;
    document.querySelector('.contact').textContent = language[lang].contact;

    //Change the language of the services menu
    let servicesMenuList = "";
    if (document.querySelector('.services-menu')) {
        document.querySelector('.services-menu').textContent = ' ';
    }

    for (const key in servicesMenu[lang]) {
        servicesMenuList += `<h3 class="services-menu-list-title">${key}</h3>`
        servicesMenuList += `<ul class="services-menu-list">`
        for (const item in servicesMenu[lang][key]) {
            servicesMenuList += `<li class="services-menu-list-item">${item}: ${servicesMenu[lang][key][item]}</li>`
        }
        servicesMenuList += `</ul>`
    }

    const servicesTitle = language[lang].services;

    const services = `
        <div class="services-menu">
            <h2 class="services-menu-title">${servicesTitle}</h2>
            <div class="services-menu-list-container">
                ${servicesMenuList}

            </div>
        </div>
    `
    let targetElement = document.querySelector('.board');
    targetElement.insertAdjacentHTML('afterend', services);

    //Change the language of the contact
    const contact = `
        <div class = "menu-contact">
        </div>
    `
   
    document.querySelector('.calendar-container').insertAdjacentHTML('beforebegin', contact);
    window.location.hash = `#${lang}`;
});


// Add the picture in the gallery
const galleryImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

const galleryContainer = document.createElement('div');
galleryContainer.className = 'gallery-container';

galleryImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Gallery Image';
    imgElement.className = 'gallery-image';
    galleryContainer.appendChild(imgElement);
});

// Create the content of the website
const language = {
    'english': {
        //button
        'languageButton': 'Thay đổi ngôn ngữ',

        //content
        'name': 'Welcome to Thuy Nail Salon',
        'address': 'Address: 216 Huỳnh Tấn Phát, Khuê Trung, Cẩm Lệ, Đà Nẵng',
        'phone': 'Phone: 090-655-88-58',
        'services': 'SERVICES',
        'gallery': 'GALLERY',
        'contact': 'CONTACT'
    },
    'vietnamese': {
       //button
        'languageButton': 'Change language',

        //content
        'name': 'Chào mừng đến với Thuỷ Nail Salon',
        'address': 'Địa chỉ: 216 Huỳnh Tấn Phát, Khuê Trung, Cẩm Lệ, Đà Nẵng',
        'phone': 'Số điện thoại: 090-655-8858',
        'services': 'DỊCH VỤ',
        'gallery': 'THƯ VIỆN',
        'contact': 'LIÊN HỆ'
    }
}

// Create the menu of the services
const servicesMenu = {
    "english": {
        'Pedicure': {
            "Warmimg Pedicure": "30.000",
            "Warming Pedicure With Gel": "50.000",
        },
        "Manicure": {
            "Warming Manicure": "30.000",
            "Warming Manicure With Gel": "50.000",
        },
        "Set": {
            "Acrylic Full Set": "30.000",
        },
        "Ombre": {
            "Ombre /two-tones Full Set": "50.000",
        },
        "Fills": {
            "Acrylic Fills": "30.000",
            "Ombre /two-tones Refill": "50.000",
        },
        "Dip": {
            "Dipping Powder": "30.000",
        },
        "Kid": {
            "Kid Pedicure": "15.000",
            "Kid Manicure": "15.000",
        }
    },

    "vietnamese": {
        'Làm Móng Chân': {
            "Làm Móng Chân Nước Ấm": "30.000",
            "Làm Móng Chân Nước Ấm Kèm Gel": "50.000",
        },
        "Làm Móng Tay": {
            "Làm Móng Tay Nước Ấm": "30.000",
            "Làm Móng Tay Nước Ấm Kèm Gel": "50.000",
        },
        "Làm Bộ": {
            "Làm Tay và Chân Acrylic": "30.000",
        },
        "Ombre": {
            "Ombre Tay và Chân": "50.000",
        },
        "Làm Đầy": {
            "Làm Đầy Acrylic": "30.000",
            "Làm Đầy Ombre": "50.000",
        },
        "Dip": {
            "Dipping Powder": "30.000",
        },
        "Trẻ Em": {
            "Làm Móng Chân Trẻ Em": "15.000",
            "Làm Móng Tay Trẻ Em": "15.000",
        }
    }
};


document.body.appendChild(galleryContainer);
//Add the information of the contact
const information = {
    "vietnamese": {
        'Địa chỉ': '216 Huỳnh Tấn Phát, Khuê Trung, Cẩm Lệ, Đà Nẵng',
        'Số điện thoại': '090-655-8858',
    },

    "english": {
        'Address': '216 Huynh Tan Phat, Khue Trung, Cam Le, Đa Nang',
        'Phone': '090-655-88-58',
        }
    }


// Create the menu of the website
document.querySelector('.services').addEventListener('click', function() {
    document.querySelector('.services-menu').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.gallery').addEventListener('click', function() {
    document.querySelector('.gallery-image').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.contact').addEventListener('click', function() {
    document.querySelector('.calendar-container').scrollIntoView({ behavior: 'smooth' });
});

//Create the services menu
let servicesMenuList = "";
if (document.querySelector('.services-menu')) {
    document.querySelector('.services-menu').textContent = ' ';
}

for (const key in servicesMenu["english"]) {
    servicesMenuList += `<h3 class="services-menu-list-title">${key}</h3>`
    servicesMenuList += `<ul class="services-menu-list">`
    for (const item in servicesMenu["english"][key]) {
        servicesMenuList += `<li class="services-menu-list-item">${item}: ${servicesMenu["english"][key][item]}</li>`
    }
    servicesMenuList += `</ul>`
}

const servicesTitle = language["english"].services;

const services = `
    <div class="services-menu">
        <h2 class="services-menu-title">${servicesTitle}</h2>
        <div class="services-menu-list-container">
            ${servicesMenuList}

        </div>
    </div>
`
let targetElement = document.querySelector('.board');
targetElement.insertAdjacentHTML('afterend', services);


// Create calendar
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("month-year");
    let selectedDates = new Set();
    let currentDate = new Date();


    function updateCalendar() {
        calendar.innerHTML = "";
        let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        monthYear.textContent = currentDate.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
        
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const day = document.createElement("div");
            day.classList.add("day");
            day.textContent = `${date.toLocaleString('default', { weekday: 'short' })} ${i}`;
            day.addEventListener("click", () => toggleBooking(i, day));
            calendar.appendChild(day);
        }
    }

    function toggleBooking(day, element) {
        if (selectedDates.has(day)) {
            selectedDates.delete(day);
            element.classList.remove("selected");
        } else {
            selectedDates.add(day);
            element.classList.add("selected");
        }
    }

    function createAppointment() {
        const startTime = document.getElementById("start-time").value;
        const endTime = document.getElementById("end-time").value;
        
        if (selectedDates.size === 0 || !startTime || !endTime) {
            alert("Please select a date and time before creating an appointment.");
            return;
        }
        
        // Format the appointment details
        const appointmentDetails = `Appointment on ${[...selectedDates].map(day => `${new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toLocaleString('default', { weekday: 'long', day: 'numeric', month: 'long' })}`).join(", ")} from ${startTime} to ${endTime}`;

        // Create a mailto link
        const emailBody = encodeURIComponent(`I would like to schedule an appointment: ${appointmentDetails}`);
        const emailSubject = encodeURIComponent('New Appointment Booking');
        const emailTo = "minhnguyet12923@gmail.com";
        
        const mailtoLink = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
        
        // Open the email client with the pre-filled details
        window.location.href = mailtoLink;
    }

    function prevMonth() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    }

    function nextMonth() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    }

    updateCalendar();

