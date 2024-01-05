  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
    function changebackgroundcolor(){ let colorB,page;
page=document.getElementById("page");
colorB=getRandomColor();
console.log(colorB);
page.style.backgroundColor=colorB;
}

  