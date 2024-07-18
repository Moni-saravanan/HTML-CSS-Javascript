let accordians= document.querySelectorAll('.accordian-wrapper .accordian');
accordians.forEach((acco) =>{
    acco.onclick = () =>{
        accordians.forEach((subcontent) => {
            subcontent.classList.remove("active");
        })
        acco.classList.add("active");
    }
});
