export function switchPage (){
    let main1 = document.getElementById("main1");
    main1.classList.toggle("displayon");
    main1.classList.toggle("displayoff");

    let main2 = document.getElementById("main2");
    main2.classList.toggle("displayoff");
    main2.classList.toggle("displayon");
}