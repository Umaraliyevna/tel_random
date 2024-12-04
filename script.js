let phoneNumbers = ["+998901234567", "+998901234568", "+998901234569", "+998901234570"];

function addTable(){
    var row = `
        <tr>
            <th>Nomer</th>
        </tr>        
    `;   
    phoneNumbers.forEach(element => {
        row += `
            <tr>
                <td>${element}</td>
            </tr>
        `;
    });

    document.getElementById('table').innerHTML = row;        
}

addTable();



function generateRandomPhoneNumber() {
    var son1 = "";
    var arr = [90,91,92,93,94,95,99,77,88,50];
    son1 +=arr[Math.floor(Math.random() * arr.length)];
    let randomNumber = "+998" + son1 + Math.floor(1000000 + Math.random() * 9000000);
    document.querySelector('#input').value = randomNumber;
    return randomNumber;
}


document.getElementById('btn').addEventListener( 'click', generateRandomPhoneNumber)

document.getElementById('addBtn').addEventListener('click', () =>{
    if (phoneNumbers.includes(document.getElementById('input').value)) {
        alert("Tasodifiy raqam arrayda mavjud, qaytadan random raqam generatsiya qilinmoqda.");
        generateRandomPhoneNumber()
    } else {
        phoneNumbers.push(document.getElementById('input').value);
        addTable();
    }
    document.getElementById('input').value =''
});





