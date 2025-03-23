const question = document.querySelectorAll('.question')

question.forEach((item) => {
    item.addEventListener('click', function(e) {

        // item.classList.toggle('active');
        console.log(e.target)

        // To make 'this' keyword works, don't do arrow functions!
        let plusIcon = this.querySelector('.plus-icon');
        let minusIcon = this.querySelector('.minus-icon');
        
        let description = this.nextElementSibling;
        description.classList.toggle('active');
        console.log(description.className);
        // console.log(description.style.maxHeight);
        
        // if(description.className == "description") {
        //     description.classList.toggle('active');
        //     plusIcon.style.display = "none";
        //     minusIcon.style.display = "block";
        // } else {
        //     description.classList.toggle('active');
        //     plusIcon.style.display = "block";
        //     minusIcon.style.display = "none";
        // }

        if(description.style.maxHeight) {
            description.style.maxHeight = null;
            // description.classList.toggle('active');
            plusIcon.style.display = "block";
            minusIcon.style.display = "none";
        } else {
            description.style.maxHeight = description.scrollHeight + 'px';
            // description.classList.toggle('active');
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
        }
    })
})