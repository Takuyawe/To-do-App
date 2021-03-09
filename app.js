const date = document.querySelector('[data-date]')
const what = document.querySelector('[data-what]')
const where = document.querySelector('[data-where]')
const submit = document.querySelector('[data-submit]')

const table = document.querySelector('.table')


let datalists = []

submit.addEventListener('click', e => {
    e.preventDefault()

    let setDate = date.value
    let setWhat = what.value
    let setWhere = where.value

    let tr = document.createElement('tr')
    tr.innerHTML = `
    <th>${setDate}</th><th>${setWhat}</th><th>${setWhere}</th><td><div class="trash"></div></td>
    `
    table.appendChild(tr)

    datalist = {
        data1: setDate,
        data2: setWhat,
        data3: setWhere
    }

    datalists.push(datalist)

    localStorage.setItem('data', JSON.stringify(datalists))

    date.value = ''
    what.value = ''
    where.value = ''

})


document.addEventListener('click', e => {
    if (e.target.classList.contains('trash')){
        let target = e.target.parentElement.parentElement
        
        const index = [...table.querySelectorAll('tr')].indexOf(target)
        datalists = datalists.filter((item, i) => i != index - 1)
        
        localStorage.setItem('data', JSON.stringify(datalists))




        target.remove()


    }
})



document.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('data')
    const datapack = JSON.parse(data)

    for(let i = 0; i < datapack.length; i++) {
        datalists.push(datapack[i])
    }
    
    for(let i = 0; i < datapack.length ; i++) {
        let data1 = datapack[i].data1
        let data2 = datapack[i].data2
        let data3 = datapack[i].data3
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <th>${data1}</th><th>${data2}</th><th>${data3}</th><td><div class="trash"></div></td>
        `
        table.appendChild(tr)
    }
})