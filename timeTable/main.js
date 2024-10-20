document.addEventListener('DOMContentLoaded', function () {

    const teachers = {
        science: {
            name: 'Mr. Tony Stark.',
            subject: 'Science',
            email: 'tonyStark@example.com',
            phone: '+1234567890',
            image: '/timeTable/teacherimgs/Tony_Stark.jpg'
        },
        maths: {
            name: 'Mr. Bruce Banner',
            subject: 'Maths',
            email: 'bruceBanner@example.com',
            phone: '+9876543210',
            image: '/timeTable/teacherimgs/Bruce_Banner.jpg'
        },
        social: {
            name: 'Mr. Steve Rogers',
            subject: 'Social Studies',
            email: 'steveRogers@example.com',
            phone: '+1122334455',
            image: '/timeTable/teacherimgs/Steve_Rogers.jpg'
        },
        hindi: {
            name: 'Ms. Wanda Maximoff',
            subject: 'Hindi',
            email: 'wandaMaximoff@example.com',
            phone: '+9988776655',
            image: '/timeTable/teacherimgs/wanda_maximoff.jpg'
        },
        english: {
            name: 'Ms. Natasha Romanoff',
            subject: 'English',
            email: 'natashaRomanoff@example.com',
            phone: '+5566778899',
            image: '/timeTable/teacherimgs/natsha_romanoff.jpg'
        },
        arts: {
            name: 'Ms. Carol Danvers',
            subject: 'Arts',
            email: 'stevenking@example.com',
            phone: '+1122112211',
            image: '/timeTable/teacherimgs/carol_danvers.jpg'
        },
        sports: {
            name: 'Mr. Stephen Strange',
            subject: 'Sports',
            email: 'davidjohnson@example.com',
            phone: '+9988773322',
            image: '/timeTable/teacherimgs/stepehn_strange.jpg'
        }
    };

    function showTeacherDetails(subject) {
        const teacher = teachers[subject];
        if (teacher) {

            document.getElementById('teacherName').textContent = teacher.name;
            console.log(teacher.name);

            document.getElementById('teacherSubject').textContent = `Subject: ${teacher.subject}`;
            console.log(teacher.subject);

            document.getElementById('teacherEmail').textContent = `Email: ${teacher.email}`;
            console.log(teacher.email);

            document.getElementById('teacherPhone').textContent = `Phone: ${teacher.phone}`;
            console.log(teacher.email);

            document.getElementById('teacherImage').src = teacher.image;
            console.log(teacher.image);

            $('#teacherModal').modal('show');
        }
    }

    const subjects = document.querySelectorAll('.subject');
    subjects.forEach(subject => {
        subject.addEventListener('click', function (err) {
            err.preventDefault();
            const subjectName = this.textContent.toLowerCase();
            showTeacherDetails(subjectName);
        });
    });
});
