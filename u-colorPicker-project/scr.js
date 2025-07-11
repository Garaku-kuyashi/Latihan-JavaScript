document.getElementById('picker').addEventListener('input', function(event){
    let select = event.target.value

    document.getElementById('kode').textContent = select

    document.getElementById('col').style.backgroundColor = select
})