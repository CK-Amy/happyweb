setInterval(function(){
    const length=2000;

    let el=document.querySelectorAll("div")[0];
    let coordinate="";

    for (let i = 0; i < length; i++) {
        coordinate +=
            parseInt(Math.random() * 10000) / 100 +
            "% " +
            parseInt(Math.random() * 10000) / 100 +
            "%, ";
    }

    // for (let i = 0; i < length; i++){
    //     coordinate +=
    //         parseInt(Math.random() * 10000) / 100 +
    //         "%" +
    //         parseInt(Math.random() * 10000) / 100 +
    //         "%,";
    // }
    coordinate = "polygon(" + coordinate.slice(0, -2) + ")";
    el.style.clipPath = coordinate;
    el.style.backgroundColor =
        "#" + (~~(Math.random() * (1 << 24))).toString(16);
},500);
