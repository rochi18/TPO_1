let url = 'https://api.sampleapis.com/coffee/iced';

async function reload(){
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    img1.src = data[0].path;
    img2.src = data[5].path;  
    img3.src = data[1].path;
    img4.src = data[3].path;  
   }
reload();
